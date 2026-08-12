---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автоматизация зарядника
  icon: charger
---

# Автоматизация зарядника

Поскольку здесь используется <ItemLink id="pattern_provider" />, схема предназначена для интеграции с системой
[автоматического создания](../ae2-mechanics/autocrafting.md). Для автономной автоматизации
<ItemLink id="charger" /> достаточно воронок, сундуков и подобных блоков.

Автоматизировать <ItemLink id="charger" /> довольно просто. <ItemLink id="pattern_provider" /> отправляет ингредиент
в зарядник, после чего [подсеть-труба](pipe-subnet.md) или другая предметная труба возвращает результат поставщику.

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/charger_automation.snbt" />

<BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (1) Поставщик шаблонов: обычные настройки и нужные шаблоны обработки. Также снабжает зарядник энергией.

        ![Шаблон зарядника](../assets/diagrams/charger_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 0" max="1 1.3 1">
        (2) Шина импорта: обычные настройки.
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (3) Шина хранения: обычные настройки.
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="pattern_provider" /> (1) имеет обычные настройки и нужные <ItemLink id="processing_pattern" />.
  Кроме того, он снабжает <ItemLink id="charger" /> [энергией](../ae2-mechanics/energy.md), поскольку действует
  подобно [кабелю](../items-blocks-machines/cables.md).
  
    ![Шаблон зарядника](../assets/diagrams/charger_pattern.png)

* <ItemLink id="import_bus" /> (2) имеет обычные настройки.
* <ItemLink id="storage_bus" /> (3) имеет обычные настройки.

## Принцип работы

1. <ItemLink id="pattern_provider" /> отправляет ингредиенты в <ItemLink id="charger" />.
2. Зарядник выполняет зарядку.
3. <ItemLink id="import_bus" /> зелёной подсети забирает результат из зарядника и пытается сохранить его
   в [сетевом хранилище](../ae2-mechanics/import-export-storage.md).
4. Единственное хранилище зелёной подсети — <ItemLink id="storage_bus" />. Она помещает полученные предметы
   в поставщик шаблонов, возвращая их основной сети.
