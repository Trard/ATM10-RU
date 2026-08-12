---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автоматизация производства процессоров
  icon: logic_processor
---

# Автоматизация производства процессоров

Существует много способов автоматизировать производство [процессоров](../items-blocks-machines/processors.md), и здесь представлен один из них.

Эту общую схему можно собрать с предметными трубами, каналами или любым аналогичным средством логистики из другого мода,
если оно поддерживает фильтрацию.

![Схема процесса](../assets/diagrams/processor_flow_diagram.png)

Ниже подробно показано, как собрать её только средствами AE2, используя [подсети-«трубы»](pipe-subnet.md).

Поскольку в схеме применяется <ItemLink id="pattern_provider" />, она предназначена для интеграции с системой
[автоматического создания](../ae2-mechanics/autocrafting.md). Если вы хотите лишь автономно автоматизировать производство процессоров,
замените поставщик шаблонов ещё одной бочкой и помещайте ингредиенты непосредственно в верхнюю бочку.

Эта схема также совместима с предыдущими версиями AE2: даже если стороны <ItemLink id="inscriber" /> имеют разные функции,
подсети-«трубы» всё равно вставляют и извлекают предметы через нужные стороны.

## Как правильно закодировать шаблоны

Нередко [шаблон](../items-blocks-machines/patterns.md), который требуется закодировать, **НЕ СОВПАДАЕТ С ПОКАЗАННЫМ В JEI**
или с тем, что JEI создаёт при нажатии кнопки «+». В этом случае JEI выдаст два отдельных шаблона: один для печатных компонентов,
а второй для окончательной сборки. Кроме того, шаблон печатных компонентов будет включать
[пресс](../items-blocks-machines/presses.md). Нам это не подходит, поскольку схема работает иначе. Нужен один шаблон,
принимающий исходные ресурсы и выдающий готовый процессор. Пресс уже находится в высекателе, поэтому добавлять его в шаблон не следует.

---

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/processor_automation.snbt" />

  <BoxAnnotation color="#dddddd" min="5 1 0" max="6 2 1" thickness=".05">
        (1) Поставщик шаблонов: обычные настройки и соответствующие шаблоны обработки.

        <Row>
            ![Логический шаблон](../assets/diagrams/logic_pattern_small.png)
            ![Вычислительный шаблон](../assets/diagrams/calculation_pattern_small.png)
            ![Инженерный шаблон](../assets/diagrams/engineering_pattern_small.png)
        </Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4.7 2 0" max="5 3 1" thickness=".05">
        (2) Шина хранения № 1: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 1 0" max="4.3 2 1" thickness=".05">
        (3) Шина экспорта № 1: фильтр по кремнию, установлены 2 карты ускорения.
        <Row><ItemImage id="silicon" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 4 0" max="4.3 3 1" thickness=".05">
        (4) Шина экспорта № 2: фильтр по золотым слиткам, установлены 2 карты ускорения.
        <Row><ItemImage id="minecraft:gold_ingot" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 5 0" max="4.3 4 1" thickness=".05">
        (5) Шина экспорта № 3: фильтр по кристаллам истинного кварца, установлены 2 карты ускорения.
        <Row><ItemImage id="certus_quartz_crystal" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 6 0" max="4.3 5 1" thickness=".05">
        (6) Шина экспорта № 4: фильтр по алмазам, установлены 2 карты ускорения.
        <Row><ItemImage id="minecraft:diamond" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 3 0" max="2 2 1" thickness=".05">
        (7) Шина экспорта № 5: фильтр по красной пыли, установлены 2 карты ускорения.
        <Row><ItemImage id="minecraft:redstone" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 1 0" max="3 2 1" thickness=".05">
        (8) Высекатель № 1: обычные настройки, установлены кремниевый пресс и 4 карты ускорения.
        <Row><ItemImage id="silicon_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 3 0" max="3 4 1" thickness=".05">
        (9) Высекатель № 2: обычные настройки, установлены логический пресс и 4 карты ускорения.
        <Row><ItemImage id="logic_processor_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 4 0" max="3 5 1" thickness=".05">
        (10) Высекатель № 3: обычные настройки, установлены вычислительный пресс и 4 карты ускорения.
        <Row><ItemImage id="calculation_processor_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 5 0" max="3 6 1" thickness=".05">
        (11) Высекатель № 4: обычные настройки, установлены инженерный пресс и 4 карты ускорения.
        <Row><ItemImage id="engineering_processor_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 2 0" max="1 3 1" thickness=".05">
        (12) Высекатель № 5: обычные настройки, установлены 4 карты ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 2 0" max="3 1 1" thickness=".05">
        (13) Шина импорта № 1: обычные настройки, установлены 2 карты ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 4 0" max="3 3 1" thickness=".05">
        (14) Шина импорта № 2: обычные настройки, установлены 2 карты ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 5 0" max="3 4 1" thickness=".05">
        (15) Шина импорта № 3: обычные настройки, установлены 2 карты ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 6 0" max="3 5 1" thickness=".05">
        (16) Шина импорта № 4: обычные настройки, установлены 2 карты ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 3 0" max="1 3.3 1" thickness=".05">
        (17) Шина хранения № 2: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 1.7 0" max="1 2 1" thickness=".05">
        (18) Шина хранения № 3: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 0" max="0.7 3 1" thickness=".05">
        (19) Шина импорта № 5: обычные настройки, установлены 2 карты ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="5 0.7 0" max="6 1 1" thickness=".05">
        (20) Шина хранения № 4: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.3 2.7 0.3" max="3.7 3 0.7" thickness=".05">
        Кварцевое волокно снабжает энергией все 3 высекателя, поскольку высекатели работают как кабели и передают энергию.
  </BoxAnnotation>

