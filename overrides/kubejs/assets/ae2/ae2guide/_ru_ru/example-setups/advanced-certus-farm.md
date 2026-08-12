---
navigation:
  parent: example-setups/example-setups-index.md
  title: Продвинутая ферма истинного кварца
  icon: certus_quartz_crystal
  position: 120
---

# Продвинутая ферма истинного кварца

По сути, это [полуавтоматическая ферма](semiauto-certus-farm.md), полностью интегрированная с вашей МЭ-системой.

Вместо большого запаса цветущих блоков и их периодического ручного восстановления эта схема использует
[автоматизацию зарядника](charger-automation.md) и [бросания в воду](throw-in-water-automation.md).

Примерную скорость см. в разделе [«Выращивание истинного кварца»](../ae2-mechanics/certus-growth.md).

**ЭТО СЛОЖНАЯ КОНСТРУКЦИЯ, ГДЕ ОДНИ КОМПОНЕНТЫ СКРЫТЫ ЗА ДРУГИМИ. ПОВРАЩАЙТЕ КАМЕРУ, ЧТОБЫ ОСМОТРЕТЬ ЕЁ СО ВСЕХ СТОРОН**

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/advanced_certus_farm.snbt" />

  <BoxAnnotation color="#ddaaaa" min="3.7 2 1" max="4 3 2">
        (1) Плоскость истребления № 1: интерфейса настроек нет, можно зачаровать на «Удачу».
  </BoxAnnotation>

  <BoxAnnotation color="#ddaaaa" min="2 2 1.7" max="3 3 2">
        (2) Шина хранения № 1: фильтр по кристаллам истинного кварца.
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 2.5 1.5" color="#ff0000">
    Подсеть разрушения скоплений
  </DiamondAnnotation>

  <BoxAnnotation color="#aaddaa" min="3.7 1 1" max="4 2 2">
        (3) Плоскость истребления № 2: интерфейса настроек нет, зачарована на «Шёлковое касание».
  </BoxAnnotation>

  <BoxAnnotation color="#aaddaa" min="2 1 1.7" max="3 2 2">
        (4) Шина хранения № 2: фильтр по блокам истинного кварца.
        <BlockImage id="quartz_block" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 1.5 1.5" color="#00ff00">
    Подсеть разрушения блоков истинного кварца
  </DiamondAnnotation>

  <BoxAnnotation color="#ffddaa" min="4 0.7 1" max="5 1 2">
        (5) Плоскость формирования: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#ffddaa" min="2 0.7 2" max="3 1 3">
        (6) Шина импорта: фильтр по несовершенному цветущему истинному кварцу.
        <BlockImage id="flawed_budding_quartz" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 0.5 1.5" color="#ddcc00">
    Подсеть установки цветущего блока
  </DiamondAnnotation>

  <BoxAnnotation color="#aaaadd" min="1.7 2 2" max="2 3 3">
        (7) Шина хранения № 3: фильтр по кристаллам истинного кварца, приоритет выше основного хранилища.
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#aaaadd" min="2 1 2" max="3 2 3">
        (8) Интерфейс: поддерживает 1 несовершенный цветущий блок истинного кварца, установлена карта создания.
        <Row><BlockImage id="flawed_budding_quartz" scale="2" /> <ItemImage id="crafting_card" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="1.5 0.5 0" color="#00ff00">
        К основной сети, автоматизации зарядника и автоматизации бросания в воду
        <Row>
        <GameScene zoom="3" background="transparent">
          <ImportStructure src="../assets/assemblies/charger_automation.snbt" />
          <IsometricCamera yaw="195" pitch="30" />
        </GameScene>
        <GameScene zoom="3" background="transparent">
          <ImportStructure src="../assets/assemblies/throw_in_water.snbt" />
          <IsometricCamera yaw="195" pitch="30" />
        </GameScene>
        </Row>
    </DiamondAnnotation>

  <IsometricCamera yaw="165" pitch="5" />
</GameScene>

