---
NoteIcon: deity
tags: 
Alignment: Chaotic Evil
worshippers:
  - Humans
  - Elves
  - Dwarves
domains:
symbol:
temples:
offerings:
divinefavor:
origin:
cssclasses:
  - wide-page
---

<% tp.file.title %>
<% await tp.file.move("/2. Mechanics/Deities/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewDeity");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Deity Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!infobox]
> # `=this.file.name`
> ![[z_Assets/Misc/ImagePlaceholder.png|cover hsmall]]
> [[z_Assets/Misc/ImagePlaceholder.png|Show To Players]]
> ###### Deity Profile
> Type |  Stat |
> ---|---|
> Title/Name | `=this.file.name` |
> Alignment | `=this.alignment` |
> Domains | `=this.domains` |
> Symbol | `=this.symbol` |
> Worshippers | `=this.worshippers` |
> ###### Worship
> Type |  Stat |
> ---|---|
> Major Temples | `=this.temples` |
> Common Offerings | `=this.offerings` |
> Divine Favor | `=this.divinefavor` |
> ###### Mythology & Influence
> Type |  Stat |
> ---|---|
> Origin/Myth | `=this.origin` |
> Enemies | `=this.enemies` |
> Allies | `=this.allies` |

# `=this.file.name`
## Overview
Placeholder

### Placeholder Symbol
![[z_Assets/Misc/ImagePlaceholder.png|Placeholder Symbol]]

