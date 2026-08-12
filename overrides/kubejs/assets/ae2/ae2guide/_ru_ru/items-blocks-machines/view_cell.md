---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Ячейка отображения
  icon: view_cell
  position: 410
categories:
- tools
item_ids:
- ae2:view_cell
---

# Ячейка отображения

<ItemImage id="view_cell" scale="2" />

Ячейки отображения фильтруют содержимое [терминалов](terminals.md). Их разметка настраивается в <ItemLink id="cell_workbench" />.

Предположим, требуется показывать в терминале только выбранные строительные материалы из камня. Разметьте ячейку по этим
материалам и установите в терминал — после этого будут отображаться только они.

Ячейки отображения суммируются. Если одна ячейка настроена на дубовые доски, а другая — на булыжник, установка обеих
покажет и доски, и булыжник.

## Рецепт

<Recipe id="network/cells/view_cell_storage" />

<Recipe id="network/cells/view_cell" />
