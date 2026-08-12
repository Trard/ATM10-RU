---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: Кабели
  icon: fluix_glass_cable
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:white_glass_cable
- ae2:orange_glass_cable
- ae2:magenta_glass_cable
- ae2:light_blue_glass_cable
- ae2:yellow_glass_cable
- ae2:lime_glass_cable
- ae2:pink_glass_cable
- ae2:gray_glass_cable
- ae2:light_gray_glass_cable
- ae2:cyan_glass_cable
- ae2:purple_glass_cable
- ae2:blue_glass_cable
- ae2:brown_glass_cable
- ae2:green_glass_cable
- ae2:red_glass_cable
- ae2:black_glass_cable
- ae2:fluix_glass_cable
- ae2:white_covered_cable
- ae2:orange_covered_cable
- ae2:magenta_covered_cable
- ae2:light_blue_covered_cable
- ae2:yellow_covered_cable
- ae2:lime_covered_cable
- ae2:pink_covered_cable
- ae2:gray_covered_cable
- ae2:light_gray_covered_cable
- ae2:cyan_covered_cable
- ae2:purple_covered_cable
- ae2:blue_covered_cable
- ae2:brown_covered_cable
- ae2:green_covered_cable
- ae2:red_covered_cable
- ae2:black_covered_cable
- ae2:fluix_covered_cable
- ae2:white_covered_dense_cable
- ae2:orange_covered_dense_cable
- ae2:magenta_covered_dense_cable
- ae2:light_blue_covered_dense_cable
- ae2:yellow_covered_dense_cable
- ae2:lime_covered_dense_cable
- ae2:pink_covered_dense_cable
- ae2:gray_covered_dense_cable
- ae2:light_gray_covered_dense_cable
- ae2:cyan_covered_dense_cable
- ae2:purple_covered_dense_cable
- ae2:blue_covered_dense_cable
- ae2:brown_covered_dense_cable
- ae2:green_covered_dense_cable
- ae2:red_covered_dense_cable
- ae2:black_covered_dense_cable
- ae2:fluix_covered_dense_cable
- ae2:white_smart_cable
- ae2:orange_smart_cable
- ae2:magenta_smart_cable
- ae2:light_blue_smart_cable
- ae2:yellow_smart_cable
- ae2:lime_smart_cable
- ae2:pink_smart_cable
- ae2:gray_smart_cable
- ae2:light_gray_smart_cable
- ae2:cyan_smart_cable
- ae2:purple_smart_cable
- ae2:blue_smart_cable
- ae2:brown_smart_cable
- ae2:green_smart_cable
- ae2:red_smart_cable
- ae2:black_smart_cable
- ae2:fluix_smart_cable
- ae2:white_smart_dense_cable
- ae2:orange_smart_dense_cable
- ae2:magenta_smart_dense_cable
- ae2:light_blue_smart_dense_cable
- ae2:yellow_smart_dense_cable
- ae2:lime_smart_dense_cable
- ae2:pink_smart_dense_cable
- ae2:gray_smart_dense_cable
- ae2:light_gray_smart_dense_cable
- ae2:cyan_smart_dense_cable
- ae2:purple_smart_dense_cable
- ae2:blue_smart_dense_cable
- ae2:brown_smart_dense_cable
- ae2:green_smart_dense_cable
- ae2:red_smart_dense_cable
- ae2:black_smart_dense_cable
- ae2:fluix_smart_dense_cable
---

# Кабели

<GameScene zoom="3" background="transparent">
  <ImportStructure src="../assets/assemblies/cables.snbt" />
  <IsometricCamera yaw="180" pitch="30" />
</GameScene>

МЭ сеть образуется и при непосредственном соседстве совместимых машин, однако основным способом продолжить её на большую
площадь служат кабели.

Кабели разных цветов не соединяются друг с другом, даже если расположены рядом. Это позволяет эффективнее распределять
[каналы](../ae2-mechanics/channels.md). От цвета кабеля также зависит цвет подключённых терминалов, поэтому им не обязательно
всем быть фиолетовыми. Флюисовые кабели соединяются с любым цветом.

