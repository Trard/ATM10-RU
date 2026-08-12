---
navigation:
  parent: appflux/appflux-index.md
  title: Энергетический интерфейс
  icon: appflux:flux_accessor
categories:
- flux accessor
item_ids:
- appflux:flux_accessor
- appflux:part_flux_accessor
---

# Энергетический интерфейс

<Row>
<BlockImage id="appflux:flux_accessor" scale="8"></BlockImage>
<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/flux_accessor.snbt"></ImportStructure>
</GameScene>
</Row>

Энергетический интерфейс может принимать и отдавать энергию, хранящуюся в вашей ME-сети. По умолчанию скорость ввода и
вывода не ограничена, но это можно изменить в конфигурации Applied Flux.

У него есть быстрый и обычный режимы. В быстром режиме энергия передаётся каждый такт, что при интенсивном использовании
может вызывать задержки. В обычном режиме количество передаваемой энергии зависит от запаса энергии в целевом устройстве,
поэтому проблем с задержками не возникает.

* Примечание: под «энергией» здесь подразумевается FE, хранящаяся в ваших [ячейках хранения FE](./flux_cells.md), а не
энергия из [энергоячеек](ae2:items-blocks-machines/energy_cells.md).

