---
navigation:
  parent: example-setups/example-setups-index.md
  title: Опустошитель вёдер
  icon: minecraft:bucket
---

# Опустошитель вёдер

См. также [«Наполнитель вёдер»](bucket-filler.md).

Поскольку здесь используется <ItemLink id="pattern_provider" />, схема предназначена для интеграции с системой
[автоматического создания](../ae2-mechanics/autocrafting.md).

Иногда вам нужна сама жидкость, хотя производить её удаётся лишь в ведре. Порой её может извлечь специальное устройство,
например Fluid Transposer из Thermal Expansion, но подходящего мода в сборке может не оказаться. К счастью, в ванильном
Minecraft есть чуть менее удобный способ — <ItemLink id="minecraft:dispenser" />.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/bucket_emptier.snbt" />

<BoxAnnotation color="#dddddd" min="2 1 0" max="3 2 1">
        (1) Поставщик шаблонов: блокировка создания «При сигнале красного камня», включён режим блокировки
        и установлены нужные шаблоны обработки.

        <Row>
        ![Шаблон опустошения](../assets/diagrams/water_empty_pattern_small.png)
        ![Шаблон опустошения](../assets/diagrams/lava_empty_pattern_small.png)
        </Row>
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2.1 2 0.1" max="2.9 2.2 0.9">
        (2) Интерфейс: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.1 2 1.1" max="3.9 2.2 1.9">
        (3) Шина хранения № 1: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="4.05 1.05 0.8" max="4.95 1.95 1">
        (4) Плоскость истребления: интерфейса настроек нет.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.2 1.2 0.8" max="3.8 1.8 1">
        (5) Шина импорта: фильтр по вёдрам.
        <ItemImage id="minecraft:bucket" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3 1.1 0.1" max="3.2 1.9 0.9">
        (6) Шина хранения № 2: обычные настройки.
  </BoxAnnotation>

<DiamondAnnotation pos="0 1.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="225" pitch="45" />
</GameScene>

## Настройки

* Для <ItemLink id="pattern_provider" /> (1) выбрана блокировка создания «При сигнале красного камня»,
  включён режим блокировки и установлены нужные <ItemLink id="processing_pattern" />.
  
    ![Шаблон опустошения](../assets/diagrams/water_empty_pattern.png)
    ![Шаблон опустошения](../assets/diagrams/lava_empty_pattern.png)

* <ItemLink id="interface" /> (2) имеет обычные настройки.
* Первая <ItemLink id="storage_bus" /> (3) имеет обычные настройки.
* <ItemLink id="annihilation_plane" /> (4) не имеет интерфейса и настроек.
* <ItemLink id="import_bus" /> (5) отфильтрована по вёдрам.
  <ItemImage id="minecraft:bucket" scale="2" />
* Вторая <ItemLink id="storage_bus" /> (6) имеет обычные настройки.

## Принцип работы

1. <ItemLink id="pattern_provider" /> отправляет ингредиенты в <ItemLink id="interface" />.
   На самом деле в целях оптимизации они проходят прямо через шину хранения, как если бы она была продолжением граней
   поставщика, и никогда не попадают во внутренний инвентарь интерфейса.
2. Благодаря механике, описанной для [подсетей-труб](pipe-subnet.md#providing-to-multiple-places),
   ведро попадает в <ItemLink id="minecraft:dispenser" />.
3. <ItemLink id="minecraft:comparator" /> обнаруживает ведро в раздатчике, одновременно активирует раздатчик
   и блокирует <ItemLink id="pattern_provider" />.
4. Раздатчик выливает жидкость из ведра, после чего внутри него остаётся пустое ведро.
5. <ItemLink id="import_bus" /> забирает пустое ведро и через <ItemLink id="storage_bus" /> помещает его
   в поставщик шаблонов, возвращая основной сети.
6. Компаратор обнаруживает, что раздатчик пуст, и разблокирует поставщик.
