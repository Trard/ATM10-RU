---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автоматическое обогащение руды «Удачей»
  icon: minecraft:raw_iron
---

# Автоматическое обогащение руды «Удачей»

<ItemLink id="annihilation_plane" /> можно зачаровать любыми чарами для кирки, включая «Удачу». Очевидное применение —
зачаровать несколько плоскостей, после чего <ItemLink id="formation_plane" /> и <ItemLink id="annihilation_plane" />
будут быстро устанавливать и разрушать руду.

Учтите, что <ItemLink id="import_bus" /> постепенно «разгоняется»: схема начнёт медленно и достигнет полной скорости
через несколько секунд.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/ore_fortuner.snbt" />

  <BoxAnnotation color="#dddddd" min="2.7 0 2" max="3 1 3">
        (1) Шина импорта: установлено несколько карт ускорения.
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 0 2" max="2 1 2.3">
        (2) Плоскости формирования: обычные настройки.
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 0 0.7" max="2 1 1">
        (3) Плоскости истребления: интерфейса настроек нет, зачарованы на «Удачу».
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 0 0" max="3 1 1">
        (4) Шина хранения: обычные настройки.
  </BoxAnnotation>

<DiamondAnnotation pos="3.5 0.5 2.5" color="#00ff00">
        Вход
    </DiamondAnnotation>

<DiamondAnnotation pos="3.5 0.5 0.5" color="#00ff00">
        Выход
    </DiamondAnnotation>

<DiamondAnnotation pos="4 0.5 1.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

*   В <ItemLink id="import_bus" /> (1) установлено несколько <ItemLink id="speed_card" />. Чем больше плоскостей
    формирования в конструкции, тем больше карт требуется: они позволяют шине одновременно забирать больше предметов.
*   <ItemLink id="formation_plane" /> (2) имеют обычные настройки.
*   <ItemLink id="annihilation_plane" /> (3) не имеют интерфейса и настроек, но зачарованы на «Удачу».
*   <ItemLink id="storage_bus" /> (4) имеет обычные настройки.

## Принцип работы

1.  <ItemLink id="import_bus" /> зелёной подсети импортирует блоки из первой бочки
    в [сетевое хранилище](../ae2-mechanics/import-export-storage.md).
2.  Единственное хранилище зелёной подсети — <ItemLink id="formation_plane" />, которая устанавливает блоки.
3.  <ItemLink id="annihilation_plane" /> оранжевой подсети разрушает блоки, применяя к ним «Удачу».
4.  <ItemLink id="storage_bus" /> оранжевой подсети помещает результаты во вторую бочку.
