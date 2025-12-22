---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
---

# Grasshopper Walkthrough
## Parametric Design (7ZM7M07)

**Thursday 20 February 2025**

Pieter Pauwels, Associate Professor  
Ekaterina Petrova, Assistant Professor  

Department of the Built Environment  
Information Systems in the Built Environment

<!-- image: cover -->

---

# Course Agenda

## Parametric Design Fundamentals
- Thu 13 Feb. – Introduction to Parametric Design  
- Thu 20 Feb. – Basic and advanced parametric modelling  

## Advanced Parametric Design
- Thu 27 Feb. – Optimization with Galapagos  
- Thu 13 Mar. – Midterm presentations  
- Thu 20 Mar. – Python scripting  

## Summary
- Thu 27 Mar. – Parametric design in practice  
- Thu 03 Apr. – Final presentation day  

---

# Presentation Outline

1. User Interface  
2. Params and Math  
3. Domains, Sets and Lists  
4. Data Trees  

---

# User Interface

<!-- image: grasshopper-ui-overview -->

---

## Grasshopper UI

1. Windows title bar  
2. Main menu bar  
3. File browser control  
4. Component palettes  
5. Canvas toolbar  
6. Canvas  
7. Recently accessed file  
8. Status bar  

Reference:  
https://modelab.gitbooks.io/grasshopper-primer/content/1-foundations/1-1/2_the-grasshopper-ui.html

<!-- image: grasshopper-ui-labeled -->

---

## Main Menu Bar

- File  
- Edit  
- View  
- Display  
- Solution  
- Help  

<!-- image: main-menu-bar -->

---

## Component Palettes

- Categories in tabs  
- Subcategories in drop-down panels  

<!-- image: component-palettes -->

---

## Canvas

- Drag-drop components from menu  
- Double-click canvas to search components  
- Middle mouse button for view options (radial menu)

<!-- image: canvas-interaction -->

---

## Grouping Components

- Select components  
- Right-click → Group  

<!-- image: grouping-components -->

---

## Component Display Options

- Default  
- Draw Icons  
- Draw Full Names  

<!-- image: display-options -->

---

## Fancy Wires

**Purpose:** visualize data structure

- No input → no output  
- Single curve → list of points  
- List of curves → multiple lists of points  

<!-- image: fancy-wires-on -->
<!-- image: fancy-wires-off -->

---

## Widgets

- Compass  
- Align  
- Markov  
- Profiler  
- Message Balloons  

<!-- image: widgets -->

---

## Remote Control Panel (RCP)

Provides a minimal interface to control a definition  
without occupying canvas space.

Video:  
https://www.youtube.com/watch?v=T9CODvhCzQA

<!-- image: remote-control-panel -->

---

## Tooltips

Tooltips show:

1. Input/output icon and name  
2. Plain-language description  
3. Current values  
4. Result of the component action  

<!-- image: tooltips -->

---

## Wire Display (Avoid Spaghetti Code)

- **Hidden**: invisible wire  
- **Default**: normal wire  
- **Faint**: thin, semi-transparent wire  

<!-- image: wire-display-modes -->

---

# Parameters and Math

<!-- image: parameters-vs-components -->

---

## Parameters vs Components

- **Parameters** store data  
- **Components** perform actions  

Data defines inputs → actions → new data.

---

## Parameters

- Store numbers, colors, geometry, etc.  
- Hexagonal border around icon  

<!-- image: parameter-types -->

---

## Number Slider

- Numeric input control  
- Integer or floating-point  
- Domain and step size configurable  

<!-- image: number-slider -->

---

## Graph Mapper

Two-dimensional interface:
- X-axis: input  
- Y-axis: output  

Used to reshape numeric values.

<!-- image: graph-mapper -->

---

## Value List

- Discrete labeled options  
- Useful for controlled choices  

<!-- image: value-list -->

---

## Math Components Overview

- Domains  
- Matrices  
- Operators  
- Polynomials  
- Scripts (C#, Python)  
- Time  
- Trigonometry  
- Utilities (min, max, avg)

---

## Logical Operators

- Not  
- And  
- Or  

<!-- image: logical-operators -->

---

# Domains, Sets and Lists

<!-- image: domains-overview -->

---

## Domains

- Define numeric ranges  
- Min–max bounds  
- Inclusion tests  
- 2D domains  

<!-- image: domain-components -->

---

## Matrices

- Rows × columns  
- Structured numeric data  

<!-- image: matrix -->

---

## Creating Lists

Methods:
- Number parameter collections  
- Range  
- Series  
- Random  

<!-- image: list-creation -->

---

## List Basics

- Zero-based indexing  
- List length  
- List item  

<!-- image: list-indexing -->

---

## Visualising Lists in Rhino

- Construct Points  
- Point List  
- Text Tag  
- Color  

<!-- image: list-visualization -->

---

## Data Stream Matching

When list sizes differ:

- Shortest list  
- Longest list (default)  
- Cross reference  

<!-- image: data-stream-matching -->

---

## Advanced List Handling

- Reverse  
- Shift  
- Insert  
- Weave  
- Cull  

<!-- image: list-management -->

---

# Data Trees

<!-- image: data-trees-overview -->

---

## What is a Data Tree?

Hierarchical structure of nested lists.  
Similar to folder structures.

<!-- image: data-tree-definition -->

---

## From Lists to Trees

- Concatenate  
- Flatten  
- Graft  
- Simplify  

<!-- image: list-to-tree -->

---

## Reading a Data Tree

- Paths (e.g. {0;1;2})  
- Branches  
- Indices within branches  

<!-- image: data-tree-paths -->

---

## Tree Operations

- Flatten  
- Graft  
- Simplify  
- Flip Matrix  

<!-- image: tree-operations -->

---

## Use Cases

- Manage many curves or surfaces  
- Same data, different structures  

<!-- image: data-tree-usecase -->

---

# Exercises

- List handling exercises  
- Weaving definitions  
- Surface generation  

Reference:
https://modelab.gitbooks.io/grasshopper-primer/

---

# End

Questions?

---
src: ./Optimization_with_Galapagos.md
---
