---
navigation:
  parent: example-setups/example-setups-index.md
  title: Наполнитель вёдер
  icon: minecraft:water_bucket
---

# Наполнитель вёдер

См. также [«Опустошитель вёдер»](bucket-emptier.md).

Поскольку здесь используется <ItemLink id="pattern_provider" />, схема предназначена для интеграции с системой
[автоматического создания](../ae2-mechanics/autocrafting.md).

Иногда вместо самой жидкости нужны наполненные ею вёдра. Порой это может сделать специальное устройство, например
Fluid Transposer из Thermal Expansion, но подходящего мода в сборке может не оказаться. К счастью, в ванильном Minecraft
есть чуть менее удобный способ — <ItemLink id="minecraft:dispenser" />.

**Часто эта схема не нужна: замена жидкостей в
[терминале кодирования шаблонов](../items-blocks-machines/terminals.md#pattern-encoding-terminal) позволяет использовать
в рецепте создания саму жидкость вместо ведра.**

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/bucket_filler.snbt" />

<BoxAnnotation color="#dddddd" min="2 1 0" max="3 2 1">
        (1) Поставщик шаблонов: блокировка создания «При сигнале красного камня» и нужные шаблоны обработки.

        <Row>
        ![Шаблон наполнения](../assets/diagrams/water_fill_pattern_small.png)
        ![Шаблон наполнения](../assets/diagrams/lava_fill_pattern_small.png)
        </Row>
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3 1.1 0.1" max="3.2 1.9 0.9">
        (2) Интерфейс: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.1 1.1 0.8" max="3.9 1.9 1">
        (3) Шина хранения № 1: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="4.05 1.05 0.8" max="4.95 1.95 1">
        (4) Плоскость формирования: в чёрном списке вёдра, установлена карта инвертирования.
        <Row><ItemImage id="minecraft:bucket" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.2 2 1.2" max="3.8 2.2 1.8">
        (5) Шина импорта: в чёрном списке вёдра, установлена карта инвертирования.
        <Row><ItemImage id="minecraft:bucket" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2.1 2 0.1" max="2.9 2.2 0.9">
        (6) Шина хранения № 2: обычные настройки.
  </BoxAnnotation>

<DiamondAnnotation pos="0 1.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="225" pitch="45" />
</GameScene>

## Настройки

* Для <ItemLink id="pattern_provider" /> (1) выбрана блокировка создания «При сигнале красного камня»
  и установлены нужные <ItemLink id="processing_pattern" />.
  
    ![Шаблон наполнения](../assets/diagrams/water_fill_pattern.png)
    ![Шаблон наполнения](../assets/diagrams/lava_fill_pattern.png)

* <ItemLink id="interface" /> (2) имеет обычные настройки.
* Первая <ItemLink id="storage_bus" /> (3) имеет обычные настройки.
* У <ItemLink id="formation_plane" /> (4) в чёрном списке находятся вёдра с помощью карты инвертирования.
  <Row><ItemImage id="minecraft:bucket" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
* У <ItemLink id="import_bus" /> (5) в чёрном списке находятся вёдра с помощью карты инвертирования.
  <Row><ItemImage id="minecraft:bucket" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
* Вторая <ItemLink id="storage_bus" /> (6) имеет обычные настройки.

## Принцип работы

1. <ItemLink id="pattern_provider" /> отправляет ингредиенты в <ItemLink id="interface" />.
   На самом деле в целях оптимизации они проходят прямо через шину хранения и плоскость формирования, как если бы те
   были продолжением граней поставщика, и никогда не попадают во внутренний инвентарь интерфейса.
2. Благодаря механике [подсетей-труб](pipe-subnet.md#providing-to-multiple-places) и
   <ItemLink id="formation_plane" /> ведро попадает в <ItemLink id="minecraft:dispenser" />, а плоскость размещает жидкость.
3. <ItemLink id="minecraft:comparator" /> обнаруживает ведро в раздатчике, одновременно активирует раздатчик
   и блокирует <ItemLink id="pattern_provider" />.
4. Раздатчик набирает жидкость ведром, после чего внутри него находится наполненное ведро.
5. <ItemLink id="import_bus" /> забирает наполненное ведро и через <ItemLink id="storage_bus" /> помещает его
   в поставщик шаблонов, возвращая основной сети.
6. Компаратор обнаруживает, что раздатчик пуст, и разблокирует поставщик.
