---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Беспроводной соединитель МЭ
    icon: extendedae:wireless_connect
categories:
- extended devices
item_ids:
- extendedae:wireless_connect
- extendedae:wireless_tool
---

# Беспроводной соединитель МЭ

<Row gap="20">
<BlockImage id="extendedae:wireless_connect" scale="6"></BlockImage>
<ItemImage id="extendedae:wireless_tool" scale="6"></ItemImage>
</Row>

Беспроводной соединитель МЭ связывает две сети подобно <ItemLink id="ae2:quantum_link" />, однако имеет ограниченный
радиус и не работает между измерениями. Соединители поддерживают только связь один к одному. Для соединений многие ко
многим используйте <ItemLink id="extendedae:wireless_hub" />.

## Связывание беспроводных соединителей

Нажмите набором беспроводной настройки МЭ по двум соединителям, которые хотите связать.

Нажмите им, крадучись, чтобы очистить текущую настройку набора.

После успешного создания связи текстура соединителя меняется.

Несвязанные беспроводные соединители МЭ

<GameScene zoom="5" background="transparent">
  <ImportStructure src="../structure/wireless_connector_off.snbt"></ImportStructure>
</GameScene>

Связанные беспроводные соединители МЭ

<GameScene zoom="5" background="transparent">
  <ImportStructure src="../structure/wireless_connector_on.snbt"></ImportStructure>
</GameScene>

## Цвет

Беспроводные соединители можно окрашивать подобно кабелям. Они подключаются только к кабелям и соединителям того же
цвета.

Для окрашивания нужен <ItemLink id="ae2:color_applicator" />.

Таким образом можно построить следующую систему:

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="../structure/wireless_connector_setup.snbt"></ImportStructure>
</GameScene>

## Расход энергии

Чем дальше соединители друг от друга, тем больше энергии они потребляют. Зависимость стоимости от расстояния нелинейна,
поэтому на большом расстоянии расход может стать очень высоким.

<ItemLink id="ae2:energy_card" /> снижает расход энергии: каждая карта уменьшает его на 10%.
