---
navigation:
  title: "Любите кокс?"
  icon: "modern_industrialization:coke_oven"
  position: 9
  parent: modern_industrialization:steam_age.md
item_ids:
  - modern_industrialization:coke_oven
  - modern_industrialization:bronze_item_input_hatch
  - modern_industrialization:bronze_item_output_hatch
  - modern_industrialization:bronze_fluid_input_hatch
  - modern_industrialization:bronze_fluid_output_hatch
---

# Любите кокс?

<GameScene zoom="3" interactive={true} fullWidth={true}>
    <MultiblockShape controller="coke_oven" />
</GameScene>

Освоив бронзовые машины, можно начинать путь к производству стали. Конечная цель — построить карьер, мультиблок, который будет добывать руду за вас!

Первый шаг — получить кокс, нагревая уголь без доступа кислорода. Для этого понадобится мультиблочная коксовая печь.

Для вашего первого мультиблока нужны сама коксовая печь, 21 блок кирпичей и 3 *люка*: предметный вход, предметный выход и жидкостный вход.

При желании добавьте жидкостный выход для сбора креозота.

<Recipe id="modern_industrialization:steam_age/fireclay/coke_oven" />



<Recipe id="modern_industrialization:hatches/bronze/item_input_hatch" />

<Recipe id="modern_industrialization:hatches/bronze/item_output_hatch" />



<Recipe id="modern_industrialization:hatches/bronze/fluid_input_hatch" />

<Recipe id="modern_industrialization:hatches/bronze/fluid_output_hatch" />

Блок коксовой печи играет роль *контроллера*. Каждый мультиблок управляется контроллером, однако обычно взаимодействовать с ним напрямую нельзя: все входные и выходные ресурсы проходят через люки. Жидкостный вход нужен потому, что печь работает на пару, предметный вход — для угля, а предметный выход — для кокса.

Дополнительно можно установить жидкостный выход для креозота. Креозот является вероятностным побочным продуктом, поэтому при отсутствии свободного места он будет уничтожен.

Если забыть любой из обязательных люков, коксовая печь не запустится!

**Возьмите в руку гаечный ключ, чтобы увидеть отсутствующие блоки и ошибки!** Также можно держать люк, чтобы узнать допустимые места его установки.

Для этого мультиблока нужен 21 блок кирпичей! В REI указано 24 блока всего, но 3 места займут люки, поэтому кирпичи нужны лишь для оставшегося 21 блока!

## Коксовая печь!

Люки можно размещать по-разному; ниже показан один из вариантов!

![](coke_oven.png)

Когда коксовая печь сообщит, что *форма верна*, заполните жидкостный вход паром, положите уголь в предметный вход — и всё готово!

Кокс крайне полезен для производства стали, но к тому же это мощное топливо. Он горит в 4 раза дольше угля!
