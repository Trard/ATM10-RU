---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Матрица сборщиков
    icon: extendedae:assembler_matrix_frame
categories:
- extended devices
item_ids:
- extendedae:assembler_matrix_frame
- extendedae:assembler_matrix_wall
- extendedae:assembler_matrix_glass
- extendedae:assembler_matrix_pattern
- extendedae:assembler_matrix_crafter
- extendedae:assembler_matrix_speed
---

# Матрица сборщиков

<Row>
<BlockImage id="extendedae:assembler_matrix_frame" p:formed="true" p:powered="true" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_wall" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_glass" scale="5"></BlockImage>
</Row>
<Row>
<BlockImage id="extendedae:assembler_matrix_pattern" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_crafter" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_speed" scale="5"></BlockImage>
</Row>

Матрица сборщиков — многоблочная конструкция, объединяющая <ItemLink id="ae2:molecular_assembler" /> и
<ItemLink id="ae2:pattern_provider" />. Она одновременно выполняет множество заданий крафта (если в МЭ-сети достаточно
<ItemLink id="ae2:crafting_accelerator" />) и экономит каналы.

## Структура

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="../structure/assembler_matrix.snbt"></ImportStructure>
</GameScene>

Это прямоугольный параллелепипед с длиной каждого ребра от 3 до 7 блоков.
- Рёбра состоят из каркасов матрицы сборщиков.
- Грани состоят из стен или стекла матрицы.
- Внутри находятся ядра шаблонов, крафта и скорости.

Действующая матрица должна содержать хотя бы одно ядро шаблонов и одно ядро крафта. Её необходимо заполнить целиком —
полой она быть не может. После правильного формирования и подачи энергии линии на каркасе становятся синими.

## Ядра матрицы сборщиков

Существуют 3 разных вида ядер.

- Ядро шаблонов

Матрица принимает шаблоны только из ядер шаблонов. Каждое ядро предоставляет 36 ячеек.

- Ядро крафта

Матрица распределяет задания между ядрами крафта. Каждое ядро одновременно выполняет 8 заданий.

- Ядро скорости

Это аналог <ItemLink id="ae2:speed_card" /> для матрицы. 5 ядер позволяют работать на полной скорости; установка более
чем 5 ядер дополнительного ускорения не даёт.

## Интерфейс

Нажмите правой кнопкой мыши по сформированной подключённой матрице, чтобы открыть интерфейс.

![Интерфейс матрицы](../pic/assembler_matrix.png)

Здесь можно добавлять и искать шаблоны, а также видеть число выполняемых заданий.
