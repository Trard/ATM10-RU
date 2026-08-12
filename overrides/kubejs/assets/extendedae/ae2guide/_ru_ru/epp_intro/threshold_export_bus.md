---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Пороговая шина экспорта МЭ
    icon: extendedae:threshold_export_bus
categories:
- extended devices
item_ids:
- extendedae:threshold_export_bus
---

# Пороговая шина экспорта МЭ

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_threshold_export_bus.snbt"></ImportStructure>
</GameScene>

Пороговая шина экспорта МЭ работает, когда количество хранящегося в МЭ-сети предмета выше или ниже порога.

## Пример

![Интерфейс пороговой шины](../pic/thr_bus_gui1.png)

Порог меди равен 128, поэтому шина экспортирует медь, когда в сети хранится больше 128 единиц.

![Интерфейс пороговой шины](../pic/thr_bus_gui2.png)

Порог тот же, но выбран режим BELOW. Шина экспортирует медь, когда в сети хранится меньше 128 единиц.