Важно: **КАНАЛЫ НИКАК НЕ СВЯЗАНЫ С ЦВЕТОМ КАБЕЛЯ**.

## Важное замечание

**Если вы только знакомитесь с AE2 и ещё не разобрались с каналами, по возможности используйте умные и плотные умные кабели.
Они показывают маршруты каналов в сети и делают их поведение понятнее.**

## Ещё одно замечание

**Это не трубы для предметов, жидкостей, энергии и прочего.** У кабелей нет внутреннего инвентаря, поставщики шаблонов
и машины ничего в них не «выталкивают». Кабели лишь соединяют [устройства](../ae2-mechanics/devices.md) AE2 в единую сеть.

## Стеклянный кабель

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/fluix_glass_cable.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

<ItemLink id="fluix_glass_cable" /> — самый простой в изготовлении кабель. Он передаёт энергию и до 8
[каналов](../ae2-mechanics/channels.md). Кабель выпускается в 17 цветах, по умолчанию — флюисовом, и окрашивается любым
из 16 красителей.

Чтобы изготовить окрашенные кабели, окружите любой краситель 8 кабелями одного вида. Цвет исходных кабелей неважен,
но их вид должен совпадать: все стеклянные, все умные и так далее. Кабели в мире также можно красить любой совместимой
с Forge кистью.

Любой окрашенный кабель можно объединить с ведром воды, чтобы смыть краску.

Кабель можно покрыть шерстью, получив <ItemLink id="fluix_covered_cable" />, либо изготовить <ItemLink id="fluix_smart_cable" />,
чтобы лучше понимать распределение [каналов](../ae2-mechanics/channels.md).

<RecipeFor id="fluix_glass_cable" />

<RecipeFor id="blue_glass_cable" />

## Покрытый кабель

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_covered_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Покрытый кабель не даёт игровых преимуществ перед <ItemLink id="fluix_glass_cable" />, но служит альтернативным
оформлением, если вам больше нравится закрытый внешний вид.

Он окрашивается так же, как <ItemLink id="fluix_glass_cable" />. Четыре <ItemLink id="fluix_covered_cable" /> можно
объединить с красной пылью и светокамнем, получив <ItemLink id="fluix_covered_dense_cable" />.

<Recipe id="network/cables/covered_fluix" />

<RecipeFor id="blue_covered_cable" />

## Плотный кабель

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_covered_dense_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Кабель повышенной ёмкости переносит 32 канала вместо 8 у обычного. Однако он не поддерживает шины, поэтому перед
подключением шин или панелей необходимо перейти с плотного кабеля на более тонкий, например <ItemLink id="fluix_glass_cable" />
или <ItemLink id="fluix_smart_cable" />.

Плотные кабели немного изменяют правило «кратчайшего пути» для каналов: канал выбирает кратчайший путь к плотному кабелю,
а затем кратчайший путь по этому плотному кабелю до контроллера.

<Recipe id="network/cables/dense_covered_fluix" />

<RecipeFor id="blue_covered_dense_cable" />

## Умный кабель

<Row>
<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_smart_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_smart_dense_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
</Row>

Хотя внешне умный кабель немного похож на <ItemLink id="fluix_covered_cable" />, он выполняет диагностическую функцию,
наглядно отображая использование каналов. Каналы показаны светящимися цветными линиями вдоль чёрной полосы кабеля,
что помогает понять их распределение в сети. На обычном умном кабеле первые четыре канала отображаются линиями цвета кабеля,
а следующие четыре — белыми. На плотном умном кабеле каждая полоса соответствует 4 каналам.

В сетях с <ItemLink id="controller" /> линии на кабелях показывают точный маршрут каждого канала.

В одноранговой сети умный кабель вместо количества проходящих именно через него каналов показывает общее число каналов,
используемых во всей сети.

Такие кабели окрашиваются так же, как <ItemLink id="fluix_glass_cable" />.

<Recipe id="network/cables/smart_fluix" />

<Recipe id="network/cables/dense_smart_fluix" />

<RecipeFor id="blue_smart_cable" />
