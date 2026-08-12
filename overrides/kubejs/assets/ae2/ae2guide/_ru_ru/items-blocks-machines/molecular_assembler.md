---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Молекулярный сборщик
  icon: molecular_assembler
  position: 310
categories:
- machines
item_ids:
- ae2:molecular_assembler
---

# Молекулярный сборщик

<BlockImage id="molecular_assembler" scale="8" />

Молекулярный сборщик принимает предметы, выполняет операцию, заданную соседним <ItemLink id="pattern_provider" /> либо
установленным <ItemLink id="crafting_pattern" />, <ItemLink id="smithing_table_pattern" /> или
<ItemLink id="stonecutting_pattern" />, а затем выталкивает результат в соседние инвентари.

В этом сборщике установлен шаблон изготовления, задающий рецепт «1 дубовое бревно = 4 дубовые доски». Когда в верхнюю
воронку поступают дубовые брёвна, сборщик создаёт доски и выбрасывает их в нижнюю воронку.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/standalone_assembler.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Основное применение молекулярного сборщика

Однако прежде всего сборщики используются рядом с <ItemLink id="pattern_provider" />. В этом случае поставщик шаблонов
действует особым образом и вместе с ингредиентами отправляет соседним сборщикам сведения о соответствующем шаблоне.
Поскольку сборщики автоматически выталкивают результат в соседние инвентари (а значит, в слоты возврата поставщика шаблонов),
для автоматизации шаблонов изготовления достаточно одного сборщика возле поставщика.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/assembler_tower.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Улучшения

Молекулярный сборщик поддерживает следующие [улучшения](upgrade_cards.md):

*   <ItemLink id="speed_card" />

## Рецепт

<RecipeFor id="molecular_assembler" />

## Примечание

OptiFine нарушает работу функции «выталкивать в соседние инвентари», поэтому большинство систем изготовления со сборщиками не работает.
