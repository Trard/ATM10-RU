---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: МЭ порт ввода-вывода
  icon: io_port
  position: 210
categories:
- devices
item_ids:
- ae2:io_port
---

# МЭ порт ввода-вывода

<BlockImage id="io_port" p:powered="true" scale="8" />

Порт ввода-вывода позволяет быстро переносить содержимое [ячеек хранения](../items-blocks-machines/storage_cells.md)
в [сетевое хранилище](../ae2-mechanics/import-export-storage.md) или обратно.

Его можно повернуть с помощью <ItemLink id="certus_quartz_wrench" />.

## Настройки

*   Порт можно настроить на перенос ячейки в выходные слоты, когда она опустеет, заполнится либо когда работа будет завершена.
*   После установки <ItemLink id="redstone_card" /> появятся варианты условий сигнала красного камня.
*   В центре интерфейса находится стрелка, задающая направление переноса: из ячейки в
    [сетевое хранилище](../ae2-mechanics/import-export-storage.md) либо из хранилища в ячейку.

## Улучшения

Порт ввода-вывода поддерживает следующие [улучшения](upgrade_cards.md):

*   <ItemLink id="speed_card" /> увеличивает количество ресурсов, перемещаемых за одну операцию;
*   <ItemLink id="redstone_card" /> добавляет управление красным камнем: работа при высоком или низком сигнале либо одна операция на импульс.

## Рецепт

<RecipeFor id="io_port" />