## Настройки

### Разрушитель скоплений

* Первая <ItemLink id="annihilation_plane" /> (1) не имеет интерфейса и настроек, но её можно зачаровать на «Удачу».
* Первая <ItemLink id="storage_bus" /> (2) отфильтрована по <ItemLink id="certus_quartz_crystal" />.

### Разрушитель блоков истинного кварца

* Вторая <ItemLink id="annihilation_plane" /> (3) не имеет интерфейса и настроек, но должна быть зачарована на «Шёлковое касание».
* Вторая <ItemLink id="storage_bus" /> (4) отфильтрована по <ItemLink id="quartz_block" />.

### Установщик цветущего блока

* <ItemLink id="formation_plane" /> (5) имеет обычные настройки.
* <ItemLink id="import_bus" /> (6) отфильтрована по <ItemLink id="flawed_budding_quartz" />.

### Основная сеть

* Третья <ItemLink id="storage_bus" /> (7) отфильтрована по <ItemLink id="certus_quartz_crystal" />, а её
  [приоритет](../ae2-mechanics/import-export-storage.md#storage-priority) выше приоритета основного хранилища.
* <ItemLink id="interface" /> (8) настроен на хранение одного несовершенного цветущего блока истинного кварца
  и содержит <ItemLink id="crafting_card" />.

## Принцип работы

### Разрушитель скоплений

Эта подсеть работает почти так же, как подсеть [простой фермы](simple-certus-farm.md).

1. <ItemLink id="annihilation_plane" /> пытается разрушить блок перед собой, но способна разрушить лишь
   <ItemLink id="quartz_cluster" />: единственное хранилище подсети — <ItemLink id="storage_bus" />,
   отфильтрованная по <ItemLink id="certus_quartz_crystal" />.
2. <ItemLink id="storage_bus" /> помещает кристаллы истинного кварца в бочку.

### Разрушитель блоков истинного кварца

Эта подсеть разрушает истощённый цветущий блок, когда тот превращается в обычный <ItemLink id="quartz_block" />,
и действует аналогично разрушителю скоплений.

1. <ItemLink id="annihilation_plane" /> пытается разрушить блок перед собой, но способна разрушить лишь
   <ItemLink id="quartz_block" />: единственное хранилище подсети — <ItemLink id="storage_bus" />,
   отфильтрованная по <ItemLink id="quartz_block" />.
   Плоскости необходимо «Шёлковое касание», иначе цветущий блок потеряет качество при разрушении и будет сломан преждевременно.
2. <ItemLink id="storage_bus" /> помещает блок истинного кварца в <ItemLink id="interface" />, позволяя
   [автоматизации бросания в воду](throw-in-water-automation.md) использовать его для создания нового
   <ItemLink id="flawed_budding_quartz" />.

### Установщик цветущего блока

Эта подсеть устанавливает новый <ItemLink id="flawed_budding_quartz" />, когда разрушитель ломает старый истощённый блок.

1. <ItemLink id="import_bus" /> импортирует цветущий блок из <ItemLink id="interface" />
   в [сетевое хранилище](../ae2-mechanics/import-export-storage.md).
2. Единственное хранилище подсети — <ItemLink id="formation_plane" />, которая устанавливает блок.

### Основная сеть

* <ItemLink id="storage_bus" /> открывает основной сети и [автоматизации зарядника](charger-automation.md) доступ
  ко всем кристаллам в бочке. Благодаря высокому [приоритету](../ae2-mechanics/import-export-storage.md#storage-priority)
  кристаллы предпочтительно возвращаются в бочку, а не в основное хранилище.
* <ItemLink id="interface" /> предоставляет подсети установки доступ к <ItemLink id="flawed_budding_quartz" />,
  а подсети разрушения — способ вернуть истощённые блоки в основную сеть. <ItemLink id="crafting_card" /> позволяет
  интерфейсу запрашивать новые цветущие блоки у системы [автоматического создания](../ae2-mechanics/autocrafting.md).
