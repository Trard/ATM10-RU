---
navigation:
  parent: example-setups/example-setups-index.md
  title: Специализированное локальное хранилище
  icon: drive
---

# Специализированное локальное хранилище

Благодаря одному из [особых свойств интерфейса](../items-blocks-machines/interface.md#special-interactions)
[подсеть](../ae2-mechanics/subnetworks.md) может открыть основной сети доступ к своему хранилищу, сама не получая доступа
к хранилищу основной сети и занимая всего один [канал](../ae2-mechanics/channels.md).

Это удобно для локального хранилища при ферме: продукция не будет переполнять основное хранилище.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/local_storage.snbt" />

<BoxAnnotation color="#dddddd" min="4 0 0" max="5 2 1">
        (1) Любой способ импорта предметов (в данном случае интерфейс)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3 0 0" max="4 1 1">
        (2) Накопитель: содержит ячейки, отфильтрованные по продукции фермы. В ячейки можно установить карты
        равномерного распределения и уничтожения излишков.
        <Row><ItemImage id="item_storage_cell_4k" scale="2" /> <ItemImage id="equal_distribution_card" scale="2" /> <ItemImage id="void_card" scale="2" /></Row>
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3 1 0" max="4 2 0.3">
        (3) Терминал создания: видит содержимое накопителя подсети, но не хранилища основной сети.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 0 0" max="2.3 1 1">
        (4) Интерфейс № 2: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1.7 0 0" max="2 1 1">
        (5) Шина хранения: приоритет выше, чем у основного хранилища; можно отфильтровать по продукции фермы.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 2 0.3">
        Терминал создания: видит и содержимое хранилища основной сети, *и* подсеть.
  </BoxAnnotation>

<DiamondAnnotation pos="0 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* Первый <ItemLink id="interface" /> (1) просто принимает предметы от фермы и передаёт их в подсеть.
* <ItemLink id="drive" /> (2) содержит несколько [ячеек](../items-blocks-machines/storage_cells.md).
  Их следует [разметить](../items-blocks-machines/cell_workbench.md) по продукции фермы.
  В ячейки можно установить <ItemLink id="equal_distribution_card" /> и <ItemLink id="void_card" />.
* Второй <ItemLink id="interface" /> (4) имеет обычные настройки.
* [Приоритет](../ae2-mechanics/import-export-storage.md#storage-priority) <ItemLink id="storage_bus" /> выше,
  чем у основного хранилища. Шину можно отфильтровать по продукции фермы.

## Принцип работы

* <ItemLink id="interface" /> подсети показывает <ItemLink id="storage_bus" /> основной сети содержимое
  <ItemLink id="drive" />. Поэтому шина может напрямую забирать предметы из ячеек накопителя и помещать их обратно.
* У шины хранения высокий [приоритет](../ae2-mechanics/import-export-storage.md#storage-priority), поэтому предметы
  предпочтительно возвращаются в подсеть, а не в основное хранилище.
* Важно: при заполнении ячеек подсети предметы не переливаются в основную сеть. Если ферма ломается при заполненном выходе,
  <ItemLink id="void_card" /> вместо этого удалит лишние предметы.
* Если ферма производит несколько видов предметов, <ItemLink id="equal_distribution_card" /> не позволит одному виду
  заполнить все ячейки и вытеснить остальные.
