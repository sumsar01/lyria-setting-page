---
NoteIcon: Dungeon
tags:
  - Category/Dungeon
type: Tomb
region:
  - "[[Ulfmyr Fen]]"
cssclasses:
  - wide-page
---
> [!infobox]
> # `=this.file.name`
> ![[Tomb of the Ulfheonar.jpg|cover hsmall]]
> [[Tomb of the Ulfheonar.jpg|Show To Players]]
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `=this.type` |
> Region | `=this.region` |
> ###### Travel 
> Destination |  Travel Days  |
> ---|---|
> [[Ulfmyr Village]] | 🕓`= round(5 * [[Terrain Configurations]].forest * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |


# `=this.file.name`
The tomb of the savage warlord known as the Ulfheonar is buried beneath an enormous earthen mound cast in the shape of a serpent. Found west of [[Ulfmyr Village]], the mysterious mound is given a wide berth by most hunters and woodsmen, who regard it either as haunted or home to the King of Elfland. 

Adventurers attempting to recruit hirelings to aid in the exploration of the tomb will need to pay wages in gold, not silver.

### Tomb of the Ulfheonar Map
![[TombOfTheUlfheonar.webp|Placeholder Map]]
[[TombOfTheUlfheonar.webp|open outside]]