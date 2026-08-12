---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: Шина экспорта запаса
  icon: advanced_ae:stock_export_bus_part
categories:
  - advanced items
item_ids:
  - advanced_ae:stock_export_bus_part
---

# Шина экспорта запаса

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_stock_export_bus.snbt"></ImportStructure>
</GameScene>

Шину экспорта запаса можно настроить на экспорт точного количества отфильтрованных стопок. Она отслеживает содержимое
целевого хранилища и не вставляет больше указанного числа. Для настройки откройте интерфейс, перетащите нужный предмет в
ячейку фильтра и задайте количество щелчком средней кнопки мыши. Учтите, что шина не регулирует выход: если содержимое
хранилища превысит заданное количество, она не извлечёт лишние предметы или жидкости.
