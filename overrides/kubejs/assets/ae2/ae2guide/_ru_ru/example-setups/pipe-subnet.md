---
navigation:
  parent: example-setups/example-setups-index.md
  title: Подсеть-«труба» для предметов и жидкостей
  icon: storage_bus
---

# Подсеть-«труба» для предметов и жидкостей

Простой способ имитировать предметную или жидкостную трубу с помощью [устройств](../ae2-mechanics/devices.md) AE2. Он пригодится везде,
где обычно применяются такие трубы, в том числе для возврата результата создания в <ItemLink id="pattern_provider" />.

Обычно это можно сделать двумя способами:

## Шина импорта → шина хранения

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/import_storage_pipe.snbt" />

<BoxAnnotation color="#dddddd" min="3.7 0 0" max="4 1 1">
        (1) Шина импорта: можно настроить фильтр.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 1">
        (2) Шина хранения: можно настроить фильтр. Она (и другие шины хранения, которые должны служить местом назначения)
        должна быть единственным хранилищем в сети.
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 0.5" color="#00ff00">
        Источник
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0.5" color="#00ff00">
        Место назначения
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<ItemLink id="import_bus" /> (1), установленная на исходное хранилище, извлекает предметы или жидкость и пытается поместить их
в [сетевое хранилище](../ae2-mechanics/import-export-storage.md). Поскольку единственным хранилищем сети является
<ItemLink id="storage_bus" /> (2) — именно поэтому это подсеть, а не основная сеть, — предметы или жидкость помещаются
в хранилище назначения и тем самым перемещаются. Энергия подаётся через <ItemLink id="quartz_fiber" />.
Фильтры можно настроить и на шине импорта, и на шине хранения. Без фильтров схема перемещает всё доступное ей содержимое.
Она также работает с несколькими шинами импорта и несколькими шинами хранения.

## Шина хранения → шина экспорта

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/storage_export_pipe.snbt" />

<BoxAnnotation color="#dddddd" min="3.7 0 0" max="4 1 1">
        (1) Шина хранения: можно настроить фильтр. Она (и другие шины хранения, которые должны служить источником)
        должна быть единственным хранилищем в сети.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 1">
        (2) Шина экспорта: необходимо настроить фильтр.
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 0.5" color="#00ff00">
        Источник
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0.5" color="#00ff00">
        Место назначения
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<ItemLink id="export_bus" />, установленная на хранилище назначения, пытается забрать из
[сетевого хранилища](../ae2-mechanics/import-export-storage.md) предметы, указанные в её фильтре. Поскольку единственным
хранилищем сети является <ItemLink id="storage_bus" /> — именно поэтому это подсеть, а не основная сеть, — предметы или жидкость
извлекаются из исходного хранилища и тем самым перемещаются. Энергия подаётся через <ItemLink id="quartz_fiber" />.
Так как шина экспорта не работает без фильтра, его обязательно нужно настроить.
Эта схема также работает с несколькими шинами хранения и несколькими шинами экспорта.

## Неработающая схема: шина импорта → шина экспорта

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/import_export_pipe.snbt" />

<BoxAnnotation color="#dd3333" min="3.7 0 0" max="4 1 1">
        Шина импорта: в сети нет хранилища, поэтому ей некуда импортировать содержимое.
  </BoxAnnotation>

<BoxAnnotation color="#dd3333" min="1 0 0" max="1.3 1 1">
        (2) Шина экспорта: в сети нет хранилища, поэтому ей нечего экспортировать.
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 0.5" color="#ff0000">
        Источник
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0.5" color="#ff0000">
        Место назначения
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Схема только с шинами импорта и экспорта работать не будет. Шина импорта попытается извлечь предметы или жидкость
из исходного хранилища и поместить их в сетевое. Шина экспорта попытается извлечь содержимое из сетевого хранилища
и поместить его в хранилище назначения. Но поскольку в этой сети **нет хранилища**, шина импорта не может ничего
импортировать, а шина экспорта — экспортировать, поэтому ничего не происходит.

