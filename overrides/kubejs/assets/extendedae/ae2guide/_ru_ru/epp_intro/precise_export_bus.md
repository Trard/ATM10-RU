---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Точная шина экспорта МЭ
    icon: extendedae:precise_export_bus
categories:
- extended devices
item_ids:
- extendedae:precise_export_bus
---

# Точная шина экспорта МЭ

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_precise_export_bus.snbt"></ImportStructure>
</GameScene>

Точная шина экспорта МЭ передаёт предметы или жидкости в заданном количестве. Экспорт выполняется только тогда, когда
целевая ёмкость может принять весь объём целиком.

## Пример

![Интерфейс точной шины](../pic/pre_bus_gui1.png)

За одну операцию экспортируются 3 блока булыжника. Когда в сети остаётся меньше 3 блоков, экспорт прекращается.

![Интерфейс точной шины](../pic/pre_bus_gui2.png)

Экспорт также прекращается, если целевая ёмкость не вмещает весь объём. В сундуке осталось место только для 2 блоков
булыжника, поэтому шина останавливается.
