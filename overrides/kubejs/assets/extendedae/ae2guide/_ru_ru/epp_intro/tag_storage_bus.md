---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Шина хранения МЭ по тегам
    icon: extendedae:tag_storage_bus
categories:
- extended devices
item_ids:
- extendedae:tag_storage_bus
---

# Шина хранения МЭ по тегам

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_tag_storage_bus.snbt"></ImportStructure>
</GameScene>

Шина хранения МЭ по тегам — это <ItemLink id="ae2:storage_bus" /> с фильтрацией по тегам предметов или жидкостей и
поддержкой нескольких основных логических операторов.

Примеры:

- Принимать только необработанную руду

c:raw_materials/*

- Принимать все слитки и самоцветы

c:ingots/* | c:gems/*
