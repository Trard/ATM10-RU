---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Плоскость уничтожения
  icon: annihilation_plane
  position: 210
categories:
- devices
item_ids:
- ae2:annihilation_plane
---

# Плоскость уничтожения

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/blocks/annihilation_plane.snbt" />
</GameScene>

Плоскость уничтожения ломает блоки и подбирает предметы. Она работает подобно <ItemLink id="import_bus" />, отправляя их
в [сетевое хранилище](../ae2-mechanics/import-export-storage.md). Чтобы предмет был подобран, он должен коснуться лицевой
стороны плоскости: предметы в некоторой области вокруг она не подбирает.

Плоскости уничтожения можно зачаровать любыми чарами для кирки. Поэтому да, если сборка это позволяет, можно наложить
на несколько плоскостей невероятно высокий уровень «Удачи» и [автоматизировать переработку руды](../example-setups/ore-fortuner.md).
Кроме того, «Шёлковое касание» действует ожидаемым образом, «Эффективность» снижает расход энергии при разрушении блока,
а «Прочность» даёт шанс вовсе не потратить энергию.

Они являются [кабельными компонентами](../ae2-mechanics/cable-subparts.md).

**НЕ ЗАБУДЬТЕ РАЗРЕШИТЬ ФЕЙКОВЫХ ИГРОКОВ В НАСТРОЙКАХ ПРИВАТА ЧАНКА**

## Фильтрация

Плоскость уничтожения сломает блок или подберёт предмет, только если сможет поместить получившийся дроп или предмет
в свою сеть. Поэтому для фильтрации *нужно ограничить содержимое хранилища этой сети* — обычно для этого плоскость
подключают к [подсети](../ae2-mechanics/subnetworks.md). <ItemLink id="storage_bus" /> или [ячейку](../items-blocks-machines/storage_cells.md)
можно [разметить](cell_workbench.md), чтобы добиться такого результата.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/annihilation_filtering.snbt" />

  <DiamondAnnotation pos="1 0.5 0.5" color="#00ff00">
        Фильтр по предметам, выпадающим из блока, который требуется ломать.
  </DiamondAnnotation>

  <DiamondAnnotation pos=".5 0.5 2.5" color="#00ff00">
        Разметка по предметам, выпадающим из блока, который требуется ломать.
  </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Ещё раз: фильтрация выполняется *по выпадающим предметам*. Например, чтобы отфильтровать разрушение
<ItemLink id="minecraft:amethyst_cluster" />, нужна плоскость с «Шёлковым касанием». Иначе все предыдущие стадии роста
ничего не роняют, и плоскость будет ломать их при любых настройках, ведь сеть всегда может сохранить «ничего».

## Рецепт

<RecipeFor id="annihilation_plane" />
