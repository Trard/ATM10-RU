---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Цветущий истинный кварц
  icon: flawless_budding_quartz
  position: 010
categories:
- misc ingredients blocks
item_ids:
- ae2:flawless_budding_quartz
- ae2:flawed_budding_quartz
- ae2:chipped_budding_quartz
- ae2:damaged_budding_quartz
- ae2:small_quartz_bud
- ae2:medium_quartz_bud
- ae2:large_quartz_bud
- ae2:quartz_cluster
---

# Цветущий истинный кварц

(см. также [«Рост истинного кварца»](../ae2-mechanics/certus-growth.md))

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/budding_blocks.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

На цветущих блоках истинного кварца, подобно аметисту, появляются кварцевые почки. Такие блоки встречаются
в [метеоритах](../ae2-mechanics/meteorites.md). Существует 4 уровня цветущего истинного кварца: безупречный,
несовершенный, потресканный и повреждённый. Проще всего различать их с помощью модов вроде HWYLA, Jade, The One Probe
и подобных (либо на экране F3).

Каждый раз, когда почка на несовершенном, потресканном или повреждённом цветущем блоке переходит на следующую стадию роста,
блок может ухудшиться на 1 уровень и в конце концов превратиться в обычный <ItemLink id="quartz_block" />.

Безупречный цветущий истинный кварц при росте почек не ухудшается и служит бесконечным источником.

При разрушении обычной киркой цветущий блок истинного кварца ухудшается на один уровень. Кирка с «Шёлковым касанием»
не ухудшает блок, если только он не безупречный. **Это означает, что безупречный цветущий истинный кварц нельзя
подобрать и перенести киркой**. Вместо этого для перемещения таких блоков можно воспользоваться
[пространственным хранилищем](../ae2-mechanics/spatial-io.md).

## Рецепты

Несовершенный, потресканный и повреждённый цветущий истинный кварц создаётся, если бросить предыдущий уровень цветущего
блока (или <ItemLink id="quartz_block" />) в воду вместе с одним или несколькими <ItemLink id="charged_certus_quartz_crystal" />.

Безупречный цветущий истинный кварц создать нельзя — его можно только найти в мире.

<Row>
  <RecipeFor id="damaged_budding_quartz" />

  <RecipeFor id="chipped_budding_quartz" />

  <RecipeFor id="flawed_budding_quartz" />
</Row>
