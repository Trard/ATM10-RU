---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: P2P-туннели
  icon: me_p2p_tunnel
  position: 210
categories:
- devices
item_ids:
- ae2:me_p2p_tunnel
- ae2:redstone_p2p_tunnel
- ae2:item_p2p_tunnel
- ae2:fluid_p2p_tunnel
- ae2:fe_p2p_tunnel
- ae2:light_p2p_tunnel
---

# Туннели «точка — точка»

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_tunnels.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

P2P-туннели позволяют перемещать предметы, жидкости, сигналы красного камня, энергию, свет и
[каналы](../ae2-mechanics/channels.md) по сети без непосредственного взаимодействия этих ресурсов с самой сетью.
Существует много разновидностей P2P-туннелей, но каждая переносит только свой тип ресурса. По сути они действуют как порталы,
напрямую соединяющие две стороны блоков на расстоянии. Они не двунаправленные: у соединения есть определённые вход и выход.

![Портал](../assets/assemblies/p2p_portal.png)

Например, воронка, направленная в предметный P2P-туннель, будет вести себя так, словно напрямую подключена к бочке,
и предметы начнут перемещаться.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_hopper_barrel.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Однако две соседние бочки не станут передавать предметы друг другу.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_barrel_barrel.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Есть и другие разновидности, например P2P-туннель красного камня.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_redstone.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

А МЭ P2P-туннель переносит каналы.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_channels.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Виды P2P-туннелей и настройка типа

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_tunnels.snbt" />
  <IsometricCamera yaw="180" pitch="90" />
</GameScene>

Существует много видов P2P-туннелей. Напрямую изготовить можно только МЭ P2P-туннель; остальные получаются щелчком
правой кнопкой мыши по другому P2P-туннелю с определённым предметом:
- МЭ P2P-туннель выбирается щелчком с любым [кабелем](../items-blocks-machines/cables.md).
- P2P-туннель красного камня выбирается щелчком с различными компонентами красного камня.
- Предметный P2P-туннель выбирается щелчком с сундуком или воронкой.
- Жидкостный P2P-туннель выбирается щелчком с ведром или бутылочкой.
- Энергетический P2P-туннель выбирается щелчком почти с любым содержащим энергию предметом.
- Световой P2P-туннель выбирается щелчком с факелом или светокамнем.

У некоторых видов есть особенности. Например, каналы МЭ P2P-туннелей не могут проходить сквозь другие МЭ P2P-туннели,
а энергетические P2P-туннели косвенно взимают 2.5% от проходящей через них FE, увеличивая своё
[энергопотребление](../ae2-mechanics/energy.md).

## Самое распространённое применение P2P

Чаще всего МЭ P2P-туннель используют, чтобы увеличить плотность переноса [каналов](../ae2-mechanics/channels.md).
Вместо пучка плотных кабелей множество каналов можно провести по одному плотному кабелю.

В этом примере 8 входов МЭ P2P принимают 256 каналов (8*32) от <ItemLink id="controller" /> основной сети,
а 8 выходов МЭ P2P выдают их в другом месте. Обратите внимание: каждый вход или выход P2P-туннеля сам занимает 1 канал.
Благодаря этому через тонкий кабель можно провести множество каналов. А поскольку P2P-туннели находятся в выделенной
[подсети](../ae2-mechanics/subnetworks.md), каналы основной сети на это вообще не расходуются! Также туннель можно установить
непосредственно на контроллер либо проложить между ними [плотный умный кабель](../items-blocks-machines/cables.md#smart-cable),
чтобы нагляднее видеть распределение каналов.

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/p2p_compact_channels.snbt" />

  <BoxAnnotation color="#dddddd" min="1.3 1.3 6.3" max="2 2.7 6.7">
        Кварцевое волокно передаёт энергию между основной сетью и P2P-подсетью.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4.1 0 5.7" max="5 2.3 6.4">
        Вход туннеля можно установить прямо на контроллер либо соединить с ним кабелем.
  </BoxAnnotation>

  <IsometricCamera yaw="225" pitch="30" />
</GameScene>

Другой пример, в том числе с [квантовыми мостами](quantum_bridge.md), показан на этой схеме из MS Paint,
которую автору лень приводить в порядок:

![P2P и квантовые мосты](../assets/diagrams/p2p_quantum_network.png)

## Вложение

Однако бесконечно много каналов через один кабель так провести нельзя. Канал МЭ P2P-туннеля не проходит через другой
МЭ P2P-туннель, поэтому рекурсивно вкладывать их невозможно. Обратите внимание: внешний слой МЭ P2P-туннелей на красных
кабелях отключён. Ограничение касается только МЭ P2P-туннелей — другие виды могут проходить через них, что видно по исправно
работающим P2P-туннелям красного камня.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_nesting.snbt" />
  <IsometricCamera yaw="225" pitch="30" />
</GameScene>

## Связывание

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_linking_frequency.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Концы P2P-соединения связываются с помощью <ItemLink id="memory_card" />. Частота отображается на обратной стороне туннеля
в виде матрицы цветов 2x2.
- Shift + правая кнопка мыши — создать новую частоту связи P2P.
- Правая кнопка мыши — вставить настройки, карты улучшений или частоту связи.

Туннель, по которому щёлкнули с зажатым Shift, становится входом, а туннель, по которому щёлкнули без Shift, — выходом.
Выходов может быть несколько, но у МЭ P2P-туннелей поступающие на вход каналы распределяются между выходами, поэтому
дублировать каналы нельзя.

## Рецепт

<RecipeFor id="me_p2p_tunnel" />
