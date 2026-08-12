---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автопополнение с излучателем уровня
  icon: level_emitter
---

# Автопополнение с излучателем уровня

Как поддерживать определённый запас предмета, создавая новые по мере необходимости?

Одно из решений — использовать <ItemLink id="export_bus" />, <ItemLink id="level_emitter" /> и
<ItemLink id="crafting_card" /> для автоматического запроса у системы
[автоматического создания](../ae2-mechanics/autocrafting.md). Эта схема предназначена для большого запаса одного предмета.

Разумеется, сеть может создавать предмет непрерывно: для этого уберите излучатель уровня и карту красного камня.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/level_emitter_autostocking.snbt" />

  <BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (1) Шина экспорта: фильтр по нужному предмету, карта красного камня и карта создания. Режим красного камня —
        «Активна при сигнале», поведение создания — «Не использовать имеющиеся предметы».
        <Row><ItemImage id="redstone_card" scale="2" /> <ItemImage id="crafting_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0.7 1 0" max="1 2 1">
        (2) Излучатель уровня: задан нужный предмет и количество, выбран режим «Излучать ниже предела».
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (3) Интерфейс: обычные настройки.
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="export_bus" /> (1) отфильтрована по нужному предмету. В ней установлены
  <ItemLink id="redstone_card" /> и <ItemLink id="crafting_card" />. Для параметра «Режим красного камня»
  выбрано «Активна при сигнале», а для «Поведения создания» — «Не использовать имеющиеся предметы».
* В <ItemLink id="level_emitter" /> (2) указан нужный предмет и его количество, выбран режим «Излучать ниже предела».
* <ItemLink id="interface" /> (3) имеет обычные настройки.

## Принцип работы

1. Если количество нужного предмета в [сетевом хранилище](../ae2-mechanics/import-export-storage.md) ниже заданного
   в <ItemLink id="level_emitter" />, излучатель подаёт сигнал красного камня.
2. Получив сигнал, благодаря <ItemLink id="crafting_card" /> и запрету использовать имеющийся запас
   <ItemLink id="export_bus" /> просит систему [автоматического создания](../ae2-mechanics/autocrafting.md) изготовить ещё предметов,
   после чего экспортирует их.
3. Когда предмет поступает в <ItemLink id="interface" />, не настроенный на хранение чего-либо во внутреннем инвентаре,
   интерфейс передаёт его в сетевое хранилище.
