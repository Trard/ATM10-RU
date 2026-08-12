// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create('mekanismgenerators:fission_reactor_logic_adapter')
	.scene('fission_mek_logic','Ядерный реактор Mekanism: логические адаптеры', 'kubejs:fission_logic_example',
		
	(scene, util) => {
		
			
			scene.world.showSection([0, 0, 2, 4, 4, 6], Facing.down);
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:reactor_glass', false);
            scene.idle(20);
			
			scene.text(60, 'Логические адаптеры позволяют управлять реакторами с помощью редстоуна.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(80)
			
			
			scene.text(60, 'Щёлкните ПКМ, чтобы открыть настройки', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.showControls(60, [2.5, 2.5, 2], 'down').rightClick();
			scene.idle(70);
			
			
			scene.text(80, 'С помощью двух адаптеров можно настроить аварийную защиту, которая отключит реактор при определённых условиях.', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:fission_reactor_logic_adapter', true);
            scene.idle(90);
			
			scene.text(60, 'Установите для этого адаптера режим «Включение»', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			scene.text(60, 'Для этого адаптера выберите режим «Критические повреждения».', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			scene.world.showSection([2, 0, 0], Facing.down);
			scene.idle(5);
			scene.world.showSection([2, 0, 1], Facing.down);
			scene.idle(5);
			scene.world.showSection([2, 1, 1], Facing.down);
			scene.idle(5);
			
			scene.text(60, 'При критических повреждениях реактора адаптер подаёт сигнал редстоуна.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(10);
			scene.idle(60);
			
			scene.world.setBlock([2, 2, 0], 'minecraft:gravel', false);
			//scene.world.modifyBlock([2, 3, 1], () => Block.id("minecraft:observer").with("facing", "north"), false);
			scene.world.showSection([2, 1, 0, 2, 3, 0], Facing.down);
			scene.world.showSection([2, 3, 1], Facing.down);
			scene.idle(20);
			
			scene.text(80, 'Этот сигнал можно подать на поршень с гравием или песком, чтобы привести в действие наблюдатель.', [2.5, 1.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(5);
			
			scene.world.modifyBlock([2, 1, 1], (curState) => curState.with("power", "15"), false);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("extended", "true"), false);
			scene.world.setBlock([2, 3, 0], 'minecraft:gravel', false);
			scene.world.setBlock([2, 2, 0], 'minecraft:piston_head', false);
			scene.world.modifyBlock([2, 2, 0], (curState) => curState.with("facing", "up"), false);
			scene.idle(90);
			
			scene.text(120, 'Этот наблюдатель направлен на гравий. Гравий приведёт его в действие, и реактор отключится.', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
			
			
			
			
				
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
