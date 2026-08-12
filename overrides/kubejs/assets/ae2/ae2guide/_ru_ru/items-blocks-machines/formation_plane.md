---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Плоскость формирования
  icon: formation_plane
  position: 210
categories:
- devices
item_ids:
- ae2:formation_plane
---

# Плоскость формирования

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/formation_plane.snbt" />
</GameScene>

Плоскость формирования устанавливает блоки и выбрасывает предметы. Она работает подобно <ItemLink id="storage_bus" />
только для ввода: устанавливает или выбрасывает ресурсы, когда такие [устройства](../ae2-mechanics/devices.md), как
<ItemLink id="import_bus" /> и <ItemLink id="interface" />, «помещают» их в неё через
[сетевое хранилище](../ae2-mechanics/import-export-storage.md).

<GameScene zoom="8" interactive={true}>
  <ImportStructure src="../assets/assemblies/formation_plane_demonstration.snbt" />
  <IsometricCamera yaw="255" pitch="30" />
</GameScene>

Обратите внимание, что эти конструкции похожи на цепочки «шина импорта → шина хранения» и «интерфейс → шина хранения»
в [подсетях-трубопроводах](../example-setups/pipe-subnet.md).

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/import_storage_pipe.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_storage_pipe.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Это [устройство](../ae2-mechanics/devices.md) использует те же механики, что шины хранения, например в
[подсетях-трубопроводах](../example-setups/pipe-subnet.md). В таких конструкциях плоскостью можно заменить шину хранения,
если вместо переноса предметов требуется выбрасывать их или устанавливать блоки.

Плоскости формирования являются [кабельными компонентами](../ae2-mechanics/cable-subparts.md).

**НЕ ЗАБУДЬТЕ РАЗРЕШИТЬ ФЕЙКОВЫХ ИГРОКОВ В НАСТРОЙКАХ ПРИВАТА ЧАНКА**

## Фильтрация

По умолчанию плоскость устанавливает или выбрасывает любые ресурсы. Помещённые в слоты фильтра предметы образуют белый список
и разрешают обработку только указанных предметов.

Предметы и жидкости можно перетаскивать в слоты из JEI/REI, даже если у вас их на самом деле нет.

Щёлкните правой кнопкой мыши с ёмкостью для жидкости (например, ведром или резервуаром), чтобы выбрать фильтром саму
жидкость, а не предмет-ёмкость.

## Приоритет

Приоритет задаётся кнопкой с гаечным ключом в правом верхнем углу интерфейса.
Поступающие в сеть предметы сначала направляются в хранилище с наивысшим приоритетом.

## Настройки

*   Плоскость можно настроить на установку блоков в мире либо выбрасывание предметов.

## Улучшения

Плоскость формирования поддерживает следующие [улучшения](upgrade_cards.md):

*   <ItemLink id="capacity_card" /> увеличивает количество слотов фильтра;
*   <ItemLink id="fuzzy_card" /> позволяет учитывать степень повреждения и/или игнорировать NBT предмета при фильтрации;
*   <ItemLink id="inverter_card" /> переключает фильтр с белого списка на чёрный.

## Рецепт

<RecipeFor id="formation_plane" />