## Ввод и вывод через одну сторону

Предположим, есть механизм, который принимает входные ресурсы и позволяет извлекать результат через одну и ту же сторону
(например, <ItemLink id="charger" />). Чтобы и подавать ингредиенты, и забирать результат, объедините два варианта подсети-«трубы»:

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/import_storage_export_pipe.snbt" />

<BoxAnnotation color="#dddddd" min="4 1 1" max="5 1.3 2">
        (1) Шина импорта: можно настроить фильтр.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 1 1" max="3 1.3 2">
        (2) Шина хранения: можно настроить фильтр. Она (и другие шины хранения, через которые нужно передавать
        и забирать предметы) должна быть единственным хранилищем в сети.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 0 1" max="3 1 2">
        (3) Устройство, в которое нужно передавать предметы и из которого их нужно забирать: в данном случае зарядник.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 1" max="1 1.3 2">
        (4) Шина экспорта: необходимо настроить фильтр.
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 1.5" color="#00ff00">
        Источник
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 1.5" color="#00ff00">
        Место назначения
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Интерфейсы

Оказывается, кроме шин импорта и экспорта существуют и другие [устройства](../ae2-mechanics/devices.md), которые помещают
предметы в [сетевое хранилище](../ae2-mechanics/import-export-storage.md) и забирают их оттуда!
Здесь нам пригодится <ItemLink id="interface" />. Если вставить в интерфейс предмет, запас которого он не настроен поддерживать,
интерфейс отправит его в сетевое хранилище. Этим можно воспользоваться так же, как связкой шины импорта и шины хранения.
Если настроить интерфейс на поддержание запаса предмета, он будет забирать этот предмет из сетевого хранилища, подобно связке
шины хранения и шины экспорта. Интерфейс может поддерживать запас одних предметов и не поддерживать запас других. Это позволяет
удалённо передавать предметы через шины хранения в обе стороны, если вам по какой-либо причине понадобится такая схема.

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/interface_pipes.snbt" />

<BoxAnnotation color="#dddddd" min="3.7 0 0" max="4 1 1">
        Интерфейс
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 1">
        Шина хранения
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.7 0 2" max="4 1 3">
        Шина хранения
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 2" max="1 1.3 3">
        Интерфейс
  </BoxAnnotation>

<IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Один ко многим, многие к одному и многие ко многим

Разумеется, необязательно использовать лишь одну <ItemLink id="import_bus" />, <ItemLink id="export_bus" /> или
<ItemLink id="storage_bus" />.

<GameScene zoom="3" background="transparent">
<ImportStructure src="../assets/assemblies/many_to_many_pipe.snbt" />

<IsometricCamera yaw="185" pitch="30" />
</GameScene>

## Передача в несколько мест

На основе всего сказанного можно вывести способ передачи ингредиентов от одной стороны <ItemLink id="pattern_provider" />
в несколько разных мест: например, к ряду механизмов или к нескольким сторонам одного механизма.

Связки «импорт → хранение» и «хранение → экспорт» здесь не подходят, поскольку <ItemLink id="pattern_provider" /> фактически
не содержит ингредиенты. Поставщики сами *передают* их соседним хранилищам, поэтому нам нужно соседнее хранилище,
которое также умеет импортировать предметы.

Это описание очень похоже на... <ItemLink id="interface" />!
Убедитесь, что поставщик находится в направленном режиме или имеет плоскую форму части и (либо) что интерфейс имеет плоскую
форму части: тогда между ними не образуется сетевое соединение.

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/provider_interface_storage.snbt" />

<BoxAnnotation color="#dddddd" min="2.7 0 1" max="3 1 2">
        Интерфейс (должен быть плоской частью, а не полноразмерным блоком)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 4">
        Шины хранения
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 0 0" max="1 1 4">
        Места, куда поставщик должен передавать ресурсы по шаблону (несколько механизмов или несколько сторон одного механизма)
  </BoxAnnotation>

<IsometricCamera yaw="185" pitch="30" />
</GameScene>
