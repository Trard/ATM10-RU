---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Приёмщик энергии
  icon: energy_acceptor
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:energy_acceptor
---

# Приёмщик энергии

<Row gap="20">
<BlockImage id="energy_acceptor" scale="8" /> 

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/cable_energy_acceptor.snbt" />
</GameScene>
</Row>

Приёмщик преобразует распространённые виды энергии из других технических модов во внутреннюю [энергию](../ae2-mechanics/energy.md)
AE2 — AE. <ItemLink id="controller" /> также способен делать это, но стороны контроллера ценны, поэтому зачастую лучше
использовать отдельный приёмщик энергии.

Коэффициенты преобразования Forge Energy и Techreborn Energy:

*   2 FE = 1 AE (Forge)
*   1 E  = 2 AE (Fabric)

Скорость преобразования полностью зависит от того, сколько AE может хранить сеть. Причины объясняются
на [этой странице](../ae2-mechanics/energy.md).

## Варианты

Приёмщик энергии существует в 2 вариантах: обычном и плоском, представляющем собой
[кабельный компонент](../ae2-mechanics/cable-subparts.md). Плоский вариант позволяет сделать некоторые конструкции компактнее.

Обычный и плоский варианты можно взаимно преобразовать в сетке крафта.

## Рецепт

<RecipeFor id="energy_acceptor" />

<RecipeFor id="cable_energy_acceptor" />
