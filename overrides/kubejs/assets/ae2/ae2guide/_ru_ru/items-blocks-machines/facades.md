---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Фасады
  icon: facade
  icon_components:
    "ae2:facade_item": "minecraft:stone"
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:facade
---

# Фасады

Фасады позволяют придать базе более аккуратный вид. Ими можно скрывать кабели обоих размеров, а изготовить фасад можно
из множества видов блоков.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/facades_1.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Фасады могут закрыть кабель со всех сторон, но [кабельные компоненты](../ae2-mechanics/cable-subparts.md) и соединения
кабелей будут выступать наружу.

<GameScene zoom="6"  interactive={true}>
  <ImportStructure src="../assets/assemblies/facades_2.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Проявите изобретательность: улучшайте облик базы или создавайте блоки с разными текстурами на каждой стороне.

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/facades_3.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Скрытие фасадов

Фасады скрываются, пока в любой руке находится <a href="network_tool.md">сетевой инструмент</a>.

С блоками за скрытыми фасадами можно взаимодействовать, не снимая фасады.

## Рецепт

Поместите блок с желаемой текстурой в центр между 4 <ItemLink id="cable_anchor" />.

![Рецепт фасада](../assets/diagrams/facade_recipe.png)
