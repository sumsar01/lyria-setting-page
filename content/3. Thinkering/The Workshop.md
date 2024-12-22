---
cssclasses:
  - wide-page
---

| ![[world-map.jpg\|300]]      | ![[Chanters in the Dark.webp\|300]] |     |
| ---------------------------- | ----------------------------------- | --- |
| [[world-map.jpg\|World Map]] | [[Chanters in the Dark]]            |     |

## Recently Modified Locations

```dataview  
TABLE WITHOUT ID link(file.name) AS "Location Name", type, Government, commonraces, size, population  
FROM "1. World"
WHERE (NoteIcon = "Settlement")  
SORT file.mtime DESC
LIMIT 10
```

## Recently Modified NPCs

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Age, Location, AssociatedGroup  
FROM "1. World"
WHERE (NoteIcon = "npc") 
SORT file.mtime DESC
LIMIT 10
```
