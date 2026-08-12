---
navigation:
  title: "Высокое давление!"
  icon: "modern_industrialization:pressurizer"
  position: 202
  parent: modern_industrialization:midgame.md
item_ids:
  - modern_industrialization:pressurizer
  - modern_industrialization:high_pressure_large_steam_boiler
  - modern_industrialization:high_pressure_advanced_large_steam_boiler
  - modern_industrialization:large_steam_turbine
  - modern_industrialization:heat_exchanger
  - modern_industrialization:hv_steam_turbine
---

# Высокое давление!

## Регулировщик давления

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="pressurizer" />
</GameScene>

Регулировщик давления — новый титановый мультиблок, превращающий воду и пар в воду и пар высокого давления, а также выполняющий обратные преобразования.

<Recipe id="modern_industrialization:electric_age/machine/pressurizer_asbl" />

## Большой паровой котёл высокого давления

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="high_pressure_large_steam_boiler" />
</GameScene>

Получив воду высокого давления, вы сможете производить пар высокого давления в большом паровом котле высокого давления.

Один миллибакет пара высокого давления эквивалентен 8 мб обычного пара, то есть 8 EU.

<Recipe id="modern_industrialization:electric_age/machine/high_pressure_large_steam_boiler_asbl" />

## Продвинутый большой паровой котёл высокого давления

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="high_pressure_advanced_large_steam_boiler" />
</GameScene>

Позднее вы также сможете построить продвинутую версию большого парового котла высокого давления.

## Большая паровая турбина

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="large_steam_turbine" />
</GameScene>

Большая паровая турбина принимает как обычный пар (1 мб = 1 EU), так и пар высокого давления (1 мб = 8 EU) и преобразует их в электричество с мощностью до 16 384 EU/т! **Однако она не возвращает ни обычную воду, ни воду высокого давления.**

<Recipe id="modern_industrialization:electric_age/machine/large_steam_turbine_asbl" />

## Теплообменник

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="heat_exchanger" />
</GameScene>

Помните, что сжатие воды до высокого давления требует много энергии, а турбина не возвращает воду! Теплообменник позволяет восстановить воду высокого давления для следующего цикла.

<Recipe id="modern_industrialization:electric_age/machine/heat_exchanger_asbl" />

## Паровая турбина ВН

Для небольших установок можно использовать паровую турбину ВН. Как и другие генераторы высокого напряжения, она производит 512 EU/т и принимает только обычный пар.

<Recipe id="modern_industrialization:electric_age/machine/hv_steam_turbine_asbl" />
