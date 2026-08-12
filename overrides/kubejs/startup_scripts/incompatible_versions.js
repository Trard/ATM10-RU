// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

KubeJSTweaks.checkCompatibility(event => {
  event.checkModVersion("jei", "19.22.0.316", "Эта версия вызывает проблемы с прочностью инструментов")
  event.checkModVersion("uranus", "[2.3.1-bugfix,2.3.1-bugfix2]", "Эта версия вызывает падение TPS и утечки памяти")
  event.checkModVersion("octolib", "0.6.0.2", "Эта версия вызывает высокую нагрузку на процессор")
  event.checkModVersion("utilitarian", "1.21.1-0.15.0", "Эта версия вызывает сбой при применении костной муки к маленьким цветам")
  event.checkModVersion("amendments", "1.21-2.0.4", "Эта версия вызывает сбой при открытии кафедр")

  event.checkModLoaded("accessories_compat_layer", "Этот мод может вызывать проблемы совместимости Curios с другими модами")
  event.checkModLoaded("letmedespawn", "Из-за проблем с NBT этот мод может мешать складывать одинаковые предметы в одну стопку")

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
