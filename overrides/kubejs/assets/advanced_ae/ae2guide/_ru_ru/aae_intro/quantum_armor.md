---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: Комплект квантовой брони
  icon: advanced_ae:quantum_helmet
categories:
  - advanced items
item_ids:
  - advanced_ae:quantum_helmet
  - advanced_ae:quantum_chestplate
  - advanced_ae:quantum_leggings
  - advanced_ae:quantum_boots
  - advanced_ae:quantum_upgrade_base
  - advanced_ae:walk_speed_card
  - advanced_ae:sprint_speed_card
  - advanced_ae:step_assist_card
  - advanced_ae:jump_height_card
  - advanced_ae:lava_immunity_card
  - advanced_ae:flight_card
  - advanced_ae:water_breathing_card
  - advanced_ae:auto_feeding_card
  - advanced_ae:auto_stock_card
  - advanced_ae:magnet_card
  - advanced_ae:hp_buffer_card
  - advanced_ae:evasion_card
  - advanced_ae:regeneration_card
  - advanced_ae:strength_card
  - advanced_ae:attack_speed_card
  - advanced_ae:luck_card
  - advanced_ae:reach_card
  - advanced_ae:swim_speed_card
  - advanced_ae:night_vision_card
  - advanced_ae:flight_drift_card
  - advanced_ae:recharging_card
  - advanced_ae:portable_workbench_card
  - advanced_ae:pick_craft_card
---

# Комплект квантовой брони

<Row gap="10">
<ItemImage id="advanced_ae:quantum_helmet" components="ae2:stored_energy=2.0E8d" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_chestplate" components="ae2:stored_energy=3.0E8d" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_leggings" components="ae2:stored_energy=2.5E8d" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_boots" components="ae2:stored_energy=2.0E8d" scale="4"></ItemImage>
</Row>

<ItemGrid>
<ItemIcon id="advanced_ae:quantum_helmet" components="ae2:stored_energy=2.0E8d"></ItemIcon>
<ItemIcon id="advanced_ae:quantum_chestplate" components="ae2:stored_energy=3.0E8d"></ItemIcon>
<ItemIcon id="advanced_ae:quantum_leggings" components="ae2:stored_energy=2.5E8d"></ItemIcon>
<ItemIcon id="advanced_ae:quantum_boots" components="ae2:stored_energy=2.0E8d"></ItemIcon>
</ItemGrid>

Вы когда-нибудь задумывались, каково это — носить свою систему AE на себе? Теперь гадать не придётся. Квантовая броня —
высокотехнологичное малозаметное снаряжение, которое подключается к системе AE2 и предоставляет удобный доступ ко всему
необходимому в пути! По умолчанию это питаемый энергией костюм с защитой, сопоставимой с незеритовым снаряжением. Он
использует внутренний буфер для создания энергетического щита, поглощающего значительную часть урона. Ботинки полностью
устраняют урон от падения, а нагрудник — штраф к добыче в полёте. Но настоящая сила костюма раскрывается лишь после
установки улучшений!

<br/>

## Привязка брони

Каждый элемент брони можно отдельно привязать к системе, поместив его в соответствующую ячейку
<ItemLink id="ae2:wireless_access_point" />. В зависимости от элемента снаряжения и установленных карт это открывает
разные преимущества, о которых рассказано ниже. Для правильной работы дополнительных возможностей необходимо оставаться
в радиусе связанной точки доступа.

<br/>

## Установка улучшений

Чтобы устанавливать улучшения, наденьте элементы брони и откройте меню настройки квантовой брони назначенной клавишей
(по умолчанию N).

![Меню настройки квантовой брони](../pic/quantum_armor_config.png)

В этом окне можно добавлять и извлекать улучшения, включать и отключать их, а также изменять доступные настройки.

<br/>

## Базовая карта квантового улучшения

<ItemImage id="advanced_ae:quantum_upgrade_base" scale="2"></ItemImage>

Сама по себе <ItemLink id="advanced_ae:quantum_upgrade_base" /> не даёт особых эффектов, но служит ингредиентом для
создания всех карт улучшений.

<br/>

## Карта автокормления

<ItemImage id="advanced_ae:auto_feeding_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:auto_feeding_card" /> позволяет выбрать предметы, которыми система будет кормить игрока.
Перетащите нужную еду в ячейки фильтра. Если снаряжение связано с сетью AE2, при появлении голода оно попытается найти
эти предметы в системе и накормить игрока.

<br/>

## Карта автопополнения

<ItemImage id="advanced_ae:auto_stock_card" scale="2"></ItemImage>

Для <ItemLink id="advanced_ae:auto_stock_card" /> элемент снаряжения тоже должен быть связан с системой AE2 и находиться
в радиусе точки доступа. Карта позволяет настроить несколько стопок, количество которых будет постоянно поддерживаться
в инвентаре игрока. Значение не ограничено одной стопкой: при желании можно задать количество, занимающее несколько
ячеек инвентаря.

