---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Энергохранилища
  icon: energy_cell
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:energy_cell
- ae2:dense_energy_cell
- ae2:creative_energy_cell
---

# Энергохранилища

<Row gap="20">
  <BlockImage id="energy_cell" scale="8" p:fullness="4" />

  <BlockImage id="dense_energy_cell" scale="8" p:fullness="4" />

  <BlockImage id="creative_energy_cell" scale="8" />
</Row>

Энергохранилища увеличивают запас [энергии](../ae2-mechanics/energy.md) сети. Даже небольшой буфер сглаживает всплески
потребления при помещении или извлечении большого количества предметов. Более крупный запас позволяет сети работать,
пока энергия не вырабатывается (например, ночью при использовании солнечных панелей), либо выдерживать огромный мгновенный
расход [пространственного хранилища](../ae2-mechanics/spatial-io.md).

## Индикаторы заполнения

<Row>
<BlockImage id="energy_cell" scale="4" p:fullness="0" />
<BlockImage id="energy_cell" scale="4" p:fullness="1" />
<BlockImage id="energy_cell" scale="4" p:fullness="2" />
<BlockImage id="energy_cell" scale="4" p:fullness="3" />
<BlockImage id="energy_cell" scale="4" p:fullness="4" />
</Row>

Полосы на боковой стороне хранилища соответствуют его запасу энергии:

*   0 при заряде менее 25%;
*   1 при заряде от 25% до 50%;
*   2 при заряде от 50% до 75%;
*   3 при заряде от 75% до 99%;
*   4 при заряде более 99%.

## Виды хранилищ

*   <ItemLink id="energy_cell" /> вмещает 200k AE. Одного такого блока достаточно в большинстве случаев: он легко
    справляется со скачками потребления при обычной работе сети.
*   <ItemLink id="dense_energy_cell" /> вмещает 1.6M AE. Оно пригодится для питания сети накопленной энергией либо для
    покрытия огромного мгновенного расхода крупных систем [пространственного хранения](../ae2-mechanics/spatial-io.md).
*   <ItemLink id="creative_energy_cell" /> — предмет творческого режима для испытаний, предоставляющий НЕОГРАНИЧЕННУЮ МОЩЩЩЬ или что-то вроде того.

## Рецепты

<Row>
  <RecipeFor id="energy_cell" />

  <RecipeFor id="dense_energy_cell" />
</Row>
