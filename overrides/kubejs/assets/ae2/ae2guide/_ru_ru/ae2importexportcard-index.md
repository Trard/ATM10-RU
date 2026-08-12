---
navigation:
  title: "Дополнение: AE2 Import Export Card"
  icon: ae2importexportcard:export_card
  position: 150
categories:
  - tools
item_ids:
- ae2importexportcard:export_card
- ae2importexportcard:import_card
---

# AE2 Import Export Card

<Row>
  <ItemImage id="ae2importexportcard:export_card" scale="2" />

  <ItemImage id="ae2importexportcard:import_card" scale="2" />
</Row>

Карты импорта и экспорта позволяют перемещать предметы между вашим инвентарём и МЭ-системой.

## Карта импорта

<ItemImage id="ae2importexportcard:import_card" scale="2" />

Карта импорта забирает предметы из указанных слотов вашего инвентаря и помещает их в МЭ-систему.

![Карта импорта](diagrams/import_card.png)

При нажатии на слот появляется галочка. Любой предмет в отмеченном галочкой слоте будет импортирован в МЭ-систему.
Чтобы изменить фильтр, перетащите предметы из инвентаря в верхние слоты.

### Улучшения

Карта импорта поддерживает следующие [улучшения](items-blocks-machines/upgrade_cards.md):

*   <ItemLink id="fuzzy_card" /> — фильтрация по степени повреждения и/или игнорирование NBT предмета;
*   <ItemLink id="inverter_card" /> — переключение фильтра с белого списка на чёрный.

### Рецепт

<RecipeFor id="ae2importexportcard:import_card" />

## Карта экспорта

<ItemImage id="ae2importexportcard:export_card" scale="2" />

Карта экспорта работает аналогично, но переносит предметы из МЭ-системы в ваш инвентарь.

![Карта экспорта](diagrams/export_card.png)

Чтобы указать предметы, перетащите предмет из инвентаря в один из верхних слотов, а затем нажмите на слот своего инвентаря,
чтобы задать необходимое количество. Нажатие правой кнопкой сбрасывает значение до X.

### Улучшения

Карта экспорта поддерживает следующие [улучшения](items-blocks-machines/upgrade_cards.md):

*   <ItemLink id="fuzzy_card" /> — фильтрация по степени повреждения и/или игнорирование NBT предмета;
*   <ItemLink id="speed_card" /> — увеличение скорости передачи от одного предмета до целой стопки;
*   <ItemLink id="crafting_card" /> — автоматический запрос и создание предметов, которых сейчас нет в наличии.

### Рецепт

<RecipeFor id="ae2importexportcard:export_card" />
