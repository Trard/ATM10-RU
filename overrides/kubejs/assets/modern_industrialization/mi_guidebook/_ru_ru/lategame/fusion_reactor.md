---
navigation:
  title: "СИИИИНТЕЗ"
  icon: "modern_industrialization:fusion_reactor"
  position: 302
  parent: modern_industrialization:endgame.md
item_ids:
  - modern_industrialization:fusion_reactor
  - modern_industrialization:plasma_turbine
---

# СИИИИНТЕЗ

## Термоядерный реактор

<GameScene zoom="1" interactive={true} fullWidth={true}>
    <MultiblockShape controller="fusion_reactor" />
</GameScene>

Термоядерный реактор — непревзойдённый источник энергии! Он объединяет дейтерий, тритий и/или гелий-3 в гелиевую плазму — самое мощное топливо в игре. Однако для запуска реакции требуется огромное количество энергии.

<Recipe id="modern_industrialization:electric_age/machine/fusion_reactor_asbl" />

## Плазменная турбина

<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="plasma_turbine" />
</GameScene>

Плазменная турбина преобразует гелиевую плазму в EU из расчёта 100 kEU на милливедро. Её максимальная выработка составляет примерно 1 MEU/т.

<Recipe id="modern_industrialization:electric_age/machine/plasma_turbine_asbl" />
