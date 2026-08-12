---
navigation:
  title: "Электрическая доменная печь"
  icon: "modern_industrialization:electric_blast_furnace"
  position: 106
  parent: modern_industrialization:electric_age.md
item_ids:
  - modern_industrialization:electric_blast_furnace
  - modern_industrialization:cupronickel_coil
  - modern_industrialization:lv_energy_input_hatch
  - modern_industrialization:mv_energy_input_hatch
---

# Электрическая доменная печь

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="electric_blast_furnace" />
</GameScene>

Электрическая доменная печь (ЭДП) — электрическая версия паровой доменной печи. Она открывает новые рецепты, а её разгон, как и у других электрических мультиблоков, по умолчанию ограничен 128 EU/т.

<Recipe id="modern_industrialization:electric_age/machine/electric_blast_furnace_asbl" />

ЭДП состоит из одного слоя жаропрочных обшивок машин, двух полых слоёв купроникелевых катушек и ещё одного слоя жаропрочных обшивок. Контроллер должен находиться в нижнем слое, а люки — в верхнем или нижнем.

<Recipe id="modern_industrialization:materials/cupronickel/craft/coil" />

Не забудьте добавить один или несколько люков ввода энергии, иначе ЭДП останется без питания! Люк ввода энергии низкого напряжения подключается только к кабелям НН.

<Recipe id="modern_industrialization:hatches/basic/energy_input_hatch" />

Люки ввода энергии среднего напряжения подключаются только к кабелям СН. Это пригодится, если вашей ЭДП требуется уйма энергии! Пока вы ещё не можете их создать, но помните, что они существуют...

<Recipe id="modern_industrialization:hatches/advanced/energy_input_hatch" />
