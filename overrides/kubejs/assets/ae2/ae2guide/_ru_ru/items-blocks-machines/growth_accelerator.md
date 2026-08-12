---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Ускоритель роста
  icon: growth_accelerator
  position: 310
categories:
- machines
item_ids:
- ae2:growth_accelerator
---

# Ускоритель роста

<BlockImage id="growth_accelerator" p:powered="true" scale="8"/>

Ускоритель роста чрезвычайно ускоряет [рост](../ae2-mechanics/certus-growth.md) истинного кварца или аметиста, если установлен рядом с цветущим блоком.

Что любопытно, он *также* ускоряет рост различных растений.

Для этого ускоритель применяет к соседним блокам «случайные такты» сверх тех, что происходят естественным образом.
Теоретически 1 ускоритель должен увеличивать скорость роста примерно в ~90x, а эффекты нескольких устройств складываются.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/growth_accelerator.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Энергию можно подвести сверху или снизу — через [кабели](cables.md) AE2 либо энергетические кабели других модов.
Устройство принимает как энергию AE2 (AE), так и Forge Energy (FE).

Для ручной подачи энергии установите <ItemLink id="crank" /> сверху или снизу и щёлкайте по нему правой кнопкой мыши.

Верх и низ можно узнать по розовым выступающим деталям потока на них.

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/accelerator_connections.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Рецепт

<RecipeFor id="growth_accelerator" />
