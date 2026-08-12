---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: Выращивание истинного кварца
  icon: quartz_cluster
---

# Выращивание истинного кварца

## По сути, скопировано со страницы начала работы

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/budding_certus_1.snbt" />
</GameScene>

Как и у аметиста, на [цветущих блоках истинного кварца](../items-blocks-machines/budding_certus.md) появляются почки.
Если разрушить ещё не выросшую почку, из неё всегда выпадет одна <ItemLink id="certus_quartz_dust" />, независимо от «Удачи».
Полностью выросшее скопление даёт четыре <ItemLink id="certus_quartz_crystal" />, а «Удача» увеличивает это количество.

Существует четыре уровня цветущих блоков истинного кварца: безупречный, несовершенный, потресканный и повреждённый.
Изначально их можно найти в [метеоритах](../ae2-mechanics/meteorites.md).

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/budding_blocks.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

При каждом переходе почки на следующую стадию роста цветущий блок может потерять один уровень качества и в конце концов
превратиться в обычный блок истинного кварца. Цветущие блоки можно чинить, а обычные — превращать в цветущие:
бросьте соответствующий блок в воду вместе с одним или несколькими <ItemLink id="charged_certus_quartz_crystal" />.

<RecipeFor id="damaged_budding_quartz" />

Безупречные цветущие блоки не портятся и могут производить истинный кварц бесконечно. Однако их нельзя создать или перенести
киркой даже с «Шёлковым касанием» (зато их *можно* переместить с помощью [пространственного хранилища](../ae2-mechanics/spatial-io.md)).

Сами по себе почки истинного кварца растут очень медленно. К счастью, <ItemLink id="growth_accelerator" />,
установленный рядом с цветущим блоком, многократно ускоряет процесс. Постройте несколько ускорителей в первую очередь.

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/budding_certus_2.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Из-за сложного взаимодействия каждая закрытая сторона цветущего блока уменьшает его суммарную скорость роста.
В какой-то момент это перевешивает пользу от дополнительных ускорителей. Практические испытания дали следующие результаты:

![Предметов в минуту при разных соотношениях](../assets/diagrams/certus_farm_speed_chart_1.png)

![Распространённые схемы](../assets/diagrams/certus_farm_speed_chart_2.png)

Если кварца не хватает ещё и на <ItemLink id="energy_acceptor" /> либо <ItemLink id="vibration_chamber" />,
создайте <ItemLink id="crank" /> и прикрепите его к торцу ускорителя.

Автоматический сбор истинного кварца [описан здесь](../example-setups/simple-certus-farm.md).
