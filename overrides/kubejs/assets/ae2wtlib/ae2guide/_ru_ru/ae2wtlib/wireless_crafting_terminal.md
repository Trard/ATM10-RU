---
navigation:
  parent: ae2wtlib/ae2wtlib-index.md
  title: Беспроводной терминал создания
  icon: ae2:wireless_crafting_terminal
  position: 100
categories:
- ae2wtlib
item_ids:
  - ae2:wireless_crafting_terminal
---

# Беспроводной терминал создания

<ItemImage id="ae2:wireless_crafting_terminal" scale="3" />

<ItemLink id="ae2:wireless_crafting_terminal" /> — это [беспроводная](wireless_terminals.md) версия
<ItemLink id="ae2:crafting_terminal" />. AE2WTLib добавляет автоматическое [пополнение](restock.md) из ME-сети и позволяет
функции выбора блока брать предметы из ME-сети. С <ItemLink id="ae2wtlib:magnet_card" /> терминал также служит магнитом.

Его можно объединить с другими [беспроводными терминалами](wireless_terminals.md) в
<ItemLink id="ae2wtlib:wireless_universal_terminal" />.

AE2WTLib расширяет функцию Minecraft `Pick Block`: если нужного предмета нет в инвентаре, он будет взят из сети. Если
текущий слот окажется заполнен, терминал также попытается убрать предметы в сеть.

## Интерфейс

См. [«Терминалы»](ae2:items-blocks-machines/terminals.md).

## Улучшения

<ItemLink id="ae2:wireless_crafting_terminal" /> поддерживает следующие
[улучшения](ae2:items-blocks-machines/upgrade_cards.md):

*   <ItemLink id="ae2:energy_card" /> увеличивает ёмкость аккумулятора
*   <ItemLink id="ae2wtlib:quantum_bridge_card" /> снимает ограничение дальности, в том числе между измерениями, и
    автоматически заряжает терминал от ME-сети
*   <ItemLink id="ae2wtlib:magnet_card" /> добавляет функцию магнита

## Рецепт

<RecipeFor id="ae2:wireless_crafting_terminal" />
