// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    // ##### Gear #####

    //Mekasuit
    allthemods.add(/mekanism:mekasuit_/, [
        Text.red('Повышенное энергопотребление!'),
        Text.green('Увеличенная энергоёмкость')
    ])
    //Meka Tool
    allthemods.add('mekanism:meka_tool', [
        Text.red('Повышенное энергопотребление!'),
        Text.green('Увеличенная энергоёмкость!'),
        Text.green('Повышенная скорость атаки и урон!')
    ])

    // ##### Generators #####

    //Solar Generator
    allthemods.add('mekanismgenerators:solar_generator', [
        Text.green('Увеличенная энергоёмкость и выработка!')
    ])
    //Advanced Solar Generator
    allthemods.add('mekanismgenerators:advanced_solar_generator', [
        Text.green('Увеличенная энергоёмкость и выработка!')
    ])
    //Wind Generator
    allthemods.add('mekanismgenerators:wind_generator', [
        Text.green('Увеличенная энергоёмкость и выработка!')
    ])
    //Heat Generator
    allthemods.add('mekanismgenerators:heat_generator', [
        Text.green('Увеличенная энергоёмкость и выработка!')
    ])
    //Gas Burning Generator
    allthemods.add('mekanismgenerators:gas_burning_generator', [
        Text.red('Сниженная выработка энергии!'),
        Text.red('Повышенный расход топлива!')
    ])
    //Fission Generator
    allthemods.add(/mekanismgenerators:fission_/, [
        Text.red('Сниженная выработка энергии!'),
    ])
    //Fusion Generator
    allthemods.add(/mekanismgenerators:fusion_/, [
        Text.red('Сниженная выработка энергии!'),
        Text.green('Сниженный расход топлива!'),
    ])
    //Turbine
    allthemods.add(/mekanismgenerators:turbine_/, [
        Text.green('Повышенная скорость производства!'),
    ])
    //Boiler
    allthemods.add(/mekanism:boiler_/, [
        Text.green('Повышенная скорость производства!'),
    ])

    // ##### Machines #####

    //Upgrades
    allthemods.add(/mekanism:upgrade_/, [
        Text.green('Усиленное ускорение механизмов!')
    ])
    //Waste Barrel
    allthemods.add('mekanism:radioactive_waste_barrel', [
        Text.green('Повышенная скорость распада!')
    ])
    //Thermal Evaporation Tower
    allthemods.add(/mekanism:thermal_evaporation_/, [
        Text.green('Повышенная скорость производства!')
    ])
    //Solar Neutron Activator
    allthemods.add('mekanism:solar_neutron_activator', [
        Text.green('Повышенная скорость производства!'),
        Text.green('Отходы -> усиленная выработка полония!')
    ])
    //Isotopic Centrifuge
    allthemods.add('mekanism:isotopic_centrifuge', [
        Text.green('Отходы -> усиленная выработка плутония!')
    ])
    //Electric Pump
    allthemods.add('mekanism:electric_pump', [
        Text.green('Повышенная скорость производства!')
    ])
    //SPS
    allthemods.add(/mekanism:sps_/, [
        Text.green('Сниженное энергопотребление!')
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
