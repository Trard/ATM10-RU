---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: МЭ контроллер
  icon: controller
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:controller
---

# МЭ контроллер

<BlockImage id="controller" p:state="online" scale="8" />

Контроллер — центр маршрутизации [МЭ сети](../ae2-mechanics/me-network-connections.md). Без него сеть считается «одноранговой»
и может содержать в общей сложности не более 8 использующих каналы [устройств](../ae2-mechanics/devices.md).

В одной [МЭ сети](../ae2-mechanics/me-network-connections.md) не может быть 2 отдельных контроллеров.

Каждая сторона контроллера предоставляет 32 [канала](../ae2-mechanics/channels.md).

Для работы каждого блока контроллера требуется 6 AE/т. Один блок может хранить 8000 AE, поэтому большим сетям может
понадобиться дополнительное хранилище энергии. Подробнее см. в разделе [«Энергия»](../ae2-mechanics/energy.md).

Мультиблочный контроллер можно строить в достаточно свободной форме.

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../assets/assemblies/controllers.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Однако необходимо соблюдать несколько правил:

1.  Все блоки контроллера в [МЭ сети](../ae2-mechanics/me-network-connections.md) должны быть соединены друг с другом, иначе они станут красными.
2.  Размер контроллера не должен превышать 7x7x7, иначе он станет красным.
3.  Блок контроллера может иметь 2 соседних блока не более чем по 1 оси. Нарушивший это правило блок отключится и станет красным.

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../assets/assemblies/controller_rules.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

Если все правила соблюдены и подаётся энергия, контроллер должен светиться, плавно меняя цвета.

Щелчок правой кнопкой мыши по контроллеру открывает тот же интерфейс, что и <ItemLink id="network_tool" />.

## Рецепт

<RecipeFor id="controller" />
