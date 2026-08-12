---
navigation:
  parent: example-setups/example-setups-index.md
  title: Рекурсивное создание
  icon: minecraft:netherite_upgrade_smithing_template
---

# Схема рекурсивного создания

Как сказано в разделе об [автоматическом создании](../ae2-mechanics/autocrafting.md), алгоритм планирования не справляется
с рецептами, в которых основной результат одновременно служит одним из ингредиентов. Например, он не может самостоятельно
обрабатывать клонирование <ItemLink id="minecraft:netherite_upgrade_smithing_template" />.

Одно из решений — воспользоваться способностью <ItemLink id="level_emitter" /> притворяться
[шаблоном](../items-blocks-machines/patterns.md).

Излучатель будет включать небольшую схему, которая непрерывно выполняет рецепт. Здесь рассмотрена схема клонирования
<ItemLink id="minecraft:netherite_upgrade_smithing_template" />.

<RecipeFor id="minecraft:netherite_upgrade_smithing_template" />

***

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/recursive_recipe_setup.snbt" />

  <BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (1) Интерфейс: настроен поддерживать запас дополнительных ингредиентов — алмаза и незерака.
        <Row><ItemImage id="minecraft:diamond" scale="2" /> <ItemImage id="minecraft:netherrack" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 1 0.3" max="2.7 1.3 0.7">
        (2) Излучатель уровня: выбран кузнечный шаблон незеритового улучшения и режим «Излучать сигнал для создания предмета».
        <Row><ItemImage id="minecraft:netherite_upgrade_smithing_template" scale="2" /> <ItemImage id="crafting_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 0 0" max="2.3 1 1">
        (3) Шина импорта № 1: фильтр по предметам, запас которых поддерживает интерфейс. Установлена красная карта,
        режим красного камня — «Активировать по сигналу».
        <Row>
        <ItemImage id="minecraft:diamond" scale="2" />
        <ItemImage id="minecraft:netherrack" scale="2" />
        <ItemImage id="redstone_card" scale="2" />
        </Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 1 1" max="4 1.3 2">
        (4) Шина хранения № 1: приоритет выше, чем у другой шины хранения. ЭТО ОЧЕНЬ ВАЖНО.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 0 1" max="4 1 2">
        (5) Молекулярный сборщик: содержит шаблон дублирования кузнечного шаблона.

        ![Шаблон](../assets/diagrams/smithing_template_pattern_small.png)

        При первоначальной сборке схемы в него также нужно вручную поместить один кузнечный шаблон.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 0 1" max="3 1 2">
        (6) Шина импорта № 2: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 0 1" max="2 1 1.3">
        (7) Шина хранения № 2: фильтр по кузнечному шаблону незеритового улучшения. Приоритет ниже, чем у другой шины хранения.
        <ItemImage id="minecraft:netherite_upgrade_smithing_template" scale="2" />
  </BoxAnnotation>

<DiamondAnnotation pos="0 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="15" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="interface" /> (1) настроен поддерживать запас дополнительных ингредиентов — алмаза и незерака.
* На <ItemLink id="level_emitter" /> (2) выбран кузнечный шаблон незеритового улучшения и режим
  «Излучать сигнал для создания предмета».
* Первая <ItemLink id="import_bus" /> (3) отфильтрована по предметам, запас которых поддерживает интерфейс.
  В ней установлена красная карта, а режим красного камня — «Активировать по сигналу».
* Первая <ItemLink id="storage_bus" /> (4) имеет более высокий [приоритет](../ae2-mechanics/import-export-storage.md#storage-priority),
  чем вторая шина хранения.
* <ItemLink id="molecular_assembler" /> (5) содержит шаблон дублирования кузнечного шаблона и один кузнечный шаблон,
  заранее помещённый вручную.

  ![Шаблон](../assets/diagrams/smithing_template_pattern.png)

* Вторая <ItemLink id="import_bus" /> (6) имеет обычные настройки.
* Вторая <ItemLink id="storage_bus" /> (7) отфильтрована по кузнечному шаблону незеритового улучшения. Её
  [приоритет](../ae2-mechanics/import-export-storage.md#storage-priority) ниже, чем у первой шины хранения.

## Принцип работы

1. <ItemLink id="level_emitter" /> притворяется [шаблоном](../items-blocks-machines/patterns.md) благодаря установленной
   <ItemLink id="crafting_card" /> и выбранному режиму «Излучать сигнал для создания предмета». Поэтому кузнечный шаблон
   незеритового улучшения отображается в [терминалах](../items-blocks-machines/terminals.md) как предмет, доступный для
   [автоматического создания](../ae2-mechanics/autocrafting.md).
2. Получив запрос на создание этого предмета от игрока или самой системы, излучатель уровня включается.
3. Первая <ItemLink id="import_bus" /> активируется излучателем уровня и извлекает ингредиенты, запас которых поддерживает
   <ItemLink id="interface" />.
4. Единственная <ItemLink id="storage_bus" /> этой сети, способная принять ингредиенты, установлена на сборщике.
5. <ItemLink id="molecular_assembler" /> получает ингредиенты. В нём уже находится один кузнечный шаблон, поэтому он выполняет
   рецепт и создаёт два кузнечных шаблона.
6. Вторая <ItemLink id="import_bus" /> извлекает один кузнечный шаблон.
7. У первой шины хранения выше приоритет, поэтому этот кузнечный шаблон возвращается в сборщик.
8. Вторая <ItemLink id="import_bus" /> извлекает второй кузнечный шаблон.
9. Сборщик больше не может принять кузнечный шаблон, поэтому второй экземпляр отправляется в шину хранения с меньшим
   приоритетом и через неё помещается в интерфейс.
10. <ItemLink id="interface" /> не настроен поддерживать запас кузнечных шаблонов, поэтому отправляет его в сеть.
