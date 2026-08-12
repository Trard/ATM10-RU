let $TreeMap = Java.loadClass("java.util.TreeMap")
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Type} */
let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
/** @type {import("java.util.TreeMap").$TreeMap$$Type<(import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original), (import("java.util.List").$List$$Type<(import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original) >) >} */
let announcements = new $TreeMap()
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original} */
let currentVersion = null

// files related:
// kubejs/assets/atm/lang/en_us.json

// Add your announcements here
function initAnnouncements(){
  addAnnouncement("4.0", "Добавлены моды: Ars Creo, Ice and Fire, Oritech,")
  addAnnouncement("4.1", "Добавлены моды: Oritech Things")
  addAnnouncement("4.2", "Удалены моды: Oritech Things")
  addAnnouncement("4.3", "Добавлены моды: Ars Controle, Create Aquatic Ambitions, Create Hypertube, Mekanism More Machines")
  addAnnouncement("4.5", "Добавлены моды: Expanded Ae, Industrialization Overdrive и RFTools Storage")
  addAnnouncement("4.6", "Добавлены моды: Aether, BotanyPots, BotanyTrees и RefinedTypes")
  addAnnouncement("4.6", "Удалён мод Harvest with ease: теперь его функции выполняет FTB Ultimine")
  addAnnouncement("4.7", "Добавлены моды: Draconic Evolution и BotanyPots-Mystical")
  addAnnouncement("4.12", "Добавлен мод ModularBees")
  addAnnouncement("4.13", "Добавлен мод Dyson Cube Project")
  addAnnouncement("5.0", "Удалён мод Modular Machinery Reborn, используйте Modern Industrialization")
  addAnnouncement("5.3", Text.of("Мы готовимся ").append(Text.red("УДАЛИТЬ")).append(" моды ").append(Text.blue("Eternal Starlight")).append(" и ").append(Text.blue("Hyperbox")).append(", будьте готовы к обновлению до версии 6.0+"))
  addAnnouncement("5.5", Text.of("Мы запустили ").append(Text.green("All The Mons (ATM10 + Cobblemon)").clickOpenUrl("https://www.curseforge.com/minecraft/modpacks/all-the-mons").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))).append(" для открытого бета-тестирования!"))
}

ServerEvents.loaded(event => {
  if (!Platform.isLoaded("bcc")) return
  announcements.clear()
  /** @type {import("dev.wuffs.bcc.BetterCompatibilityChecker").$BetterCompatibilityChecker$$Original} */
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
  initAnnouncements()
})

function addAnnouncement(/** @type {string} */version, /** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component) {
  announcements.computeIfAbsent(new $DefaultArtifactVersion(version), (key) => Utils.newList()).addLast(typeof component == "string" ? Text.of(component) : component)
}

PlayerEvents.loggedIn(event => {
  if (currentVersion == null) return
  let currentDismissed = event.player.persistentData.getString("LastDismissedAnnouncementVersion")
  if (currentDismissed == null) {
    currentDismissed = new $DefaultArtifactVersion("0.0.0")
  } else {
    currentDismissed = new $DefaultArtifactVersion(currentDismissed)
  }
  let ableToDismiss = false
  let printHeader = true
  announcements.forEach((key, listComponents) => {
    if (currentDismissed.compareTo(key) < 0 && currentVersion.compareTo(key) >= 0) {
      ableToDismiss = true
      if (printHeader) {
        event.player.tell(Text.translatable("=====[  %s  ]=====", Text.yellow("Новости All The Mods").bold()).gold().bold())
        printHeader = false
      }
      for (let component of listComponents) {
        let message = Text.translatable("[%s] - %s", Text.gold(key.toString()), component.yellow()).yellow()
        event.player.tell(message)
      }            
    }
  })
    
  if (ableToDismiss) {
    let message = Text.translatable("announcements.atm.dismiss_up_to_version", Text.blue(currentVersion.toString()))
      .green()
      .hover(Text.translatable("kubejs.atm.click_here"))
      .clickRunCommand("/dismiss_announcements")
        
    event.player.tell(message)
  }
})

ServerEvents.basicPublicCommand("dismiss_announcements", event => {
  let player = event.player
  if (player == null) {
    event.cancel("Игрок не найден!")
  } else {
    let pData = player.getPersistentData()
    if (event.input == "clear") {
      pData.putString("LastDismissedAnnouncementVersion", "0.0.0")
      event.respond(Text.yellow("Сброшена версия прочитанных объявлений!"))
    } else {
      if (currentVersion == null) {
        event.cancel("Текущая версия сборки не определена. Установлен ли BetterCompatibilityCheck?")
      } else {
        pData.putString("LastDismissedAnnouncementVersion", currentVersion.toString())
        event.respond(Text.translatable("announcements.atm.dismissed_up_to_version", currentVersion.toString()).yellow())
      }
    }
  }
})
