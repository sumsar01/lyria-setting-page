---
NoteIcon: Settlement
tags:
  - Category/Settlement
Community-Size: Hamlet
Alignment: Chaotic
Government: Tribal
type: Settlement
politics: Chiefdom
leader: "[[Chieftain Krashk Thunderscale]]"
region:
  - "[[Ulfmyr Fen]]"
size: Hamlet
population: 100
commonraces:
  - "[[Lizardfolk]]"
religion:
  - "[[Lizardfolk God]]"
defences: "30"
terrain: "3"
Tribe: "[[Zassath'Kreen Tribe]]"
---

> [!infobox]
> # `=this.file.name`
> ![[LizardfolkVillage.webp|cover hsmall]]
> [[LizardfolkVillage.webp|Show To Players]]
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `=this.type` |
> Size | `=this.size` |
> Region | `=this.region` |
> ###### Travel
> Destination |  Travel Days  |
> ---|---|
> [[Ulfmyr Village]] | 🕓`= round([[Terrain Configurations]].marsh * 20 * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |
> [[Tower of Kalzheth]] | 🕓`= round([[Terrain Configurations]].marsh * 5 * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |
> ###### Politics
> Type |  Stat |
> ---|---|
> Govt Type | `=this.politics` |
> Ruler | `this.leader` |
> Defense | `=this.defences` |
> ###### Society
> Type |  Stat |
> ---|---|
> Population | `=this.population` |
> Races | `=this.commonraces` |
> Temples | `=this.religion`  |
> Tribe | `=this.tribe`  |
# `=this.file.name`
Nestled deep within the mist-shrouded Ulfmyr Fen, the lizardfolk village of Vasszthar blends seamlessly into the murky, verdant landscape. This secluded village, home to around 100 lizardfolk, is a testament to the resilience and ingenuity of its inhabitants, who have thrived in harmony with the harsh and unforgiving environment.
## Description
The village is strategically located on a series of interconnected, elevated islets surrounded by treacherous, waterlogged marshes. Tall reeds and ancient, gnarled trees draped with moss provide natural camouflage, making the village almost invisible to outsiders. The pervasive mist that rolls through the fen adds an additional layer of protection, concealing Vasszthar from prying eyes.
## Architecture 
The lizardfolk structures are crafted from locally sourced materials, primarily wood, reeds, and mud. Elevated on sturdy stilts to avoid flooding, the huts are interconnected by a network of wooden walkways and rope bridges. Each dwelling is intricately decorated with carvings and painted motifs depicting the village’s history, tribal legends, and revered spirits.
## Points of Interest
### Chief's Longhouse
The largest structure in the village, serving as both the residence of the chieftain and a communal gathering place. The longhouse is adorned with the bones and scales of great beasts, symbolizing the chief’s strength and the tribe’s victories.
### Shaman's Hut
Located at the heart of the village, the shaman’s hut is a place of spiritual significance. It is surrounded by totems and fetishes, with a constant plume of herbal smoke wafting through the air. Inside, it is filled with various herbs, potions, and ritual items.
### Crafting Huts
Small workshops where the lizardfolk craft weapons, tools, and ornaments. These huts are filled with the sounds of carving, weaving, and the occasional hiss of a fire used for shaping bone and stone.
### Fishery
A series of platforms and netting areas where the villagers process their primary food source: fish. Drying racks are laden with fish caught from the surrounding waters, and the air is filled with the scent of smoked and dried fish.
## Culture and Society 
The lizardfolk of Vasszthar live in a tightly-knit community where survival depends on cooperation and mutual respect. Their society is hierarchical but communal, with each member playing a crucial role in the tribe's wellbeing.
### Spiritual Beliefs
The villagers revere a pantheon of nature spirits and ancestral heroes, chief among them being Zathrak, the legendary warrior whose spirit is believed to protect the village. Rituals and ceremonies are a central part of village life, often involving drumming, chanting, and offerings to appease the spirits.
### Defense
The village is heavily defended against intruders. Hidden pitfalls, snares, and a network of watchful sentinels ensure that any unwelcome guests are quickly detected and dealt with. The lizardfolk warriors are fierce and well-organized, capable of mounting swift and deadly ambushes.
## Notable NPCs
```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Age, Location, AssociatedGroup  
FROM "1. World/Lyria/Northwest Lyr/Ulfmyr Fen/Vasszthar"
WHERE (NoteIcon = "npc")
SORT file.mtime DESC
```
## Treasure
- 500 copper pieces
- 300 silver pieces
- 50 gold pieces
- 10 small freshwater pearls (10 gp each)
- 3 pieces of carved jade (50 gp each)
- 1 potion of water breathing
- [[Totem of the Scaled Guardian]]
- 1 ceremonial mask made from carved wood and decorated with feathers (worth 50 gp)
- 1 sacred drum, used in rituals (worth 75 gp)

### Lizardfolk Village Map
![[LizardfolkVillageBM.jpg|Placeholder Map]]
[[LizardfolkVillageBM.jpg|open outside]]

