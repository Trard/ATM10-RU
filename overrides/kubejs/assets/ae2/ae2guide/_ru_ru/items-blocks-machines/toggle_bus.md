---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Переключающая шина
  icon: toggle_bus
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:toggle_bus
- ae2:inverted_toggle_bus
---

# Переключающая шина

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/assemblies/toggle_bus.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

Эта шина работает подобно <ItemLink id="fluix_glass_cable" /> и другим кабелям, но позволяет переключать своё соединение
сигналом красного камня. С её помощью можно отсоединять часть [МЭ сети](../ae2-mechanics/me-network-connections.md).

При подаче сигнала обычная шина включает соединение, а <ItemLink id="inverted_toggle_bus" />, напротив, отключает его.

Учтите, что переключение может перезапустить сеть и заставить её заново рассчитать подключённые устройства.

Такие шины являются [кабельными компонентами](../ae2-mechanics/cable-subparts.md).

## Рецепты

<RecipeFor id="toggle_bus" />

<RecipeFor id="inverted_toggle_bus" />
