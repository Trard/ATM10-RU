---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автоматизация печи
  icon: minecraft:furnace
---

# Автоматизация печи

Поскольку здесь используется <ItemLink id="pattern_provider" />, схема предназначена для интеграции с системой
[автоматического создания](../ae2-mechanics/autocrafting.md). Для автономной автоматизации печи достаточно воронок,
сундуков и подобных блоков.

Автоматизация <ItemLink id="minecraft:furnace" /> немного сложнее, чем простого устройства вроде
[зарядника](../example-setups/charger-automation.md). Печи нужен ввод с двух разных сторон и извлечение с третьей.
Переплавляемый предмет подаётся сверху, топливо — сбоку, а результат извлекается снизу.

Можно установить <ItemLink id="pattern_provider" /> сверху, <ItemLink id="export_bus" /> сбоку для постоянной подачи топлива
и <ItemLink id="import_bus" /> снизу для возврата результатов в сеть. Однако это займёт 3
[канала](../ae2-mechanics/channels.md).

Вот способ обойтись одним каналом:

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/furnace_automation.snbt" />

<BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (1) Поставщик шаблонов: направленный вариант, полученный применением ключа из истинного кварца,
        с нужными шаблонами обработки.

        ![Шаблон железа](../assets/diagrams/furnace_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (2) Интерфейс: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="1.3 2 1">
        (3) Шина хранения № 1: фильтр по углю.
        <ItemImage id="minecraft:coal" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 2 0" max="1 2.3 1">
        (4) Шина хранения № 2: уголь в чёрном списке с помощью карты инвертирования.
        <Row><ItemImage id="minecraft:coal" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="pattern_provider" /> (1) содержит нужные <ItemLink id="processing_pattern" />.
  Он превращён в направленный применением <ItemLink id="certus_quartz_wrench" />.

  ![Шаблон железа](../assets/diagrams/furnace_pattern.png)

* <ItemLink id="interface" /> (2) имеет обычные настройки.
* Первая <ItemLink id="storage_bus" /> (3) отфильтрована по углю или другому выбранному топливу.
* Вторая <ItemLink id="storage_bus" /> (4) с помощью <ItemLink id="inverter_card" /> исключает выбранное топливо.

## Принцип работы

1. <ItemLink id="pattern_provider" /> отправляет ингредиенты в <ItemLink id="interface" />.
   На самом деле в целях оптимизации они проходят прямо через шины хранения, как если бы те были продолжением граней
   поставщика, и никогда не попадают во внутренний инвентарь интерфейса.
2. Интерфейс не настроен на поддержание какого-либо запаса, поэтому пытается отправить ингредиенты
   в [сетевое хранилище](../ae2-mechanics/import-export-storage.md).
3. Единственные хранилища зелёной подсети — <ItemLink id="storage_bus" />. Шина с фильтром по углю помещает топливо
   в топливный слот через боковую грань печи. Шина, исключающая уголь, помещает переплавляемый предмет в верхний слот сверху.
4. Печь выполняет переплавку.
5. Воронка извлекает результат снизу печи и помещает его в возвратные слоты поставщика, возвращая основной сети.
