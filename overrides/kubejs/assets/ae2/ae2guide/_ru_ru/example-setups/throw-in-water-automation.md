---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автоматизация бросания в воду
  icon: fluix_crystal
---

# Автоматизация рецептов бросанием в воду

Поскольку здесь используется <ItemLink id="pattern_provider" />, схема предназначена для интеграции с системой
[автоматического создания](../ae2-mechanics/autocrafting.md).

Некоторые рецепты требуют бросать предметы в воду, хотя похожей конструкцией их можно бросать и в другие места.
Процесс автоматизируется с помощью <ItemLink id="formation_plane" />, <ItemLink id="annihilation_plane" />
и нескольких вспомогательных компонентов. По сути, это две изменённые [подсети-трубы](pipe-subnet.md).

Схема предназначена для совместной работы с [автоматизацией зарядника](charger-automation.md),
которая предоставляет <ItemLink id="charged_certus_quartz_crystal" />.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/throw_in_water.snbt" />

<BoxAnnotation color="#dddddd" min="2 0 1" max="3 1 2">
        (1) Поставщик шаблонов: обычные настройки и нужные шаблоны обработки.

        ![Шаблон флюиса](../assets/diagrams/fluix_pattern_small.png) ![Шаблон цветущего блока](../assets/diagrams/flawed_budding_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1.7 0 1" max="2 1 2">
        (2) Интерфейс: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 .7 1" max="2 1 2">
        (3) Плоскость формирования: выбрасывает входные предметы.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 2 1" max="2 2.3 2">
        (4) Плоскость истребления: интерфейса настроек нет.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 1 1" max="3 1.3 2">
        (5) Шина хранения: фильтр по результатам шаблонов.
        <Row><ItemImage id="fluix_crystal" scale="2" /><BlockImage id="flawless_budding_quartz" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="3.9 0.5 1.5" color="#00ff00">
        К основной сети и автоматизации зарядника
        <GameScene zoom="3" background="transparent">
          <ImportStructure src="../assets/assemblies/charger_automation.snbt" />
          <IsometricCamera yaw="195" pitch="30" />
        </GameScene>
    </DiamondAnnotation>

  <IsometricCamera yaw="180" pitch="0" />
</GameScene>

## Настройки и шаблоны

* <ItemLink id="pattern_provider" /> (1) имеет обычные настройки и нужные <ItemLink id="processing_pattern" />.
  * Для <ItemLink id="fluix_crystal" /> подходит обычный рецепт из JEI/REI:

    ![Шаблон флюиса](../assets/diagrams/fluix_pattern.png)

  * <ItemLink id="flawed_budding_quartz" /> лучше создавать непосредственно из <ItemLink id="quartz_block" />.
    Это предотвращает проблему, когда вход одного рецепта одновременно является выходом другого и шина хранения
    не может правильно отфильтровать содержимое:

    ![Шаблон цветущего блока](../assets/diagrams/flawed_budding_pattern.png)

* <ItemLink id="interface" /> (2) имеет обычные настройки.
* <ItemLink id="formation_plane" /> (3) настроена на выбрасывание входных предметов.
* <ItemLink id="annihilation_plane" /> (4) не имеет интерфейса и настроек.
* <ItemLink id="storage_bus" /> (5) отфильтрована по результатам шаблонов.

## Принцип работы

1. <ItemLink id="pattern_provider" /> отправляет ингредиенты в боковой <ItemLink id="interface" /> зелёной подсети.
2. Интерфейс по умолчанию не поддерживает никакого запаса, поэтому пытается отправить содержимое
   в [сетевое хранилище](../ae2-mechanics/import-export-storage.md).
3. Единственное хранилище зелёной подсети — <ItemLink id="formation_plane" />, которая выбрасывает полученные предметы в воду.
4. <ItemLink id="annihilation_plane" /> оранжевой подсети пытается подобрать выброшенные предметы, но не может:
   <ItemLink id="storage_bus" /> сверху поставщика — единственное хранилище оранжевой подсети — принимает лишь возможные
   результаты рецептов.
5. Предметы преобразуются в мире.
6. Теперь плоскость истребления может подобрать лежащие перед ней предметы, поскольку шине разрешено их хранить.
7. Шина помещает полученные предметы в поставщик шаблонов, возвращая их сети.
