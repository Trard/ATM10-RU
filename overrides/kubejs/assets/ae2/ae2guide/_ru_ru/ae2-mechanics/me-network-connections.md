---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: Сетевые соединения
  icon: fluix_glass_cable
---

# Сетевые соединения

## Что означает «сеть»?

«Сеть» — группа [устройств](../ae2-mechanics/devices.md), соединённых блоками, способными передавать
[каналы](../ae2-mechanics/channels.md): [кабелями](../items-blocks-machines/cables.md), полноразмерными машинами
и [устройствами](../ae2-mechanics/devices.md) (<ItemLink id="charger" />, <ItemLink id="interface" />,
<ItemLink id="drive" /> и т. д.). Строго говоря, даже одиночный кабель уже является сетью.

## Небольшое отступление о расположении устройств

Физическое расположение [устройств](../ae2-mechanics/devices.md), выполняющих определённую сетевую функцию, не имеет значения.
Например, <ItemLink id="interface" /> может отправлять содержимое в [сетевое хранилище](../ae2-mechanics/import-export-storage.md)
и извлекать его, <ItemLink id="level_emitter" /> — считывать содержимое хранилища, а <ItemLink id="drive" /> —
сам служить хранилищем независимо от своего места.

Ещё раз: **физическое расположение устройства не имеет значения**. Важно лишь то, что оно подключено к сети
(и, конечно, к какой именно сети).

## Сетевые соединения

Удобнее всего определять состав сети с помощью <ItemLink id="network_tool" />. Он показывает каждый компонент сети.
Если вы видите лишнее либо не видите необходимое, соединения построены неправильно.

Например, здесь две отдельные сети.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/2_networks_1.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="1 2 2">
        Сеть 1
  </BoxAnnotation>

<BoxAnnotation color="#5CA7CD" min="2 0 0" max="3 2 2">
        Сеть 2
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Здесь тоже две отдельные сети, поскольку <ItemLink id="quartz_fiber" /> передаёт [энергию](../ae2-mechanics/energy.md),
но не создаёт сетевого соединения.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/2_networks_2.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="1 2 2">
        Сеть 1
  </BoxAnnotation>

  <BoxAnnotation color="#5CA7CD" min="1.3 0 0" max="3 2 2">
        Сеть 2
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

А здесь одна сеть, а не две. [Квантовый мост](../items-blocks-machines/quantum_bridge.md) действует подобно
беспроводному [плотному кабелю](../items-blocks-machines/cables.md#dense-cable), поэтому обе стороны принадлежат одной сети.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/actually_1_network.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="7 3 3">
        Всё является одной сетью
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Здесь также всего одна сеть. Цвет [кабеля](../items-blocks-machines/cables.md) влияет на сетевые соединения лишь тем,
что кабели разных цветов не соединяются друг с другом. Кабели любого цвета соединяются с флюисовыми (то есть «неокрашенными»).

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/actually_1_network_2.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="4 2 2">
        Всё является одной сетью
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Соединения в контексте подсетей

[Подсети](../ae2-mechanics/subnetworks.md) используют сетевые соединения (а точнее, их **ОТСУТСТВИЕ**),
чтобы ограничить доступ одних [устройств](../ae2-mechanics/devices.md) к другим.

По сути, подсеть — это просто отдельная сеть.

Рассмотрим [автоматическое обогащение руды «Удачей»](../example-setups/ore-fortuner.md).
Здесь три отдельные сети, каждая из которых выполняет в схеме свою задачу.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/ore_fortuner.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 2" max="3 1 3">
        Сеть 1 действует как подсеть-труба. Она ограничивает доступ шины импорта, чтобы та «складировала» рудные блоки
        через плоскости формирования.
  </BoxAnnotation>

  <BoxAnnotation color="#5CA7CD" min="0 0 0" max="3 1 1">
        Сеть 2 действует как ещё одна подсеть-труба. Она ограничивает доступ плоскостей истребления, чтобы добытые
        с «Удачей» куски руды попадали в бочку, а не в основную сеть. Кроме того, плоскости не занимают каналы основной сети.
  </BoxAnnotation>

  <BoxAnnotation color="#82CD5C" min="2 0 1" max="4 1 2">
        Сеть 3 — основная сеть со всем хранилищем и производством. Здесь она фактически лишь подаёт энергию
        и намеренно *не* соединена с двумя подсетями.
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Соединения в контексте P2P

Один вид [P2P-туннеля](../items-blocks-machines/p2p_tunnels.md) переносит [каналы](channels.md), а не предметы,
жидкости или сигнал красного камня, что почему-то многих сбивает с толку. Сеть, на которой установлен туннель,
не связана с сетью, которую он переносит. Они *могут* быть одной сетью, но это необязательно и обычно не так.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_channels_network_connection.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="1.98 2 1">
        Сеть 1 — переносимая сеть (обычно ваша основная сеть)
  </BoxAnnotation>

  <BoxAnnotation color="#5CA7CD" min="2.02 0 0" max="3.98 1 1">
        Сеть 2 — сеть, питающая МЭ P2P-туннели (обычно *не* основная сеть)
  </BoxAnnotation>

  <BoxAnnotation color="#915dcd" min="4.02 0 0" max="6 1 1">
        Сеть 1 — переносимая сеть (обычно ваша основная сеть)
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Менее очевидные соединения

В данном случае существует лишь одна сеть: полноразмерный <ItemLink id="pattern_provider" /> действует подобно кабелю,
а <ItemLink id="inscriber" /> ведёт себя так же. Поэтому сетевое соединение проходит через поставщика и высекатель.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/pattern_provider_network_connection_1.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="4 2 2">
        Всё является одной сетью
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Чтобы этого избежать (что полезно во многих схемах автосоздания с [подсетями](../ae2-mechanics/subnetworks.md)),
щёлкните по поставщику правой кнопкой с <ItemLink id="certus_quartz_wrench" />. Поставщик станет направленным
и перестанет передавать каналы через одну из сторон.

<Row gap="40">
<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/pattern_provider_network_connection_2.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="1.98 2 2">
        Сеть 1
  </BoxAnnotation>

  <BoxAnnotation color="#5CA7CD" min="2.02 0 0" max="4 2 2">
        Сеть 2
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/pattern_provider_directional_connection.snbt" />

  <BoxAnnotation color="#ee3333" min="1 .3 .3" max="1.3 .7 .7">
        Обратите внимание: кабель не соединяется
  </BoxAnnotation>

  <IsometricCamera yaw="255" pitch="30" />
</GameScene>
</Row>

Другие компоненты без направленных сетевых соединений — большинство [кабельных](../ae2-mechanics/cable-subparts.md)
[устройств](../ae2-mechanics/devices.md), например <ItemLink id="import_bus" />, <ItemLink id="storage_bus" />
и <ItemLink id="cable_interface" />.

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/subpart_no_connection.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