<DiamondAnnotation pos="7 1.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="185" pitch="5" />
</GameScene>

## Настройки

* <ItemLink id="pattern_provider" /> (1) имеет обычные настройки и содержит соответствующие
  <ItemLink id="processing_pattern" />. Обратите внимание: каждый шаблон превращает исходные ресурсы непосредственно
  в готовый процессор и **НЕ** включает [пресс](../items-blocks-machines/presses.md).

  ![Логический шаблон](../assets/diagrams/logic_pattern.png)
  ![Вычислительный шаблон](../assets/diagrams/calculation_pattern.png)
  ![Инженерный шаблон](../assets/diagrams/engineering_pattern.png)

* <ItemLink id="storage_bus" /> (2, 17, 18, 20) имеют обычные настройки.
* <ItemLink id="export_bus" /> (3–7) отфильтрованы по соответствующим ингредиентам. В каждой установлены
  2 <ItemLink id="speed_card" />.
    <Row>
      <ItemImage id="silicon" scale="2" />
      <ItemImage id="minecraft:gold_ingot" scale="2" />
      <ItemImage id="certus_quartz_crystal" scale="2" />
      <ItemImage id="minecraft:diamond" scale="2" />
      <ItemImage id="minecraft:redstone" scale="2" />
    </Row>
* <ItemLink id="import_bus" /> (13–16, 19) имеют обычные настройки. В каждой установлены 2 <ItemLink id="speed_card" />.
* <ItemLink id="inscriber" /> имеют обычные настройки. В каждом установлен соответствующий
  [пресс](../items-blocks-machines/presses.md) и 4 <ItemLink id="speed_card" />.
   <Row>
     <ItemImage id="silicon_press" scale="2" />
     <ItemImage id="logic_processor_press" scale="2" />
     <ItemImage id="calculation_processor_press" scale="2" />
     <ItemImage id="engineering_processor_press" scale="2" />
   </Row>

## Принцип работы

1. <ItemLink id="pattern_provider" /> передаёт ингредиенты в бочку.
2. Первая [подсеть-«труба»](pipe-subnet.md), обозначенная оранжевым цветом, извлекает из бочки кремний, красную пыль
   и соответствующий ингредиент процессора — золотой слиток, кристалл истинного кварца или алмаз — и помещает их
   в нужный <ItemLink id="inscriber" />.
3. Первые четыре <ItemLink id="inscriber" /> создают <ItemLink id="printed_silicon" /> и один из компонентов:
   <ItemLink id="printed_logic_processor" />, <ItemLink id="printed_calculation_processor" /> или
   <ItemLink id="printed_engineering_processor" />.
4. Вторая и третья [подсети-«трубы»](pipe-subnet.md), обозначенные зелёным цветом, забирают печатные схемы из первых
   четырёх <ItemLink id="inscriber" /> и помещают их в пятый <ItemLink id="inscriber" />, выполняющий окончательную сборку.
5. Пятый <ItemLink id="inscriber" /> собирает [процессор](../items-blocks-machines/processors.md).
6. Четвёртая [подсеть-«труба»](pipe-subnet.md), обозначенная фиолетовым цветом, помещает процессор в поставщик шаблонов,
   возвращая его в основную сеть.
