---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Квантовый мост
  icon: quantum_ring
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:quantum_link
- ae2:quantum_ring
---

# Квантовый сетевой мост

![Сформированный квантовый сетевой мост](../assets/diagrams/quantum_bridge_demonstration.png)

Квантовые сетевые мосты позволяют продолжать [сеть](../ae2-mechanics/me-network-connections.md) на неограниченное расстояние
и даже между измерениями. Всего они переносят 32 канала независимо от того, как кабели подключены к каждой стороне,
и по сути действуют как беспроводной [плотный кабель](cables.md#dense-cable).

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/quantum_bridge_internal_structure_1.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/quantum_bridge_internal_structure_2.snbt" />

  <BoxAnnotation color="#33dd33" min="1 1 1" max="6 2 3">
        Воображаемый кабель между двумя конечными точками
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Важно: **чанки с обеими сторонами должны быть постоянно загружены**. Если 2 стороны находятся далеко друг от друга,
понадобится <ItemLink id="spatial_anchor" /> или другой загрузчик чанков.

# Квантовое кольцо

<BlockImage id="quantum_ring" scale="8" />

Восемь таких блоков вокруг <ItemLink id="quantum_link" /> образуют квантовый сетевой мост. Сетевые соединения принимают
только 4 блока <ItemLink id="quantum_ring" />, прилегающие к <ItemLink id="quantum_link" />; 4 угловых блока
к кабелям не подключаются.

## Рецепт

<RecipeFor id="quantum_ring" />

# Камера квантовой связи

<BlockImage id="quantum_link" scale="8" />

Один такой блок, окружённый <ItemLink id="quantum_ring" />, образует квантовый сетевой мост. Камера не подключается
к кабелям и регистрируется как часть сети только после формирования полного моста.

Её инвентарь вмещает лишь одну <ItemLink id="quantum_entangled_singularity" /> и доступен для автоматизации.

## Рецепт

<RecipeFor id="quantum_link" />
