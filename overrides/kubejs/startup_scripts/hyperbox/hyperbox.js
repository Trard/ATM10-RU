NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", event => {
    if (event.to.location().getNamespace().equals("hyperbox")){
        event.entity.tell("Hyperbox будет удалён в версии 6.0+, перенесите содержимое в Compact Machines")
        if (Platform.clientEnvironment) {
            Client["submit(java.lang.Runnable)"](() => {
                Client.gui.setTitle(Text.blue("Hyperbox").append(Text.red(" будет удалён!")))
                Client.gui.setSubtitle(Text.white("Перенесите вещи в новый мод ").append(Text.blue("Compact Machines")))
            })
        }
    }
})
