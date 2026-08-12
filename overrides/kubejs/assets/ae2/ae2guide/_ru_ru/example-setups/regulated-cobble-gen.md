---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автоматически регулируемый генератор булыжника
  icon: minecraft:cobblestone
---

# Автоматически регулируемый генератор булыжника

Автоматизировать генератор булыжника просто: направьте <ItemLink id="annihilation_plane" /> в обычный ванильный
ручной генератор. Но со временем булыжник заполнит всю сеть, поэтому требуется регулирование.

Из-за принципа работы плоскостей истребления (они действуют как <ItemLink id="import_bus" />) нельзя просто поставить
<ItemLink id="level_emitter" /> напротив <ItemLink id="export_bus" /> с <ItemLink id="redstone_card" />:
содержимое нельзя передать непосредственно от импорта к экспорту без промежуточного хранилища. Придётся действовать обходным путём.

<ItemLink id="toggle_bus" /> соединяет и разъединяет части сети по сигналу красного камня, но при каждом переключении
сеть перезагружается. Простое решение — установить переключающую шину в [подсети](../ae2-mechanics/subnetworks.md),
чтобы перезагружалась только она.

Автономная [подсеть](../ae2-mechanics/subnetworks.md) с <ItemLink id="annihilation_plane" /> и
<ItemLink id="storage_bus" /> может отправлять булыжник в <ItemLink id="interface" /> основной сети.
Переключающая шина будет соединять подсеть с <ItemLink id="quartz_fiber" /> и отключать от него, обесточивая плоскости.

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/regulated_cobble_gen.snbt" />

<BoxAnnotation color="#dddddd" min="3 2 2" max="7 2.3 3">
        (1) Плоскости истребления: интерфейса настроек нет; «Эффективность» и «Прочность» уменьшают энергопотребление.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 2 2" max="2.3 3 3">
        (2) Шина хранения: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 2.3 2" max="2.7 2.7 2.3">
        (3) Переключающая шина: крайне важно установить её в подсети, а не в основной сети.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 3 2.3" max="2.7 3.3 2.7">
        (4) Излучатель уровня: задан булыжник и нужное количество, выбран режим «Излучать ниже предела».
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 3" max="2 3 2">
        (5) Интерфейс: обычные настройки.
  </BoxAnnotation>

<DiamondAnnotation pos="0 2.5 1.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

<DiamondAnnotation pos="5 1.5 3.5" color="#00ff00">
        Затопленные ступени не дают воде растечься и превратить лаву в обсидиан.
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="annihilation_plane" /> (1) не имеют интерфейса и настроек, но «Эффективность» и «Прочность»
  уменьшают их энергопотребление.
* <ItemLink id="storage_bus" /> (2) имеет обычные настройки.
* <ItemLink id="toggle_bus" /> (3) должна находиться со стороны подсети относительно кварцевого волокна, а не основной сети,
  иначе основная сеть будет перезагружаться при каждом переключении.
* В <ItemLink id="level_emitter" /> (4) задан нужный предмет и количество, выбран режим «Излучать ниже предела».
* <ItemLink id="interface" /> (5) имеет обычные настройки.

## Принцип работы

1. Генератор создаёт булыжник.
2. <ItemLink id="annihilation_plane" /> разрушают булыжник.
3. <ItemLink id="storage_bus" /> помещает булыжник в <ItemLink id="interface" />, передавая его основной сети.
4. Когда количество булыжника в основной сети превышает заданное, <ItemLink id="level_emitter" /> перестаёт подавать сигнал,
   отключая <ItemLink id="toggle_bus" />.
5. Подсеть обесточивается, и плоскости прекращают работу.
