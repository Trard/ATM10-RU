---
navigation:
  title: "Нержавеющая сталь"
  icon: "modern_industrialization:stainless_steel_dust"
  position: 201
  parent: modern_industrialization:midgame.md
item_ids:
  - modern_industrialization:vacuum_freezer
  - modern_industrialization:distillation_tower
---

# Нержавеющая сталь

## Нержавеющая сталь

<ItemImage id="modern_industrialization:stainless_steel_ingot" />

Нержавеющая сталь — следующий материал, который понадобится вам в больших количествах. Читайте дальше, чтобы узнать зачем!

При плавке пыли нержавеющей стали в ЭДП получаются горячие слитки. Охладить их до обычных слитков можно в вакуумном морозильнике.

## Вакуумный морозильник

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="vacuum_freezer" />
</GameScene>

Базовые материалы можно посмотреть в REI, а точную форму конструкции — с помощью гаечного ключа!

<Recipe id="modern_industrialization:electric_age/machine/vacuum_freezer_asbl" />

## Дистилляционная башня

Наладив производство цифровых схем, обязательно постройте дистилляционную башню. Дистиллятор выдаёт только один продукт переработки нефти, а башня — ПО ОДНОМУ ПРОДУКТУ НА КАЖДЫЙ СЛОЙ!

<Recipe id="modern_industrialization:electric_age/machine/distillation_tower_asbl" />

Ниже рядом показаны башни минимального и максимального размера.
Башня высотой 2 выдаёт только первый продукт рецепта, высотой 3 — первые два продукта и так далее...


<GameScene zoom="1" interactive={true} fullWidth={true}>
    <MultiblockShape controller="distillation_tower" />
    <MultiblockShape controller="distillation_tower" x="-6" useBigShape={true} />
</GameScene>
