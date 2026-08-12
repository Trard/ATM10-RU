---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: Почкующийся энтронизированный флюикс
    icon: extendedae:entro_budding_fully
categories:
- entro system
item_ids:
- extendedae:entro_budding_fully
- extendedae:entro_budding_mostly
- extendedae:entro_budding_half
- extendedae:entro_budding_hardly
- extendedae:entro_cluster_small
- extendedae:entro_cluster_medium
- extendedae:entro_cluster_large
- extendedae:entro_cluster
---

# Почкующийся энтронизированный флюикс

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../structure/budding_entro.snbt"></ImportStructure>
  <IsometricCamera yaw="195" pitch="30"></IsometricCamera>
</GameScene>

Он служит источником <ItemLink id="extendedae:entro_crystal" />. Почкуюшийся энтронизированный флюикс создаётся
внедрением <ItemLink id="extendedae:entro_seed" /> в <ItemLink id="ae2:fluix_block" />.

Механизм роста энтро-почек похож на рост [истинного кварца](ae2:items-blocks-machines/budding_certus.md). Однако деградацию
почкующегося энтронизированного флюикса предотвратить нельзя: в конце концов он превращается в
<ItemLink id="ae2:quartz_block" />. Теоретически из полностью энтронизированного флюикса можно получить около 10
<ItemLink id="extendedae:entro_crystal" /> без чар «Удача».

При разрушении почкующийся энтронизированный флюикс всегда роняет **одну единицу**
<ItemLink id="extendedae:entro_dust" />, независимо от состояния. Не полностью выросшая энтро-почка роняет
<ItemLink id="extendedae:entro_shard" />.
