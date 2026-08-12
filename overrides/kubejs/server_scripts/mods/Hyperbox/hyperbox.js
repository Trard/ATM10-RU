if (Platform.isLoaded("hyperbox")) {
    BlockEvents.rightClicked("hyperbox:hyperbox",event => {
        event.server.tell(Text.red('Hyperbox будет удалён в версии 6.0+, перенесите содержимое в Compact Machines'))
    })
}

