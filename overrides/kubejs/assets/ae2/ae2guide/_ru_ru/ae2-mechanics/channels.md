---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: Каналы
  icon: controller
---

# Каналы

[МЭ-сетям](me-network-connections.md) Applied Energistics 2 нужны каналы для поддержки [устройств](../ae2-mechanics/devices.md),
использующих сетевое хранилище или другие сетевые службы. Представьте каналы как USB-кабели ко всем устройствам:
у компьютера ограничено число USB-портов, поэтому он поддерживает лишь определённое количество подключений.
Большинство машин, полноразмерных устройств и обычных кабелей пропускает до 8 каналов. Такие устройства и кабели можно
представить как пучок из 8 «проводов каналов». [Плотные кабели](../items-blocks-machines/cables.md#dense-cable) поддерживают
до 32 каналов. Ещё 32 канала способны передавать только <ItemLink id="me_p2p_tunnel" /> и
[квантовый сетевой мост](../items-blocks-machines/quantum_bridge.md). Когда устройство занимает канал, представьте,
что один USB-«провод» отделяется от пучка и дальше по линии уже недоступен.

<GameScene zoom="7" interactive={true}>
  <ImportStructure src="../assets/assemblies/channel_demonstration_1.snbt" />

  <LineAnnotation color="#33ff33" from="1 .4 .7" to="2.4 .4 .7" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .6 .7" to="2.4 .6 .7" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .4 .6" to="2.6 .4 .6" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .6 .6" to="2.6 .6 .6" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .6 .6" to="2.6 .6 .6" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="2.4 .6 .7" to="2.4 .6 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.4 .4 .7" to="2.4 .4 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.6 .6 .6" to="2.6 .6 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.6 .4 .6" to="2.6 .4 1.5" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="2.1 .6 1.5" to="2.4 .6 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.6 .4 1.5" to="2.9 .4 1.5" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="2.6 .6 1.5" to="2.6 .9 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.4 .1 1.5" to="2.4 .4 1.5" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="1 .6 .4" to="3.5 .6 .4" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .4 .4" to="3.5 .4 .4" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="3.5 .6 .4" to="3.5 .9 .4" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="3.5 .1 .4" to="3.5 .4 .4" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="1 .6 .3" to="1.5 .6 .3" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .4 .3" to="1.5 .4 .3" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="1.5 .6 .3" to="1.5 .9 .3" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1.5 .1 .3" to="1.5 .4 .3" alwaysOnTop={true}/>

  <LineAnnotation color="#ff3333" from="3.5 .5 .5" to="5.5 .5 .5" alwaysOnTop={true}>
  Все 8 каналов кабеля заняты, поэтому накопителю канал не достаётся.  
  </LineAnnotation>

  <LineAnnotation color="#993333" from="1 .5 .5" to="1.25 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="1.5 .5 .5" to="1.75 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="2 .5 .5" to="2.25 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="2.5 .5 .5" to="2.75 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="3 .5 .5" to="3.25 .5 .5" alwaysOnTop={true}/>

  <DiamondAnnotation pos="3.6 0.5 0.5" color="#ff0000">
        Все 8 каналов кабеля заняты, поэтому накопителю канал не достаётся.
    </DiamondAnnotation>

  <IsometricCamera yaw="15" pitch="30" />
</GameScene>

Удобнее всего наблюдать использование и маршруты каналов с помощью [умных кабелей](../items-blocks-machines/cables.md):
они отображают пути и число используемых каналов.

Каждый канал расходует 1⁄128 AE/т на каждый пройденный узел. Поэтому добавление <ItemLink id="controller" />
в сеть с 8 устройствами и более чем 96 узлами способно даже уменьшить энергопотребление, изменив распределение каналов.

Важно: **КАНАЛЫ НИКАК НЕ СВЯЗАНЫ С ЦВЕТОМ КАБЕЛЯ**. Цвет лишь не позволяет разным кабелям соединяться.

## Маршрутизация каналов

При использовании <ItemLink id="controller" /> канал прокладывается в три этапа. Сначала он идёт кратчайшим путём
через соседние машины к ближайшему [обычному кабелю](../items-blocks-machines/cables.md) — стеклянному, покрытому или умному.
Затем кратчайшим путём по обычным кабелям к ближайшему [плотному кабелю](../items-blocks-machines/cables.md) —
обычному плотному или плотному умному. Наконец, кратчайшим путём по плотным кабелям к <ItemLink id="controller" />.
Если кратчайший маршрут уже переполнен, некоторые [устройства](devices.md) могут не получить нужные каналы.
Используйте цвета кабелей, кабельные якоря и туннели, чтобы направить каналы по желаемому пути.

Например, здесь некоторые накопители остаются без каналов. Общей ёмкости кабелей хватает, но каналы выбирают кратчайшие
пути, перегружая одни кабели и оставляя другие пустыми.

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/channel_path_length_issue.snbt" />

  <LineAnnotation color="#33ff33" from="3 .5 1.4" to="0.4 0.5 1.4" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 .5 1.4" to="0.4 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 0.5 3.6" to="1.4 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1.4 0.5 3.6" to="1.4 0.5 5" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#33ff33" from="3 0.5 3.6" to="1.6 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1.6 0.5 3.6" to="1.6 0.5 5" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#ff3333" from="3 .5 1.6" to="0.6 .5 1.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#ff3333" from="0.6 .5 1.6" to="0.6 .5 3.4" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#ff3333" from="0.6 .5 3.4" to="1.4 .5 3.4" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#ff3333" from="3 .5 3.4" to="1.6 .5 3.4" alwaysOnTop={true} thickness="0.05"/>

  <BoxAnnotation color="#dddddd" min="1.2 0.2 3.2" max="1.8 0.8 3.8" alwaysOnTop={true} thickness="0.05">
        Более 8 каналов пытаются пройти здесь, поэтому часть обрывается.
  </BoxAnnotation>

  <IsometricCamera yaw="90" pitch="90" />

</GameScene>

Проблема решается более строгим ограничением доступных путей. Сеть должна напоминать дерево (или куст).
Сведите к минимуму петли и неоднозначные маршруты каналов.

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/channel_path_length_issue_fix.snbt" />

  <LineAnnotation color="#33ff33" from="3 .5 1.4" to="0.4 0.5 1.4" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 .5 1.4" to="0.4 0.5 5.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 0.5 5.6" to="1 0.5 5.6" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#33ff33" from="3 0.5 3.6" to="1.6 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1.6 0.5 3.6" to="1.6 0.5 5" alwaysOnTop={true} thickness="0.05"/>

  <IsometricCamera yaw="90" pitch="90" />

</GameScene>

## Сети без контроллера

Сеть без <ItemLink id="controller" /> считается сетью ad-hoc и поддерживает до 8 устройств, использующих каналы.
После превышения этого числа канальные устройства сети отключатся. Удалите лишние устройства либо добавьте
<ItemLink id="controller" />.

В отличие от сетей с контроллером, [умные кабели](../items-blocks-machines/cables.md) в сети ad-hoc показывают
общее число занятых каналов во всей сети, а не число каналов, проходящих через конкретный кабель.

В сети ad-hoc каждое устройство использует один общесетевой канал. Это сильно отличается от распределения каналов
<ItemLink id="controller" /> по кратчайшим маршрутам.

## Проектирование

Как сказано в разделе [о маршрутизации](channels.md#channel-routing), лучше строить сеть в виде дерева:
плотные кабели ветвятся от контроллера, обычные — от плотных, а к обычным подключаются группы
не более чем из 8 [устройств](../ae2-mechanics/devices.md).

Вот пример того, как делать не следует.

Проследим пути каналов:

1. Сразу после выхода вправо из контроллера возникает ограничение в 8 каналов, поскольку накопитель действует
как обычный кабель. Умного кабеля здесь нет, поэтому число занятых каналов не видно. Осталось 8 каналов.
2. Накопитель занимает канал. Осталось 7 каналов.
3. Два канала уходят вверх к терминалам. Осталось 5 каналов.
4. Дальше вправо интерфейс занимает ещё один канал. Осталось 4 канала.
5. Один канал уходит вверх к поставщику шаблонов. Осталось 3 канала.
6. Дальше вправо один канал уходит вверх к шине импорта. Осталось 2 канала.
7. Группа поставщиков шаблонов со сборщиками получает только 2 канала, поэтому два поставщика остаются без каналов.

Основная ошибка — искусственное сужение пропускной способности и отсутствие расчёта распределения каналов.

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/bad_network_structure.snbt" />

<LineAnnotation color="#33ff33" from="6.5 .5 1.5" to="6 .5 1.5" alwaysOnTop={true} thickness="0.4">
  32 канала
</LineAnnotation>

<LineAnnotation color="#33ff33" from="6 .5 1.5" to="5.5 .5 1.5" alwaysOnTop={true} thickness="0.2">
  8 каналов
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 .5 1.5" to="5.5 1.5 1.5" alwaysOnTop={true} thickness="0.1">
  2 канала
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 .5 1.5" to="5.5 .3 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 1.5 1.5" to="5.5 2.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 2.5 1.5" to="5.5 2.5 1.1" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 .5 1.5" to="4.5 .5 1.5" alwaysOnTop={true} thickness="0.158">
  5 каналов
</LineAnnotation>

<LineAnnotation color="#33ff33" from="4.5 .5 1.5" to="4.5 .3 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="4.5 .5 1.5" to="4.5 1.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="4.5 .5 1.5" to="3.5 .5 1.5" alwaysOnTop={true} thickness="0.122">
  3 канала
</LineAnnotation>

<LineAnnotation color="#33ff33" from="3.5 .5 1.5" to="3.5 2.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="3.5 2.5 1.5" to="3.7 2.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="3.5 .5 1.5" to="1.5 .5 1.5" alwaysOnTop={true} thickness="0.1">
  2 канала
</LineAnnotation>

<LineAnnotation color="#33ff33" from="1.5 0.5 1.5" to="1.5 0.3 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="1.5 0.5 1.5" to="0.5 0.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#33ff33" from="0.5 0.5 1.5" to="0.5 0.5 0.5" alwaysOnTop={true} thickness="0.071">
  1 канал
</LineAnnotation>

<LineAnnotation color="#ff3333" from="0.5 1.5 1.5" to="0.5 1.3 1.5" alwaysOnTop={true} thickness="0.071">
  каналов нет
</LineAnnotation>

<LineAnnotation color="#ff3333" from="1.5 1.5 0.5" to="1.5 1.3 0.5" alwaysOnTop={true} thickness="0.071">
  каналов нет
</LineAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

---

Вот пример хорошей структуры:

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/assemblies/treelike_network_structure.snbt" />

    <BoxAnnotation color="#dddddd" min="6.9 0 4.9" max="9.1 4 7.1" thickness="0.05">
        Обратите внимание: поставщики шаблонов разделены на группы по 8.
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="5 4 4" max="8 5 5" thickness="0.05">
        При соединении двух полностью занятых обычных кабелей нужен плотный кабель.
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="5 0 13" max="8 1 14" thickness="0.05">
        Разные цвета не позволяют соседним кабелям соединяться.
    </BoxAnnotation>


  <IsometricCamera yaw="315" pitch="30" />
</GameScene>

## Режимы каналов

В AE2 10.0.0 для Minecraft 1.18 появились новые параметры поведения каналов. В общем разделе конфигурации есть параметр
`channels`, а операторы могут менять режим и конфигурацию прямо в игре. Команда `/ae2 channelmode <mode>` меняет режим,
а `/ae2 channelmode` показывает текущий. После изменения все существующие сети перезагружаются и сразу переходят в новый режим.

Это возвращает и улучшает настройку из Minecraft 1.12, предлагая более подходящие варианты игрокам, которые хотят
немного упростить игру, но не желают полностью удалять механику.

В таблице перечислены режимы, доступные в конфигурационном файле и команде.

| Настройка  | Описание |
| ---------- | -------- |
| `default`  | Обычный режим с описанной в руководстве ёмкостью кабелей и сетей ad-hoc |
| `x2`       | Ёмкость всех каналов удвоена (16 на обычном кабеле, 64 на плотном, сеть ad-hoc поддерживает 16 каналов) |
| `x3`       | Ёмкость всех каналов утроена (24 на обычном кабеле, 92 на плотном, сеть ad-hoc поддерживает 24 канала) |
| `x4`       | Ёмкость всех каналов увеличена вчетверо (32 на обычном кабеле, 128 на плотном, сеть ad-hoc поддерживает 32 канала) |
| `infinite` | Все ограничения каналов сняты. Контроллеры по-прежнему *значительно* уменьшают энергопотребление сетей. Умный кабель показывает только полностью выключенное состояние (каналы не передаются) либо включённое (передаётся хотя бы один канал). |
