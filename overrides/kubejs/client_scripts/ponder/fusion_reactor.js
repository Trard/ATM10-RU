// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
	'mekanismgenerators:fusion_reactor_frame',
	'mekanismgenerators:fusion_reactor_port',
	'mekanismgenerators:fusion_reactor_controller',
	'mekanismgenerators:fusion_reactor_logic_adapter'
	])
	.scene('fusion_reactor','Термоядерный реактор Mekanism', 'kubejs:fusion_mek',
		
	(scene, util) => {
		
				
			scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
            scene.idle(10);
			
			scene.text(60, 'Термоядерный реактор способен вырабатывать миллионы RF за такт.', [0, 2.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(80)
			
			scene.text(60, 'Режим портов изменяется конфигуратором', [1.5, 2.5, 0]).placeNearTarget().attachKeyFrame();
			scene.showControls(60, [1.5, 3.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
			scene.idle(10);
			scene.world.modifyBlock([1, 2, 0], (curState) => curState.with("active", "true"), true);
			scene.idle(20);
			scene.world.modifyBlock([1, 2, 0], (curState) => curState.with("active", "false"), true);
			scene.idle(40);
			
			//hide front
			scene.world.hideSection([0, 0, 0, 4, 4, 3], Facing.up);
			scene.idle(10);
			
			scene.text(80, 'Каждая грань термоядерного реактора строится по этой схеме.', [2.5, 2, 4.5]).attachKeyFrame();
			scene.idle(90);
			
			//east face
			scene.world.showSection([4, 0, 0, 4, 4, 3], Facing.down);
			scene.idle(10);
			
			//power port
			scene.text(60, 'Для вывода энергии потребуется порт.', [4, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			//west face
			scene.world.showSection([0, 0, 0, 0, 4, 3], Facing.down);
			scene.idle(30);
			
			//Laser
			scene.text(60, 'Матрица лазерного фокуса используется для запуска реактора.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			//bottom face
			scene.world.showSection([1, 0, 0, 3, 0, 3], Facing.down);
			scene.idle(30);
			
			//top face
			scene.world.showSection([0, 4, 0, 3, 4, 3], Facing.down);
			scene.idle(30);
			
			//controller
			scene.text(60, 'Панель управления термоядерным реактором должна находиться в центре верхней грани.', [2.5, 4.5, 3.5]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			//north face
			scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.down);
			scene.idle(30);
			
			//fuel input
			
			scene.text(30, 'Для ввода дейтерия потребуется один из двух портов', [3.5, 2.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(40);
			scene.text(40, 'а второй — для трития.', [1.5, 2.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(50);
			

			


    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
