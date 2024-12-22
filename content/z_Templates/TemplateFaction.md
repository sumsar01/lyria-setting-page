---
NoteIcon: Faction
tags:
  - Category/Faction
Alignment: Chaotic Evil
type: Faction
leader: 
cssclasses:
  - wide-page
base: 
influence: 
allies: 
enemies: 
resources: 
goals:
---
<% tp.file.title %>
<% await tp.file.move("/2. Mechanics/Factions/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewFaction");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Faction Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>


> [!infobox]
> # `=this.file.name`
> ![[z_Assets/Misc/MapPlaceholder.png|cover hsmall]]
> [[z_Assets/Misc/MapPlaceholder.png|Show To Players]]
> ###### Faction Profile
> Type |  Stat |
> ---|---|
> Type | `=this.type` |
> Leadership | `=this.leader` |
> Base of Operations | `=this.base` |
> Alignment | `=this.Alignment` |
> Influence | `=this.influence` |
> ###### Allies & Enemies
> Type |  Stat |
> ---|---|
> Allies | `=this.allies` |
> Enemies | `=this.enemies` |
> ###### Goals & Resources
> Type |  Stat |
> ---|---|
> Goals | `=this.goals` |
> Resources | `=this.resources` |

# `=this.file.name`
## Overview
Placeholder

### Placeholder Symbol
![[z_Assets/Misc/MapPlaceholder.png|Placeholder Symbol]]
[[z_Assets/Misc/MapPlaceholder.png|open outside]]

### Placeholder Image
![[z_Assets/Misc/ImagePlaceholder.png|Placeholder Image]]
[[z_Assets/Misc/ImagePlaceholder.png|open outside]]

Placeholder

## Notable Members
- Placeholder

## Faction Goals
- Placeholder

## History
Placeholder

## Political Influence
Placeholder

## Relationships with Other Factions
- Allies: `=this.allies`
- Enemies: `=this.enemies`

## Resources
- Placeholder

## Internal Conflicts
Placeholder

## Key Locations
- Placeholder

## Background
Placeholder

## Additional Details
Placeholder
