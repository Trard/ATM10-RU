---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: МЭ-наполнитель
    icon: extendedae:caner
categories:
- extended devices
item_ids:
- extendedae:caner
---

# МЭ-наполнитель

<BlockImage id="extendedae:caner" scale="8"></BlockImage>

МЭ-наполнитель — механизм для «наполнения» предметов различными материалами: жидкостями, газами Mekanism, маной
Botania и даже энергией!

В первую ячейку помещается наполняющий материал, во вторую — заполняемый предмет.

Для работы требуется энергия; каждая операция стоит 80 AE.

![Интерфейс наполнителя](../pic/caner_gui.png)

По умолчанию он переносит только жидкости. Для других материалов установите соответствующее дополнение.

### Поддерживаемые дополнения:
- Applied Flux
- Applied Mekanistics
- Applied Botanics Addon

## Автокрафт с МЭ-наполнителем

Энергию и сетевое подключение принимают только верхняя и нижняя стороны.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../structure/caner_example.snbt"></ImportStructure>
</GameScene>

Простая схема с МЭ-наполнителем. Получив ингредиенты от <ItemLink id="ae2:pattern_provider" />, он автоматически
выталкивает заполненный предмет.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../structure/caner_auto.snbt"></ImportStructure>
</GameScene>

Шаблон должен содержать только наполняющий материал и заполняемую ёмкость. Примеры:

Наполнение ведра водой:

![Наполнение ведра](../pic/fill_water.png)

Зарядка энергетической таблетки (требуется Applied Flux):

![Зарядка энергетической таблетки](../pic/fill_energy.png)

## Опустошение

В режиме опустошения МЭ-наполнитель также может извлекать материалы из ёмкости. В шаблоне необходимо поменять местами
вход и выход.
