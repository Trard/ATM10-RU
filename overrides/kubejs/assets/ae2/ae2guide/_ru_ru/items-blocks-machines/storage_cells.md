---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Ячейки хранения
  icon: item_storage_cell_1k
  position: 410
categories:
- tools
item_ids:
- ae2:item_cell_housing
- ae2:fluid_cell_housing
- ae2:cell_component_1k
- ae2:cell_component_4k
- ae2:cell_component_16k
- ae2:cell_component_64k
- ae2:cell_component_256k
- ae2:item_storage_cell_1k
- ae2:item_storage_cell_4k
- ae2:item_storage_cell_16k
- ae2:item_storage_cell_64k
- ae2:item_storage_cell_256k
- ae2:fluid_storage_cell_1k
- ae2:fluid_storage_cell_4k
- ae2:fluid_storage_cell_16k
- ae2:fluid_storage_cell_64k
- ae2:fluid_storage_cell_256k
---

# Ячейки хранения

<Column>
  <Row>
    <ItemImage id="item_storage_cell_1k" scale="4" />

    <ItemImage id="item_storage_cell_4k" scale="4" />

    <ItemImage id="item_storage_cell_16k" scale="4" />

    <ItemImage id="item_storage_cell_64k" scale="4" />

    <ItemImage id="item_storage_cell_256k" scale="4" />
  </Row>

  <Row>
    <ItemImage id="fluid_storage_cell_1k" scale="4" />

    <ItemImage id="fluid_storage_cell_4k" scale="4" />

    <ItemImage id="fluid_storage_cell_16k" scale="4" />

    <ItemImage id="fluid_storage_cell_64k" scale="4" />

    <ItemImage id="fluid_storage_cell_256k" scale="4" />
  </Row>
</Column>

Ячейки хранения — один из основных способов хранения ресурсов в Applied Energistics. Они устанавливаются в
<ItemLink id="drive" /> или <ItemLink id="chest" />.

Объяснение их ёмкости в байтах и типах приведено в разделе [«Байты и типы»](../ae2-mechanics/bytes-and-types.md).

Если ячейка пуста, компонент хранения можно извлечь из корпуса: возьмите ячейку в руку и щёлкните правой кнопкой мыши с зажатым Shift.

<Row>
    <Recipe id="upgrade/item_storage_cell_1k_to_4k" />

    Ячейки хранения можно улучшать до более высокого уровня, объединяя их с компонентами хранения высокого уровня в сетке крафта.
    Содержимое сохранится, а компонент низкого уровня будет возвращён.
</Row>

## Ёмкость при разном количестве типов

Из-за [начальной стоимости типов](../ae2-mechanics/bytes-and-types.md) ячейка с 1 используемым типом вмещает в 2x больше,
чем ячейка, в которой используются все 63 типа.

| Ячейка                                  | Общая ёмкость с 1 используемым типом | Общая ёмкость с 63 используемыми типами |
| ---------------------------------------- | -----------------------------------: | --------------------------------------: |
| <ItemLink id="item_storage_cell_1k" />   |                                8,128 |                                   4,160 |
| <ItemLink id="item_storage_cell_4k" />   |                               32,512 |                                  16,640 |
| <ItemLink id="item_storage_cell_16k" />  |                              130,048 |                                  66,560 |
| <ItemLink id="item_storage_cell_64k" />  |                              520,192 |                                 266,240 |
| <ItemLink id="item_storage_cell_256k" /> |                            2,080,768 |                               1,064,960 |


## Разметка

Ячейку можно отфильтровать, чтобы она принимала только определённые предметы, подобно фильтрации <ItemLink id="storage_bus" />.
Это настраивается в <ItemLink id="cell_workbench" />.

Предметы можно перетаскивать в слоты из JEI/REI, даже если у вас их на самом деле нет.

## Улучшения

Ячейки хранения поддерживают следующие [улучшения](upgrade_cards.md), устанавливаемые через <ItemLink id="cell_workbench" />:

*   <ItemLink id="fuzzy_card" /> (недоступна для жидкостных ячеек) позволяет размечать ячейку с учётом степени повреждения
    и/или игнорированием NBT предмета;
*   <ItemLink id="inverter_card" /> переключает фильтр с белого списка на чёрный;
*   <ItemLink id="equal_distribution_card" /> выделяет каждому типу одинаковый объём байтов ячейки, поэтому один тип не сможет занять её целиком;
*   <ItemLink id="void_card" /> уничтожает помещаемые предметы, если ячейка заполнена (либо если заполнен объём, выделенный
    конкретному типу картой равномерного распределения). Это не даёт фермам переполняться, но обязательно внимательно настройте разметку;