<br/>

## Карты скорости

<Row gap="10">
<ItemImage id="advanced_ae:walk_speed_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:sprint_speed_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:swim_speed_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:walk_speed_card" />
* <ItemLink id="advanced_ae:sprint_speed_card" />
* <ItemLink id="advanced_ae:swim_speed_card" />

Эти карты изменяют скорость передвижения владельца комплекта. Для каждой можно настроить желаемую скорость; карты
также влияют на движение крадучись и в полёте. С их помощью скорость можно не только повысить, но и снизить, чтобы лучше
управлять движением при наличии других эффектов ускорения.

<br/>

## Карты высоты

<Row gap="10">
<ItemImage id="advanced_ae:jump_height_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:step_assist_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:jump_height_card" />
* <ItemLink id="advanced_ae:step_assist_card" />

Эти улучшения изменяют вертикальное перемещение, позволяя настроить высоту прыжка или автоматический подъём на блоки.

<br/>

## Карты полёта

<Row gap="10">
<ItemImage id="advanced_ae:flight_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:flight_drift_card" scale="2"></ItemImage>
</Row>

### Карта полёта

Установленная <ItemLink id="advanced_ae:flight_card" /> открывает творческий полёт. Его скорость настраивается ползунком
в интерфейсе и дополнительно складывается с эффектами улучшений скорости ходьбы и бега.

### Карта инерции полёта

<ItemLink id="advanced_ae:flight_drift_card" /> работает только вместе с картой полёта. Она добавляет ползунок,
изменяющий инерцию творческого полёта. Чем ниже значение, тем быстрее вы останавливаетесь; при значении 0 остановка
происходит мгновенно.

<br/>

## Карта МЭ-подзарядки

<ItemImage id="advanced_ae:recharging_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:recharging_card" /> включает беспроводную подзарядку надетого элемента. Для этого нужна связь
с сетью и нахождение в радиусе точки доступа. Установка улучшения в нагрудник также заряжает предметы в инвентаре.

<br/>

## Карта переносного верстака

<ItemImage id="advanced_ae:portable_workbench_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:portable_workbench_card" /> добавляет квантовому костюму переносной верстак ячеек. Он
открывается назначенной клавишей и работает так же, как его блочная версия.

<br/>

## Карта крафта выбранного блока

<ItemImage id="advanced_ae:pick_craft_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:pick_craft_card" /> добавляет броне новое действие на назначенную клавишу. При нажатии система
пытается создать блок, на который смотрит игрок. Для этого нужна связь с сетью и подходящий для цели шаблон. Во
всплывающем окне можно указать количество, после чего процесс идёт точно так же, как обычный запрос автокрафта.

<br/>

## Вспомогательные карты

<Row gap="10">
<ItemImage id="advanced_ae:night_vision_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:lava_immunity_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:water_breathing_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:magnet_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:camo_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:night_vision_card" />
* <ItemLink id="advanced_ae:lava_immunity_card" />
* <ItemLink id="advanced_ae:water_breathing_card" />
* <ItemLink id="advanced_ae:magnet_card" />
* <ItemLink id="advanced_ae:camo_card" />

Эти карты предоставляют владельцу комплекта различные полезные возможности: невосприимчивость к некоторым видам урона
и ночное зрение. У карты магнита есть отдельный экран настройки, где задаются фильтры подбираемых и игнорируемых
предметов, а также радиус действия.

<br/>

## Защитные карты

<Row gap="10">
<ItemImage id="advanced_ae:hp_buffer_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:regeneration_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:evasion_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:hp_buffer_card" />
* <ItemLink id="advanced_ae:regeneration_card" />
* <ItemLink id="advanced_ae:evasion_card" />

Эти улучшения разными способами защищают владельца комплекта. Карта запаса здоровья повышает максимальное здоровье,
карта регенерации ускоряет его восстановление, а карта уклонения даёт шанс полностью избежать урона из любого источника.

<br/>

## Атакующие карты

<Row gap="10">
<ItemImage id="advanced_ae:strength_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:attack_speed_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:strength_card" />
* <ItemLink id="advanced_ae:attack_speed_card" />

Эти улучшения усиливают атакующие возможности владельца, повышая урон и скорость атаки.

<br/>

## Карты характеристик

<Row gap="10">
<ItemImage id="advanced_ae:luck_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:reach_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:luck_card" />
* <ItemLink id="advanced_ae:reach_card" />

Эти карты напрямую повышают характеристики владельца: удача улучшает добычу, а дальность увеличивает расстояние
взаимодействия с блоками. Для карты дальности можно задать желаемое значение.

<br/>

## Продолжение следует

Этот комплект снаряжения выпущен как основа для множества запланированных возможностей. Следите за обновлениями!
