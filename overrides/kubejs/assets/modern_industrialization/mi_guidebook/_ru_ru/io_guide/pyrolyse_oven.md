---
navigation:
  title: "Пиролизная печь"
  icon: "industrialization_overdrive:pyrolyse_oven"
  parent: "io_guide.md"
  position: 1
item_ids:
  - industrialization_overdrive:pyrolyse_oven
---

# Пиролизная печь

## Пиролизная печь

```
TODO: раскомментировать, когда это перестанет вызывать сбой.
<GameScene zoom="2" interactive={true} fullWidth={true}>
    <MultiblockShape controller="industrialization_overdrive:pyrolyse_oven" />
</GameScene>
```

<Recipe id="industrialization_overdrive:machines/pyrolyse_oven/craft" />

Пиролизная печь — улучшенная версия [**коксовой печи**](../steam_age/coke_oven.md), работающая на электричестве вместо пара.

Она обрабатывает те же рецепты, что и коксовая печь, но поддерживает разгон, поэтому работает гораздо быстрее.

Кроме того, в зависимости от использованных при строительстве катушек она способна одновременно обрабатывать несколько копий одного рецепта — это называется пакетной обработкой.

И наконец, она перерабатывает древесину в древесный уголь в соотношении 4:5, попутно производя креозот, что тоже весьма полезно.
