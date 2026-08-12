---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Интерфейс
  icon: interface
  position: 210
categories:
- devices
item_ids:
- ae2:interface
- ae2:cable_interface
---

# Интерфейс

<Row gap="20">
<BlockImage id="interface" scale="8" />
<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/cable_interface.snbt" />
</GameScene>
</Row>

Интерфейс действует как небольшой сундук и резервуар для жидкостей, который заполняется из
[сетевого хранилища](../ae2-mechanics/import-export-storage.md) и опустошается в него в соответствии с заданными в слотах запасами.
Он старается выполнить это за один игровой такт и потому способен наполнить либо опустошить до 9 стаков за такт.
При наличии быстрых предметных труб это очень скоростной способ импорта и экспорта.

Полезно и то, что большинство резервуаров вмещает лишь 1 тип жидкости, а интерфейс — до 9 типов вместе с предметами.
По сути это сундук и многожидкостный резервуар с дополнительными возможностями; чтобы отключить эти возможности, достаточно
не подключать его к сети. Поэтому интерфейс полезен в редких ситуациях, когда нужно хранить понемногу множества разных ресурсов.

## Внутреннее устройство интерфейса

Как уже говорилось, интерфейс по сути представляет собой сундук и резервуар с несколькими сверхмощными
<ItemLink id="import_bus" />, <ItemLink id="export_bus" /> и множеством <ItemLink id="level_emitter" />.

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_internals.snbt" />

  <BoxAnnotation color="#dddddd" min="1.3 0.3 1.3" max="9.7 1 1.7">
        Набор излучателей уровня, управляющих требуемым объёмом запаса
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/level_emitter.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 4 1.3" max="9.7 4.7 1.7">
        Набор излучателей уровня, управляющих требуемым объёмом запаса
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/level_emitter.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 1.3 1.3" max="9.7 2 1.7">
        Набор сверхмощных шин импорта, перемещающих по 1 стаку за игровой такт
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/import_bus.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 3 1.3" max="9.7 3.7 1.7">
        Набор сверхмощных шин экспорта, перемещающих по 1 стаку за игровой такт
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/export_bus.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 1" max="10 3 2">
        9 отдельных внутренних слотов
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="15" />
</GameScene>

## Особые взаимодействия

У интерфейсов есть несколько особых способов взаимодействия с другими [устройствами](../ae2-mechanics/devices.md) AE2.

<ItemLink id="storage_bus" />, установленная на ненастроенный интерфейс, предоставит своей сети всё
[сетевое хранилище](../ae2-mechanics/import-export-storage.md) сети интерфейса — словно та целиком была одним большим сундуком,
к которому подключена шина. Указание хранимого запаса в слотах фильтра интерфейса отключает эту возможность.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_storage.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Поставщики шаблонов особо взаимодействуют с интерфейсами в [подсетях](../ae2-mechanics/subnetworks.md). Если интерфейс не настроен,
поставщик полностью пропускает его и отправляет партии рецепта непосредственно в [хранилище](../ae2-mechanics/import-export-storage.md)
подсети. Интерфейс не заполняется партиями, а главное — следующая партия не поступит, пока в хранилище не освободится место.

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/provider_interface_storage.snbt" />

<BoxAnnotation color="#dddddd" min="2.7 0 1" max="3 1 2">
        Интерфейс (обязательно плоский, не полноразмерный)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 4">
        Шины хранения
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 0 0" max="1 1 4">
        Места, куда поставщик должен отправлять партии (несколько машин или несколько сторон 1 машины)
  </BoxAnnotation>

<IsometricCamera yaw="185" pitch="30" />
</GameScene>

## Варианты

Интерфейс существует в 2 вариантах: обычном и плоском, представляющем собой
[кабельный компонент](../ae2-mechanics/cable-subparts.md). От варианта зависит, с каких сторон доступен инвентарь и в какие
стороны предоставляется сетевое подключение.

*   Обычный интерфейс позволяет помещать и извлекать ресурсы, а также обращаться к инвентарю с любой стороны. Как и большинство
    машин AE2, он действует подобно кабелю и предоставляет сетевое соединение во все стороны.

*   Плоские интерфейсы являются [кабельными компонентами](../ae2-mechanics/cable-subparts.md), поэтому на одном кабеле можно
    разместить несколько штук и сделать конструкцию компактнее. Помещать и извлекать ресурсы, а также обращаться к инвентарю
    можно с лицевой стороны, но сетевого соединения в эту сторону интерфейс не предоставляет.

Обычный и плоский варианты можно взаимно преобразовать в сетке крафта.

## Настройки

Верхние слоты интерфейса определяют, запас каких ресурсов он должен поддерживать внутри. Если поместить туда предмет или перетащить
его из JEI/REI, появится значок гаечного ключа, позволяющий задать количество.

Щёлкните правой кнопкой мыши с ёмкостью для жидкости (например, ведром или резервуаром), чтобы выбрать фильтром саму
жидкость, а не предмет-ёмкость.

После включения режима поддержания запаса внешние машины также не смогут поместить в этот слот что-либо другое.

## Улучшения

Интерфейс поддерживает следующие [улучшения](upgrade_cards.md):

*   <ItemLink id="fuzzy_card" /> позволяет учитывать степень повреждения и/или игнорировать NBT предмета при фильтрации;
*   <ItemLink id="crafting_card" /> позволяет интерфейсу отправлять системе [автоизготовления](../ae2-mechanics/autocrafting.md)
    запросы на нужные предметы. Сначала он попытается забрать предмет из хранилища и лишь при отсутствии запросит изготовление нового.

## Приоритет

Приоритет задаётся кнопкой с гаечным ключом в правом верхнем углу интерфейса. Интерфейсы с высоким приоритетом получают
свои предметы раньше интерфейсов с низким.

## Рецепты

<Recipe id="network/blocks/interfaces_interface" />

<RecipeFor id="cable_interface" />
