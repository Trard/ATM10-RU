---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Пороговый излучатель уровня МЭ
    icon: extendedae:threshold_level_emitter
categories:
- extended devices
item_ids:
- extendedae:threshold_level_emitter
---

# Пороговый излучатель уровня МЭ

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_threshold_level_emitter.snbt"></ImportStructure>
</GameScene>

Он работает как RS-триггер: отключает сигнал красного камня, когда количество предмета в сети ниже нижнего порога, и
включает его, когда количество выше верхнего порога.

Например, установим нижний порог 100, а верхний — 150.

Изначально сеть пуста, поэтому излучатель неактивен.

Когда количество предмета превысит 150, излучатель подаст сигнал красного камня.

После снижения количества ниже 150 сигнал продолжит поступать.

Наконец, когда количество опустится ниже 100, излучатель отключится.
