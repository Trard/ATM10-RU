---
navigation:
  parent: example-setups/example-setups-index.md
  title: Автопополнение через интерфейсы
  icon: interface
---

# Автопополнение через интерфейсы

Возникает вопрос: «Как поддерживать определённый запас разных предметов, создавая новые по мере необходимости?»

Одно из решений — использовать <ItemLink id="interface" /> и <ItemLink id="crafting_card" />, чтобы автоматически
запрашивать предметы у системы [автоматического создания](../ae2-mechanics/autocrafting.md).
Эта схема лучше подходит для поддержания небольшого количества множества разных предметов.

Демонстрационная конструкция укорочена, чтобы не быть слишком широкой. Вероятно, оптимальнее установить 4
<ItemLink id="interface" /> и 4 <ItemLink id="storage_bus" />, задействовав все 8
[каналов](../ae2-mechanics/channels.md) обычного [кабеля](../items-blocks-machines/cables.md).

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_autostocking.snbt" />

<BoxAnnotation color="#dddddd" min="0 0 0" max="2 1 1">
        (1) Интерфейсы: настроены на хранение нужных предметов. В них установлены карты создания.
        <ItemImage id="crafting_card" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 0" max="2 1.3 1">
        (2) Шины хранения: режим ввода-вывода установлен на «Только извлечение».
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        К основной сети
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## Настройки

* <ItemLink id="interface" /> (1) настроены на хранение нужных предметов. Нажмите нужным предметом по верхнему слоту
   либо перетащите его туда из JEI, затем нажмите значок гаечного ключа над слотами и задайте количество.
   В интерфейсах установлены <ItemLink id="crafting_card" />.
* Для <ItemLink id="storage_bus" /> (2) параметр «Режим ввода-вывода» установлен на «Только извлечение».

## Принцип работы

1. Если <ItemLink id="interface" /> не может получить из [сетевого хранилища](../ae2-mechanics/import-export-storage.md)
   достаточное количество настроенного предмета и содержит <ItemLink id="crafting_card" />, он просит систему
   [автоматического создания](../ae2-mechanics/autocrafting.md) произвести недостающее.
2. <ItemLink id="storage_bus" /> предоставляют сети доступ к содержимому интерфейсов.
