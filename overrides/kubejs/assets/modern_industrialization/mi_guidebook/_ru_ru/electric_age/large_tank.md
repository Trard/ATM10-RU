---
navigation:
  title: "Большой бак"
  icon: "modern_industrialization:large_tank"
  position: 101
  parent: modern_industrialization:electric_age.md
item_ids:
  - modern_industrialization:large_tank
  - modern_industrialization:large_tank_hatch
---

# Большой бак

<GameScene zoom="1" interactive={true} fullWidth={true}>
    <MultiblockShape controller="large_tank" />
    <MultiblockShape controller="large_tank" useBigShape={true} x="-8" z="-2" />
</GameScene>

Большой бак — мультиблок для хранения огромных объёмов одной жидкости, например пара. Каждый блок конструкции, включая боковые стороны, добавляет ёмкость на 64 ведра.

<Recipe id="modern_industrialization:electric_age/machine/large_tank_asbl" />

Большой бак поддерживает множество размеров в зависимости от необходимого объёма. Панель настройки размера открывается кнопкой в интерфейсе контроллера.

Доступ к баку имеют только трубы — через контроллер или люк большого бака, описанный ниже.

Не ломайте контроллер, иначе вся хранящаяся жидкость будет потеряна!

Люк большого бака служит продолжением самого бака. Щёлкните по нему ПКМ, чтобы открыть интерфейс большого бака; подключённые к люку трубы получают прямой доступ к хранилищу.

<Recipe id="modern_industrialization:electric_age/machine/large_tank_hatch_asbl" />
