---
navigation:
  title: "Ваша первая сталь"
  icon: "modern_industrialization:steel_ingot"
  position: 10
  parent: modern_industrialization:steam_age.md
item_ids:
  - modern_industrialization:steam_blast_furnace
---

# Ваша первая сталь

Кокс можно измельчить в коксовую пыль, а затем соединить её с железом, получив необожжённую стальную пыль. Разумеется, смеситель обеспечивает более выгодное соотношение. Чтобы превратить эту пыль в сталь, понадобится паровая доменная печь.

Изготовьте контроллер, 29 блоков огнеупорных кирпичей и те же три люка, что использовались для коксовой печи.

<GameScene zoom="3" interactive={true} fullWidth={true}>
    <MultiblockShape controller="steam_blast_furnace" />
</GameScene>

Конструкция доменной печи повторяет коксовую печь, но обычные кирпичи заменены огнеупорными и сверху добавлен ещё один полый слой.

<Recipe id="modern_industrialization:steam_age/fireclay/steam_blast_furnace" />
