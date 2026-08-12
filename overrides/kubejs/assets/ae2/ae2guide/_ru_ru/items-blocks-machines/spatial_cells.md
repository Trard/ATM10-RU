---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Пространственные ячейки
  icon: spatial_storage_cell_128
  position: 410
categories:
- tools
item_ids:
- ae2:spatial_storage_cell_2
- ae2:spatial_storage_cell_16
- ae2:spatial_storage_cell_128
- ae2:spatial_cell_component_2
- ae2:spatial_cell_component_16
- ae2:spatial_cell_component_128
---

# Ячейки пространственного хранения

  <Row>
    <ItemImage id="spatial_storage_cell_2" scale="4" />

    <ItemImage id="spatial_storage_cell_16" scale="4" />

    <ItemImage id="spatial_storage_cell_128" scale="4" />
  </Row>

Ячейки пространственного хранения используются для [хранения физических объёмов пространства](../ae2-mechanics/spatial-io.md).
Они устанавливаются в <ItemLink id="spatial_io_port" />.

В отличие от [ячеек хранения](../items-blocks-machines/storage_cells.md), пространственные ячейки нельзя переформатировать.

Ещё раз: **ПОСЛЕ ИСПОЛЬЗОВАНИЯ ПРОСТРАНСТВЕННУЮ ЯЧЕЙКУ НЕЛЬЗЯ СБРОСИТЬ, ПЕРЕФОРМАТИРОВАТЬ ИЛИ ИЗМЕНИТЬ ЕЁ РАЗМЕР.**
Если нужен другой размер, изготовьте новую ячейку.


## Рецепты

  <Row>
    <Recipe id="network/cells/spatial_storage_cell_2_cubed_storage" />

    <Recipe id="network/cells/spatial_storage_cell_16_cubed_storage" />

    <Recipe id="network/cells/spatial_storage_cell_128_cubed_storage" />
  </Row>

# Корпусы

Ячейку можно изготовить из пространственного компонента и корпуса либо окружить пространственный компонент ингредиентами корпуса:

<Row>
  <Recipe id="network/cells/spatial_storage_cell_2_cubed" />

  <Recipe id="network/cells/spatial_storage_cell_2_cubed_storage" />
</Row>

Отдельный корпус изготавливается следующим образом:

  <RecipeFor id="item_cell_housing" />

# Пространственные компоненты

Пространственные компоненты — основа ячеек пространственного хранения. Каждый следующий уровень увеличивает размеры
сохраняемого объёма в 8 раз.

  <Row>
    <RecipeFor id="spatial_cell_component_2" />

    <RecipeFor id="spatial_cell_component_16" />

    <RecipeFor id="spatial_cell_component_128" />
  </Row>
