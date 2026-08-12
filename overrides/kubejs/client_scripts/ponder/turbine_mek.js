// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
	'mekanismgenerators:turbine_casing',
	'mekanismgenerators:turbine_valve',
	'mekanismgenerators:turbine_vent',
	'mekanismgenerators:turbine_rotor',
	'mekanismgenerators:turbine_blade',
	'mekanismgenerators:rotational_complex',
	'mekanismgenerators:saturating_condenser',
	'mekanism:pressure_disperser',
	'mekanismgenerators:electromagnetic_coil',
	])
	.scene('turbine_mek','Mekanism: промышленная турбина', 'kubejs:turbine_mek',
		
	(scene, util) => {
		
				
			scene.showStructure();
            scene.idle(5);

			scene.text(60, 'Промышленная турбина вырабатывает энергию из нагретого теплоносителя.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.text(60, 'Рёбра должны состоять из обшивки турбины.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.text(60, 'Грани могут состоять из обшивки турбины, структурного стекла, клапанов или вентилей.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.text(60, 'Клапаны турбины вводят пар или выводят энергию.', [0, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);

			//hide top
			scene.world.hideSection([0, 4, 0, 4, 6, 4], Facing.up);
			scene.idle(5);	
			
			//hide walls
			scene.world.hideSection([0, 4, 0, 4, 6, 4], Facing.up);
			scene.world.hideSection([0, 1, 0, 3, 6, 0], Facing.up);
			scene.world.hideSection([0, 1, 0, 0, 6, 3], Facing.up);
			scene.idle(10);	
			
			//Turbine Rotor
			
			scene.text(80, 'Роторы турбины должны находиться в центре. На каждый ротор устанавливаются две лопасти.', [2, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			//show next layer
			scene.world.showSection([2, 4, 2], Facing.up);
			scene.idle(10);	
			
			scene.text(80, 'Вращательный комплекс должен находиться над ротором турбины.', [2, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			scene.world.showSection([1, 4, 1, 3, 4, 1], Facing.up);
			scene.world.showSection([3, 4, 2], Facing.up);
			scene.world.showSection([1, 4, 2], Facing.up);
			scene.world.showSection([1, 4, 3, 3, 4, 3], Facing.up);
			scene.idle(10);	
			
			scene.text(80, 'Рассеиватели давления должны заполнить весь слой вокруг вращательного комплекса.', [1, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			//Show Layer Vents
			
			scene.world.showSection([0, 4, 0, 4, 4, 0], Facing.up);
			scene.world.showSection([0, 4, 4, 4, 4, 4], Facing.up);
			scene.world.showSection([0, 4, 1, 0, 4, 3], Facing.up);
			scene.world.showSection([4, 4, 0, 4, 4, 4], Facing.up);
			
			scene.world.showSection([0, 1, 0, 3, 3, 0], Facing.up);
			scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.up);
			
			scene.text(120, 'Начиная с этого слоя, на внешних гранях можно устанавливать вентили турбины. Через них также выводится вода.', [0, 4.5, 3.5]).placeNearTarget().attachKeyFrame();
			scene.idle(125);
			
			//Show Electromagnetic Coil
			
			scene.world.showSection([2, 5, 2], Facing.up);
			scene.idle(5);
			
			scene.text(60, 'Электромагнитные катушки размещаются над вращательным комплексом.', [2, 5.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.world.setBlock([2, 5, 1], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([1, 5, 2], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([2, 5, 3], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([3, 5, 2], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.showSection([2, 5, 1], Facing.up);
			scene.world.showSection([1, 5, 2], Facing.up);
			scene.world.showSection([2, 5, 3], Facing.up);
			scene.world.showSection([3, 5, 2], Facing.up);
			scene.idle(10);
						
			scene.text(100, 'Можно установить не более пяти катушек. Они должны соприкасаться друг с другом или с вращательным комплексом.', [2, 5.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(105);
			
			//Saturating Condensers
			
			scene.world.showSection([3, 5, 3], Facing.up);
			scene.world.showSection([1, 5, 1], Facing.up);
			scene.world.showSection([1, 5, 3], Facing.up);
			scene.world.showSection([3, 5, 1], Facing.up);
			
			scene.text(120, 'Насыщающие конденсаторы превращают пар обратно в воду. Они необязательны, но должны находиться на уровне катушек или выше.', [1, 5.5, 1.5]).placeNearTarget().attachKeyFrame();
			scene.idle(130);
			
			//Show other layers
			
			scene.world.showSection([0, 5, 0, 4, 5, 0], Facing.up);
			scene.world.showSection([0, 5, 4, 4, 5, 4], Facing.up);
			scene.world.showSection([0, 5, 1, 0, 5, 3], Facing.up);
			scene.world.showSection([4, 5, 0, 4, 5, 3], Facing.up);
			scene.idle(5);
			
			scene.world.showSection([0, 6, 0, 4, 6, 4], Facing.up);
			scene.idle(20);
			
			scene.world.hideSection([1, 6, 1, 3, 6, 3], Facing.up);
			scene.idle(15);
			scene.world.setBlock([1, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([1, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([1, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.idle(10);
			
			scene.world.showSection([1, 6, 1, 3, 6, 3], Facing.down);
			scene.idle(10);
			
			scene.text(80, 'При необходимости верхнюю грань можно заменить вентилями турбины.', [2.5, 6.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
