---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Зарядник
  icon: charger
  position: 310
categories:
- machines
item_ids:
- ae2:charger
---

# Зарядник

<BlockImage id="charger" scale="8" />

Зарядник позволяет заряжать поддерживаемые инструменты и <ItemLink id="certus_quartz_crystal" />.

Энергию можно подвести сверху или снизу — через [кабели](cables.md) AE2 либо энергетические кабели других модов. Устройство
принимает как энергию AE2 (AE), так и Forge Energy (FE). Предметы можно помещать и извлекать с любой стороны. Извлечь можно
только результат, поэтому фильтр, защищающий обычные кристаллы истинного кварца от преждевременного извлечения, не нужен.
Зарядник можно повернуть <ItemLink id="certus_quartz_wrench" />, чтобы упростить автоматизацию.

С его помощью можно получить <ItemLink id="charged_certus_quartz_crystal" /> из <ItemLink id="certus_quartz_crystal" />
и <ItemLink id="meteorite_compass" /> из <ItemLink id="minecraft:compass" />.

Для ручной подачи энергии установите <ItemLink id="crank" /> сверху или снизу и щёлкайте по нему правой кнопкой мыши,
пока предмет не зарядится.

Зарядник также служит рабочим местом для [исследователя флюикса](fluix_researcher.md).

## Простая автоматизация

Например, возможность поворачивать зарядник позволяет частично автоматизировать его следующим образом:

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/charger_hopper.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Рецепт

<RecipeFor id="charger" />
