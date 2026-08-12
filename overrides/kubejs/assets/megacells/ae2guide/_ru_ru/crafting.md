---
navigation:
  title: Автосоздание MEGA
  icon: 256m_crafting_storage
  parent: index.md
  position: 020
categories:
  - megacells
item_ids:
  - mega_crafting_unit
  - 1m_crafting_storage
  - 4m_crafting_storage
  - 16m_crafting_storage
  - 64m_crafting_storage
  - 256m_crafting_storage
  - mega_crafting_accelerator
  - mega_crafting_monitor
  - mega_pattern_provider
  - cable_mega_pattern_provider
---

# MEGA Cells: автосоздание

<GameScene zoom="6" background="transparent">
  <ImportStructure src="assets/assemblies/crafting_cpu.snbt" />
  <IsometricCamera yaw="195" pitch="10" />
</GameScene>

## [Процессоры создания](ae2:items-blocks-machines/crafting_cpu_multiblock.md) MEGA

<Row>
  <BlockImage id="mega_crafting_unit" scale="4" />
  <BlockImage id="1m_crafting_storage" scale="4" />
  <BlockImage id="4m_crafting_storage" scale="4" />
  <BlockImage id="16m_crafting_storage" scale="4" />
  <BlockImage id="64m_crafting_storage" scale="4" />
  <BlockImage id="256m_crafting_storage" scale="4" />
</Row>

Как и для ячеек хранения, MEGA добавляет уровни памяти повышенной ёмкости для процессоров создания. Им тоже нужна особая
версия <ItemLink id="ae2:crafting_unit" />, способная обеспечить их возросшую мощность. Благодаря большему объёму памяти
они без труда справляются даже с крупнейшими заданиями создания и при этом *чертовски круто* выглядят в чёрном цвете.

<RecipeFor id="mega_crafting_unit" />
<RecipeFor id="1m_crafting_storage" />
<RecipeFor id="4m_crafting_storage" />
<RecipeFor id="16m_crafting_storage" />
<RecipeFor id="64m_crafting_storage" />
<RecipeFor id="256m_crafting_storage" />

В качестве бонуса MEGA предлагает собственный аналог <ItemLink id="ae2:crafting_accelerator" />. Каждый его блок занимает
столько же места, но предоставляет не один, а сразу *ЧЕТЫРЕ* потока сопроцессора.

<BlockImage id="mega_crafting_accelerator" scale="4" />
<RecipeFor id="mega_crafting_accelerator" />

Для полноты набора существует и аналог <ItemLink id="ae2:crafting_monitor" /> от MEGA. По функциям он ничем не отличается
от обычного монитора, зато дополняет перечисленные блоки и позволяет сохранить единый изящный тёмный облик всего
многоблочного процессора.

<BlockImage id="mega_crafting_monitor" scale="4" />
<RecipeFor id="mega_crafting_monitor" />

## Поставщик шаблонов MEGA

<Row>
  <BlockImage id="mega_pattern_provider" scale="4" />
  <GameScene zoom="4" background="transparent">
    <ImportStructure src="assets/assemblies/cable_mega_pattern_provider.snbt" />
  </GameScene>
</Row>

**Поставщик шаблонов MEGA** дополняет <ItemLink id="ae2:pattern_provider" /> и продолжает идею увеличенных версий устройств
AE2: его ёмкость удвоена, поэтому он хранит и обрабатывает до 18 шаблонов. Обратная сторона — поддерживаются только
[**шаблоны обработки**](ae2:items-blocks-machines/patterns.md), поэтому использовать его с
<ItemLink id="ae2:molecular_assembler" /> не получится.

<Row>
  <RecipeFor id="mega_pattern_provider" />
  <RecipeFor id="cable_mega_pattern_provider" />
</Row>
