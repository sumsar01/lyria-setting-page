---
NoteIcon: Location
tags: Category/Location
type:
  - "[[Road]]"
  - "[[Swamp]]"
  - "[[Urban]]"
region:
  - "[[Ulfmyr Fen]]"
population: 0
guildsgroups:
leader: "[[Jarl Gethin Penrose]]"
commonraces:
  - Humans
cssclasses:
  - wide-page
---

<% tp.file.title %>
<% await tp.file.move("/2. Mechanics/Locations/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewLocation");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Settlement Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!infobox]
> # `=this.file.name`
> ![[z_Assets/Misc/MapPlaceholder.png|cover hsmall]]
> [[z_Assets/Misc/MapPlaceholder.png|Show To Players]]
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `=this.type` |
> Region | `=link(this.region)` |
> ###### Politics
> Type |  Stat |
> ---|---|
> Ruler | `=link(this.leader)` |
> ###### Organizations
> Type |  Stat |
> ---|---|
> Guilds & Groups | `=this.guildsgroups` |
> ###### Society
> Type |  Stat |
> ---|---|
> Population | `=this.population` |
> Races | `=this.commonraces` |

# `=this.file.name`

## Features
Placeholder