*   переносные ячейки принимают <ItemLink id="energy_card" />, увеличивающую ёмкость аккумулятора.

## Окрашивание

Переносные предметные и жидкостные ячейки окрашиваются подобно кожаной броне — объединением с красителями в сетке крафта.

# Корпусы

Ячейку можно изготовить из компонента хранения и корпуса либо окружить компонент ингредиентами корпуса:

<Row>
  <Recipe id="network/cells/item_storage_cell_1k" />

  <Recipe id="network/cells/item_storage_cell_1k_storage" />
</Row>

Отдельные корпусы изготавливаются следующим образом:

<Row>
  <RecipeFor id="item_cell_housing" />

  <RecipeFor id="fluid_cell_housing" />
</Row>

# Компоненты хранения

Компоненты хранения — основа всех ячеек AE2, определяющая их ёмкость. Каждый следующий уровень увеличивает ёмкость
в 4x и требует 3 компонента предыдущего уровня.

<Column>
  <Row>
    <RecipeFor id="cell_component_1k" />

    <RecipeFor id="cell_component_4k" />

    <RecipeFor id="cell_component_16k" />
  </Row>

  <Row>
    <RecipeFor id="cell_component_64k" />

    <RecipeFor id="cell_component_256k" />
  </Row>
</Column>

# Предметные ячейки хранения

Предметная ячейка вмещает до 63 разных типов предметов и доступна во всех стандартных размерах.

<Column>
  <Row>
    <Recipe id="network/cells/item_storage_cell_1k_storage" />

    <Recipe id="network/cells/item_storage_cell_4k_storage" />

    <Recipe id="network/cells/item_storage_cell_16k_storage" />
  </Row>

  <Row>
    <Recipe id="network/cells/item_storage_cell_64k_storage" />

    <Recipe id="network/cells/item_storage_cell_256k_storage" />
  </Row>
</Column>

## Переносное предметное хранилище

Такая ячейка действует как крошечный <ItemLink id="chest" /> в кармане или как разновидность рюкзака. Её можно заряжать
в <ItemLink id="charger" />.

В отличие от обычных ячеек хранения, при увеличении байтовой ёмкости у переносных ячеек *уменьшается* количество доступных типов,
а общая байтовая ёмкость вдвое ниже.

Помимо карт улучшений для всех ячеек, переносные также принимают <ItemLink id="energy_card" />, улучшающую внутренний аккумулятор.

<Column>
  <Row>
    <RecipeFor id="portable_item_cell_1k" />

    <RecipeFor id="portable_item_cell_4k" />

    <RecipeFor id="portable_item_cell_16k" />
  </Row>

  <Row>
    <RecipeFor id="portable_item_cell_64k" />

    <RecipeFor id="portable_item_cell_256k" />
  </Row>
</Column>

# Жидкостные ячейки хранения

Жидкостная ячейка вмещает до 5 разных типов жидкостей и доступна во всех стандартных размерах.

<Column>
  <Row>
    <Recipe id="network/cells/fluid_storage_cell_1k_storage" />

    <Recipe id="network/cells/fluid_storage_cell_4k_storage" />

    <Recipe id="network/cells/fluid_storage_cell_16k_storage" />
  </Row>

  <Row>
    <Recipe id="network/cells/fluid_storage_cell_64k_storage" />

    <Recipe id="network/cells/fluid_storage_cell_256k_storage" />
  </Row>
</Column>

## Переносное жидкостное хранилище

Такая ячейка действует как крошечный <ItemLink id="chest" /> в кармане или как разновидность рюкзака. Её можно заряжать
в <ItemLink id="charger" />.

В отличие от обычных ячеек хранения, при увеличении байтовой ёмкости у переносных ячеек *уменьшается* количество доступных типов,
а общая байтовая ёмкость вдвое ниже.

Помимо карт улучшений для всех ячеек, переносные также принимают <ItemLink id="energy_card" />, улучшающую внутренний аккумулятор.

<Column>
  <Row>
    <RecipeFor id="portable_fluid_cell_1k" />

    <RecipeFor id="portable_fluid_cell_4k" />

    <RecipeFor id="portable_fluid_cell_16k" />
  </Row>

  <Row>
    <RecipeFor id="portable_fluid_cell_64k" />

    <RecipeFor id="portable_fluid_cell_256k" />
  </Row>
</Column>

# Творческая ячейка хранения

<Row>
  <ItemImage id="creative_storage_cell" scale="2" />
</Row>

Творческие ячейки **не предоставляют бесконечное хранилище**. Вместо этого они служат бесконечными источниками и поглотителями
любого предмета или жидкости, на которые вы их [разметили](cell_workbench.md).
