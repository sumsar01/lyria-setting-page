---
AssociatedGroup: 
Gender: 
Race: 
Age: 
Class: 
Alignment: 
Location: 
NoteIcon: npc
tags:
  - Category/Npc
cssclasses:
  - wide-page
---
<% tp.file.title %>
<% await tp.file.move("/2. Mechanics/Non-Player Characters/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewNPC");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter NPC Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!infobox]
> # `=this.file.name`
> ![[z_Assets/Misc/ImagePlaceholder.png|cover hsmall]]
> [[z_Assets/Misc/ImagePlaceholder.png|Show To Players]]
> ###### Basic Information
> Type |  Stat |
> ---|---|
> Home | `=this.Location` |
> Group | `=this.AssociatedGroup` |
> Sex | `=this.gender` |
> Race | `=this.race` |
> Age | `=this.age` |
> Alignment | `=this.alignment` |
> Faction | `=this.AssociatedGroup ` |

# `=this.file.name`
**< Insert stats here>**

## Overview
**<Add description here, extend it with AI Text Generator using Ctrl J>**

> [!info] Statblock
> ```statblock
> name: Individual
> monster: Commoner
> columns: 1
> ```
