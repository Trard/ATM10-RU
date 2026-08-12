---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: Квантовый компьютер
  icon: advanced_ae:quantum_core
categories:
  - advanced devices
item_ids:
  - advanced_ae:quantum_unit
  - advanced_ae:quantum_core
  - advanced_ae:quantum_structure
  - advanced_ae:quantum_accelerator
  - advanced_ae:quantum_multi_threader
  - advanced_ae:quantum_storage_128
  - advanced_ae:quantum_storage_256
  - advanced_ae:data_entangler
---

# Квантовый компьютер

Квантовый компьютер — особый вид компьютера крафта. Он способен выполнять неограниченное количество запросов на
крафт, пока хватает хранилища крафта.

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../structure/quantum_computer_multiblock.snbt"></ImportStructure>
</GameScene>

## Квантовое ядро

<BlockImage id="advanced_ae:quantum_core" p:powered="true" p:formed="true" scale="4"></BlockImage>

Квантовое ядро — сердце квантового компьютера. Само по себе оно предоставляет 256M хранилища крафта и 8 потоков
сопроцессоров. Это единственный блок, который в одиночку образует квантовый компьютер и предоставляет все его
возможности. Однако в составе многоблочной конструкции можно создать куда более мощный компьютер. При самостоятельной
работе энергия должна подаваться через верхнюю или нижнюю сторону, где находятся разъёмы.

## Квантовые хранилища

<Row gap="20">
<BlockImage id="advanced_ae:quantum_storage_128" scale="4"></BlockImage>
<BlockImage id="advanced_ae:quantum_storage_256" scale="4"></BlockImage>
</Row>

Эти блоки расширяют хранилище крафта квантового ядра и тем самым увеличивают количество одновременно выполняемых
задач. Существуют варианты вместимостью 128M и 256M.

## Квантовый спутыватель данных

<BlockImage id="advanced_ae:data_entangler" scale="4"></BlockImage>

Спутыватель данных — особый блок, воздействующий на все блоки хранилища в многоблочной конструкции. Он позволяет им
хранить данные сразу в нескольких измерениях, фактически умножая вместимость на 4. В одном квантовом компьютере может
быть только один спутыватель.

## Квантовый ускоритель

<BlockImage id="advanced_ae:quantum_accelerator" scale="4"></BlockImage>

Квантовый ускоритель добавляет многоблочному квантовому компьютеру 8 сопроцессоров. Все выполняемые квантовым
компьютером шаблоны крафта могут совместно использовать любые сопроцессоры, поэтому имеет смысл установить много
ускорителей.

## Квантовый многопоточник

<BlockImage id="advanced_ae:quantum_multi_threader" scale="4"></BlockImage>

Подобно спутывателям данных, многопоточники позволяют ускорителям выполнять дополнительные потоки в отдельных
измерениях, умножая их сопроцессорную мощность на 4. В одном квантовом компьютере может быть только один многопоточник.

## Квантовая структура

<Row gap="20">
<BlockImage id="advanced_ae:quantum_structure" scale="4"></BlockImage>
<BlockImage id="advanced_ae:quantum_structure" p:formed="true" p:powered="true" scale="4"></BlockImage>
</Row>

Эти блоки образуют каркас квантового компьютера и связывают все его части воедино.

## Многоблочная конструкция

Для создания многоблочного квантового компьютера соблюдайте следующие правила:
- Максимальный размер — 7x7x7 блоков по внешним границам;
- Внутри конструкции не должно быть пустот. Их можно без дополнительных преимуществ заполнить
<ItemLink id="advanced_ae:quantum_unit" />;
- Ровно одно <ItemLink id="advanced_ae:quantum_core" />;
- Не более одного <ItemLink id="advanced_ae:data_entangler" />;
- Не более одного <ItemLink id="advanced_ae:quantum_multi_threader" />;
- Все блоки внешнего слоя должны быть <ItemLink id="advanced_ae:quantum_structure" />;
- Внутри не должно быть блоков <ItemLink id="advanced_ae:quantum_structure" />.

## Серверные настройки

В серверных настройках можно изменить несколько значений, в том числе:
- Максимальный размер многоблочной конструкции;
- Число сопроцессоров в каждом квантовом ускорителе;
- Максимальное количество квантовых многопоточников;
- Множитель потоков многопоточника;
- Максимальное количество спутывателей данных;
- Множитель вместимости спутывателя данных.

Действующие в вашей сборке ограничения указаны во всплывающих подсказках предметов.
