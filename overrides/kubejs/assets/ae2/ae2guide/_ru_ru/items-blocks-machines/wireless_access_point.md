---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Беспроводная точка доступа
  icon: wireless_access_point
  position: 210
categories:
- devices
item_ids:
- ae2:wireless_booster
- ae2:wireless_access_point
---

# Беспроводная точка доступа

<BlockImage id="wireless_access_point" p:state="has_channel" scale="8" />

Предоставляет беспроводной доступ через <ItemLink id="wireless_terminal" />.
Радиус действия и энергопотребление зависят от количества установленных <ItemLink id="wireless_booster" />.

В сети может быть сколько угодно беспроводных точек доступа, а в каждой — любое количество
<ItemLink id="wireless_booster" />. Изменяя конструкцию, можно подобрать оптимальное соотношение энергопотребления и радиуса.

Требует [канал](../ae2-mechanics/channels.md).

Также используется для привязки [беспроводных терминалов](wireless_terminals.md).

# Беспроводной усилитель

<ItemImage id="wireless_booster" scale="2" />

Увеличивает радиус действия беспроводной точки доступа.

## Рецепты

<RecipeFor id="wireless_access_point" />

<RecipeFor id="wireless_booster" />
