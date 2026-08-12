// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.of('§7Для добычи требуется как минимум незеритовый инструмент'),
        Text.of('§6Встречается в биоме Тёмных глубин и всегда выходит на поверхность пещер'),
        Text.of('§6Также встречается в глубинносланцевом слое Шахтёрского измерения')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.of('§7Для добычи требуется как минимум всемодиевый инструмент'),
        Text.of('§bВстречается в любом биоме Незера'),
        Text.of('§bТакже встречается в Ином измерении')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.of('§7Для добычи требуется как минимум вибраниумный инструмент'),
        Text.of('§dВстречается на возвышенностях Края')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.of("§7§oТеперь она менее... разговорчивая")
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.of("§7§oТеперь она менее... разговорчивая")
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.of("§7§oТеперь она менее... разговорчивая")
    ])

    allthemods.add('allthemodium:allthemodium_ingot',[
        Text.of("§7§oЭто не те слитки, которые вы ищете"),
        Text.of("§6Ищите [тихую всемодиевую пластину]")
    ])
    allthemods.add('allthemodium:vibranium_ingot',[
        Text.of("§7§oЭто не те слитки, которые вы ищете"),
        Text.of("§6Ищите [тихую вибраниумную пластину]")
    ])
    allthemods.add('allthemodium:unobtainium_ingot',[
        Text.of("§7§oЭто не те слитки, которые вы ищете"),
        Text.of("§6Ищите [тихую унобтаниумную пластину]")
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.of('§6Встречается в подозрительной глине в древних городах')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.of('§bВстречается в подозрительном песке душ в бастионах')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.of('§dВыпадает из испытательного спаунера в библиотеке подземелья Иного измерения')
    ])

    //Forbidden Arcanus
    allthemods.add('forbidden_arcanus:hephaestus_forge_tier_1',[
        Text.of("§c§lShift-ПКМ§r§c по §c§lкузнечному столу§r§c, держа §lпыль Мундабитура"),
        Text.of("§c█ = Позолоченный резной полированный тёмный камень с кузнечным столом сверху"),
        Text.of("§7█ = Полированный тёмный камень"),
        Text.of("§5█§7 = Позолоченный резной полированный тёмный камень"),
        Text.of("§6█§7 = Резной мистический полированный тёмный камень"),
        Text.of("§0███§7███§0███"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§7████§6█§7████"),
        Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
        Text.of("§7████§6█§7████"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0███§7███§0███")

    ])
    allthemods.add('forbidden_arcanus:clibano_core',[
        Text.of("§c§lShift-ПКМ§r§c по §c§lядру Клибано§r§c, держа §c§lпыль Мундабитура"),
        Text.of("§5█§7 = Полированный тёмный камень"),
        Text.of("§7█ = Кирпичи из полированного тёмного камня"),
        Text.of("§6█§7 = Ядро Клибано"),
        Text.of("§7Справа налево -> снизу вверх"),
        Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
        Text.of("§7███§0█§7█§0█§7█§0█§7███"),
        Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█"),
    ])
    allthemods.add('forbidden_arcanus:growing_edelwood',[
        Text.of("§4Можно приобрести у странствующего торговца"),
        Text.of("§4Или получить, применив порченую душу к саженцу дуба"),
    ])
    allthemods.add('forbidden_arcanus:magnetized_darkstone_pedestal',[
        Text.of("§7Примените ферромагнитную смесь к пьедесталу из тёмного камня"),
    ])
    allthemods.add('forbidden_arcanus:soul',[
        Text.of("§7Примените экстрактор душ к песку душ"),
        Text.of("§7Изредка появляется в мире"),
    ])
    allthemods.add('forbidden_arcanus:enchanted_soul',[
        Text.of("§7Примените взрывную бутылку Ореала к обычной душе")
    ])
    allthemods.add('forbidden_arcanus:corrupt_soul',[
        Text.of("§7Изредка появляется при убийстве мобов")
    ])
    allthemods.add('forbidden_arcanus:blood_test_tube',[
        Text.of("§7Держите пробирку во второй руке и убивайте мобов")
    ])
    allthemods.add('forbidden_arcanus:xpetrified_orb',[
        Text.of("§7Можно получить только из чёрной дыры"),
        Text.of("§7Чтобы создать чёрную дыру, бросьте вместе на землю тёмную материю и пыль Коррупти"),
        Text.of("§7Накормите её достаточным количеством опыта, чтобы она выплюнула окаменевшую сферу опыта")
    ])
    allthemods.add('forbidden_arcanus:dragon_scale',[
        Text.of("§7Выпадает из дракона Края")
    ])
    allthemods.add('forbidden_arcanus:stella_arcanum',[
        Text.of("§7Крайне редко встречается между Y -44 и Y 42"),
        Text.of("§cВзорвётся при добыче!")
    ])
    allthemods.add(/forbidden_arcanus:runic_[sd]/,[
        Text.of("§7Встречается от дна мира до Y 2"),
    ])
    allthemods.add(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'],[
        Text.of("§7Крайне редко встречается между Y -40 и Y 14"),
        Text.of("§7Чаще всего встречается на Y -13")
    ])
    allthemods.add('forbidden_arcanus:artisan_relic',[
        Text.of("§aВстречается в деревенских домах бронника, инструментальщика или оружейника"),
    ])
    allthemods.add('forbidden_arcanus:crescent_moon',[
        Text.of("§cНевозможно получить"),
    ])
    allthemods.add('forbidden_arcanus:crimson_stone',[
        Text.of("§aВстречается на аванпостах разбойников"),
    ])
    allthemods.add('forbidden_arcanus:soul_crimson_stone',[
        Text.of("§cПосле одного применения превратится в багровый камень"),
    ])
    allthemods.add('forbidden_arcanus:elementarium',[
        Text.of("§aВстречается в храмах в джунглях, пустынных пирамидах и подводных руинах"),
    ])
    allthemods.add('forbidden_arcanus:divine_pact',[
        Text.of("§aВстречается в деревне и пирамиде Иного измерения"),
    ])
    allthemods.add('forbidden_arcanus:maledictus_pact',[
        Text.of("§aВстречается в бастионах с сокровищницей"),
    ])

    //Mystical Agriculture
    allthemods.add(/mysticalagriculture:.*watering_can/,[
        Text.of("§cНе работает с подставными игроками"),
        Text.of("§c(Например, с блоками Modular Routers, кликерами и подобными)")
    ])

    allthemods.add('toolbelt:belt', [
        Text.of("§7Помещается в отдельный слот"),
        Text.of("§7Проверьте назначение клавиши \"Открыть инвентарь пояса\"")
    ])

	//Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§aЩёлкните ПКМ с блоком рабочего места, чтобы поместить его внутрь и разрешить пополнение сделок")
    ])

	//Hyperbox
    if (Platform.isLoaded("hyperbox")) {
        allthemods.add('hyperbox:hyperbox', [
            Text.of("§aЭтот мод будет удалён в версии 6.0+")
        ])
    }

    //Eternal Starlight
    if (Platform.isLoaded("eternal_starlight")) {
        allthemods.add('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]', [
            Text.of('Этот мешок с добычей получен из \"Лунного чудовища\".')
        ])
    }

    if (Platform.isLoaded('modular_machinery_reborn')) {
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_crucible"]', [
            Text.of('§cВНИМАНИЕ, этот механизм устарел.'),
            Text.of('Преобразуйте его в новую версию на верстаке.')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_star_altar"]', [
            Text.of('§cВНИМАНИЕ, этот механизм устарел.'),
            Text.of('Преобразуйте его в новую версию на верстаке.')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_enchanter"]', [
            Text.of('§cВНИМАНИЕ, этот механизм устарел.'),
            Text.of('Преобразуйте его в новую версию на верстаке.')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:auto_hepheastus_forge"]', [
            Text.of('§cВНИМАНИЕ, этот механизм устарел.'),
            Text.of('Преобразуйте его в новую версию на верстаке.')
        ])
    }
	// Apotheosis Gateway Warning
	allthemods.add([
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/frontier"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/ascent"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/summit"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/pinnacle"]'],
	[
		Text.of("§cВНИМАНИЕ: на третьей волне схлопнется за пределами следующих измерений:"),
		Text.of("§cОбычный мир, Незер, Край, Сумеречный лес")
	])
	// Botany Pot Sculk
	allthemods.add([
	"minecraft:sculk",
	"minecraft:sculk_sensor",
	"minecraft:sculk_catalyst",
	"minecraft:sculk_vein",
	"minecraft:sculk_shrieker",
	"deeperdarker:gloomy_sculk",
	"deeperdarker:gloomy_grass",
	"deeperdarker:glowing_flowers",
	"deeperdarker:sculk_vines",
	"deeperdarker:glowing_roots",
	"deeperdarker:bloom_berries",
	"deeperdarker:glowing_grass",
	"deeperdarker:sculk_tendrils"],
	[
		Text.of("§9В ботаническом горшке: для сбора нужна мотыга с чарами «Шёлковое касание»")
	])
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
