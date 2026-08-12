---
navigation:
  parent: example-setups/example-setups-index.md
  title: Ферма аметиста
  icon: minecraft:amethyst_shard
---

# Выращивание аметиста

Хотя <ItemLink id="growth_accelerator" /> действует на аметист, обычный способ фильтрации
[почек истинного кварца](../items-blocks-machines/budding_certus.md) с помощью <ItemLink id="annihilation_plane" />
для аметиста не работает. Незрелые почки истинного кварца дают <ItemLink id="certus_quartz_dust" />, а незрелые
аметистовые почки не дают ничего. Поэтому плоскость истребления всегда может их разрушить: сеть всегда способна сохранить «ничего».

Решение — зачаровать плоскость истребления на «Шёлковое касание». Тогда незрелые почки *дают* предметы
(соответствующие блоки разных стадий роста), и их уже можно отфильтровать.

Затем <ItemLink id="minecraft:amethyst_cluster" /> необходимо снова установить с помощью
<ItemLink id="formation_plane" /> и разрушить <ItemLink id="annihilation_plane" /> без «Шёлкового касания»,
чтобы получить <ItemLink id="minecraft:amethyst_shard" />.

Из-за направления скопления непосредственно напротив плоскости формирования должна находиться цельная грань блока.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/amethyst_farm.snbt" />

  <BoxAnnotation color="#dddddd" min="2.7 1 1" max="3 2 2">
        (1) Плоскость истребления № 1: интерфейса настроек нет, зачарована на «Шёлковое касание».
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 1 1" max="2.3 2 2">
        (2) Плоскость формирования: фильтр по скоплениям аметиста.
        <ItemImage id="minecraft:amethyst_cluster" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 0.7 1" max="2 1 2">
        (3) Плоскость истребления № 2: интерфейса настроек нет, можно зачаровать на «Удачу».
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 0 1" max="1.3 1 2">
        (4) Шина хранения № 1: фильтр по осколкам аметиста.
        <ItemImage id="minecraft:amethyst_shard" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 0 .7" max="1 1 1">
        (5) Шина хранения № 2: фильтр по осколкам аметиста, приоритет выше основного хранилища.
        <ItemImage id="minecraft:amethyst_shard" scale="2" />
  </BoxAnnotation>

<DiamondAnnotation pos="0 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* Первая <ItemLink id="annihilation_plane" /> (1) не имеет интерфейса и настроек, но должна быть зачарована на «Шёлковое касание».
* <ItemLink id="formation_plane" /> (2) отфильтрована по <ItemLink id="minecraft:amethyst_cluster" />.
* Вторая <ItemLink id="annihilation_plane" /> (3) не имеет интерфейса и настроек, но её можно зачаровать на «Удачу».
* Первая <ItemLink id="storage_bus" /> (4) отфильтрована по <ItemLink id="minecraft:amethyst_shard" />.
* Вторая <ItemLink id="storage_bus" /> (5) отфильтрована по <ItemLink id="minecraft:amethyst_shard" />, а её
  [приоритет](../ae2-mechanics/import-export-storage.md#storage-priority) выше приоритета основного хранилища.

## Принцип работы

1. Первая <ItemLink id="annihilation_plane" /> пытается разрушить блок перед собой, но способна разрушить лишь
   <ItemLink id="minecraft:amethyst_cluster" />: единственное хранилище подсети — отфильтрованная по скоплениям
   аметиста <ItemLink id="formation_plane" />. Это работает лишь благодаря «Шёлковому касанию», иначе плоскость
   смогла бы разрушать и незрелые почки, поскольку из них ничего не выпадает.
2. <ItemLink id="formation_plane" /> устанавливает скопление на противоположный блок.
3. Вторая <ItemLink id="annihilation_plane" /> разрушает скопление, получая <ItemLink id="minecraft:amethyst_shard" />.
4. Первая <ItemLink id="storage_bus" /> помещает осколки в бочку. Строго говоря, фильтр здесь не нужен,
   поскольку вторая плоскость должна встречать только полностью выросшие скопления.
5. Вторая <ItemLink id="storage_bus" /> открывает основной сети доступ ко всем осколкам в бочке.
   Благодаря высокому [приоритету](../ae2-mechanics/import-export-storage.md#storage-priority) осколки
   предпочтительно возвращаются в бочку, а не в основное хранилище.
