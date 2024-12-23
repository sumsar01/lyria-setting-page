---
[object Object]
---

> [!infobox]
> # `index`
> ![[Ulfmyr Village.webp|cover hsmall]]
> [[Ulfmyr Village.webp|Show To Players]]
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `Settlement` |
> Size | `Village` |
> Region | `[[[[Ulfmyr Fen]]]]` |
>  ###### Travel
> Destination |  Travel Days  |
> ---|---|
> [[Tomb of the Ulfheonar]] | 🕓`= round(5 * [[Terrain Configurations]].forest * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |
> [[Maegwin]] | 🕓`= round(30 * [[Terrain Configurations]].road * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |
> [[Vasszthar]] | 🕓`= round([[Terrain Configurations]].marsh * 20 * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |
> [[Tower of Kalzheth]] | 🕓`= round([[Terrain Configurations]].marsh * 20 * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |
> ###### Politics
> Type |  Stat |
> ---|---|
> Govt Type | `Aristocracy` |
> Ruler | `[[Jarl Gethin Penrose]]` |
> Defense | `20` |
> ###### Organizations
> Type |  Stat |
> ---|---|
> Guilds & Groups | `The Three Rats Gang` |
> ###### Society
> Type |  Stat |
> ---|---|
> Population | `400` |
> Races | `Humans` |
> Temples | `[[Cyfiawnder]]`  |
> ###### Commerce
> Type |  Stat |
> ---|---|
> Exports | `Hide` |
> Imports | `Crafting Materials,Tools` |

# `index`

The wooded moors give way to mist laden fields. Ahead, up the narrow track, stands the village of Ulfmyr. The village is defended by a low earthen rampart topped with a wooden palisade. Behind the village, a causeway rises to a great hall resting atop a craggy ridge. Black hearth-smoke hangs forlornly over the village, as if even the smoke were too frightened to venture beyond the village walls.

Solitary figures give out a cry, and a long mournful horn is sounded, echoing down the vale, declaring your approach to all.

## Description

The 15-foot palisade deters beasts and most raiders, but is easily surmounted by skilled climbers (climbing check, **DC 15**).

A catwalk runs the circumference of the palisade and—since the incursion of the hound — town militia light braziers at dusk and walk the wall throughout the night. The night watch has done little to deter attacks. Indeed, the watch has lost four of its own volunteers to the claws of the hound.

The night watch is led by [Nothan the Younger](app://obsidian.md/Nothan%20the%20Younger).

The night watch raises a cry at the first hint of danger. There is a 1-in-5 chance of the night watch passing near the PCs any time they attempt to cross the wall.

## Notable NPCs
```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, AssociatedGroup  
FROM "1. World/Lyria/Northwest Lyr/Ulfmyr Fen/Ulfmyr Village"
WHERE (NoteIcon = "npc")
SORT file.mtime DESC
```

## Points of Interest
```dataview  
TABLE WITHOUT ID link(file.name) AS "Location Name"  
FROM "1. World/Lyria/Northwest Lyr/Ulfmyr Fen/Ulfmyr Village"
WHERE (NoteIcon = "Location")
SORT file.mtime DESC
```

## Rumors 

| d24 | Rumor                                                                                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | The hound fears wolf’s bane. (F)                                                                                                                                                                   |
| 2   | The Mad Widow Ymae is a witch and knows how to trap the hound.                                                                                                                                     |
| 3   | The hound is immune to weapons. (Both false and true.)                                                                                                                                             |
| 4   | Silver weapons, blessed by a man of faith, sear the hound like flaming brands. (F)                                                                                                                 |
| 5   | The Jarl and his thegns have no idea how to defeat the hound.                                                                                                                                      |
| 6   | The hound cannot be slain by weapons alone.                                                                                                                                                        |
| 7   | The hound only slays sinners. (F)                                                                                                                                                                  |
| 8   | The Jarl is working on a plan to defeat the hound; we need only give him the time to accomplish his task! (F)                                                                                      |
| 9   | An ancient chieftain’s tomb is hidden in the hills north of town. The savage king was known as the wolf-slayer.                                                                                    |
| 10  | The Jarl’s sorcerer is secretly in control of the hound. Slay the sorcerer and you slay the beast! (F)                                                                                             |
| 11  | The brothers Kej, Stein, and Ilham discovered a king’s ransom hidden in the hills north of Hirot and left for the south lands. (F)                                                                 |
| 12  | The hound cannot be turned or dismissed by people of faith.                                                                                                                                        |
| 13  | In ages past, the savage tribes of this land once worshipped an evil wolf-spirit by casting sacrifices into a pit in the Sunken Fens.                                                              |
| 14  | The hound can walk through walls. (F)                                                                                                                                                              |
| 15  | An ancient warlord possessed a magical spear that could slay the hound and a magical shield that could turn away the beast’s attacks. Bards call him Ulfheonar and say his tomb lies to the north. |
| 16  | The hound heals its wounds during the day, returning at full strength the following night.                                                                                                         |
| 17  | The hound takes beautiful women to be its brides in a kingdom beneath the moors. (F)                                                                                                               |
| 18  | The hound will not attack a person of true faith. (F)                                                                                                                                              |
| 19  | In order to slay the hound, it must be bound before delivering the killing blow!                                                                                                                   |
| 20  | Fresh blood distracts the hound. Carry a wineskin of lamb’s blood with you and maybe you will escape with your life! (F)                                                                           |
| 21  | The hound makes its lair somewhere in the Sunken Fens.                                                                                                                                             |
| 22  | Unless cremated, corpses of the hound’s victims rise as un-dead horrors on the next full moon. (F)                                                                                                 |
| 23  | The hound will not rest until every last citizen of Hirot is slain.                                                                                                                                |
| 24  | The hound’s bite confers a fell disease that transforms its victim into a wolf. (F)                                                                                                                |
