---
navigation:
  parent: example-setups/example-setups-index.md
  title: Простая ферма истинного кварца
  icon: certus_quartz_crystal
  position: 110
---

# Простая ферма истинного кварца

Как сказано в разделе [о выращивании истинного кварца](../ae2-mechanics/certus-growth.md), для автоматического сбора
<ItemLink id="certus_quartz_crystal" /> используются <ItemLink id="annihilation_plane" /> и
<ItemLink id="storage_bus" />. <ItemLink id="growth_accelerator" /> многократно ускоряет рост почек,
после чего плоскости разрушают зрелое <ItemLink id="quartz_cluster" />. Фильтрация опирается на удачное свойство:
незрелые почки истинного кварца дают <ItemLink id="certus_quartz_dust" />, а не остаются без добычи.

С <ItemLink id="flawless_budding_quartz" /> ферма работает полностью автоматически. Несовершенный, потресканный
и повреждённый цветущий истинный кварц придётся заменять вручную либо автоматически, как описано в разделах
[«Полуавтоматическая ферма»](semiauto-certus-farm.md) и [«Продвинутая ферма»](advanced-certus-farm.md).

Примерную скорость см. в разделе [«Выращивание истинного кварца»](../ae2-mechanics/certus-growth.md).

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/simple_certus_farm.snbt" />

  <BoxAnnotation color="#dddddd" min="3.7 1 1" max="4 2 2">
        (1) Плоскость истребления: интерфейса настроек нет, можно зачаровать на «Удачу».
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 1 1" max="3.3 2 2">
        (2) Шина хранения № 1: фильтр по кристаллам истинного кварца.
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 1 .7" max="2 2 1">
        (3) Шина хранения № 2: фильтр по кристаллам истинного кварца, приоритет выше основного хранилища.
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

<DiamondAnnotation pos="1 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="annihilation_plane" /> (1) не имеет интерфейса и настроек, но её можно зачаровать на «Удачу».
* Первая <ItemLink id="storage_bus" /> (2) отфильтрована по <ItemLink id="certus_quartz_crystal" />.
* Вторая <ItemLink id="storage_bus" /> (3) отфильтрована по <ItemLink id="certus_quartz_crystal" />, а её
  [приоритет](../ae2-mechanics/import-export-storage.md#storage-priority) выше приоритета основного хранилища.

## Принцип работы

1. <ItemLink id="annihilation_plane" /> пытается разрушить блок перед собой, но способна разрушить лишь
   <ItemLink id="quartz_cluster" />: единственное хранилище подсети — <ItemLink id="storage_bus" />,
   отфильтрованная по <ItemLink id="certus_quartz_crystal" />.
4. Первая <ItemLink id="storage_bus" /> помещает кристаллы истинного кварца в бочку.
5. Вторая <ItemLink id="storage_bus" /> открывает основной сети доступ ко всем кристаллам в бочке.
   Благодаря высокому [приоритету](../ae2-mechanics/import-export-storage.md#storage-priority) кристаллы
   предпочтительно возвращаются в бочку, а не в основное хранилище.
