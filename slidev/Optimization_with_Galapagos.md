
---
title: Optimization with Galapagos
subtitle: Parametric Design (7ZM7M07)
author: Pieter Pauwels, Ekaterina Petrova
date: 27 February 2025
---

# Optimization with Galapagos
## Parametric Design (7ZM7M07)

**Thursday 27 February 2025**

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

1. From Design Space Exploration to Optimization  
2. Types of Optimization  
3. Galapagos  
4. Example: Beam Optimization  
5. Example: Space Planning Layout  

---

# From Design Space Exploration to Optimization

- Parametric Design  
- Design Optimization  
- Genetic Design  
- Generative Design  

<!-- image: design-paradigms -->

---

## Design Space Exploration Plug-in

- Provides Grasshopper components for exploration and optimization  
- Written by Nathan Brown (MIT)  
- Available on Food4Rhino  
- Includes user manual  

Links:
- https://www.food4rhino.com/en/app/design-space-exploration
- https://github.com/Digital-Structures/gh-design-space-exploration

<!-- image: dse-plugin -->

---

## Creating a Design Space

Using the DSE Sampler component:

- Define variables  
- Define random seed  
- Add file location  
- Generate samples  
- Export to CSV  

<!-- image: creating-design-space -->

---

## Creating Sampled Points

- Example: 100 sampled points  
- Used for visualization  

<!-- image: sampled-points -->

---

## Design Solution Space

- Constraints define limits  
- Parameters vary within limits  
- Each parameter set = one solution  

<!-- image: solution-space -->

---

## Optimization within a Design Space

Goal:
- Find best-performing solutions  

Example:
- Minimize distance to origin  

<!-- image: optimization-search -->

---

## What Is Optimization?

Optimization is:
- Selecting the best solution  
- From a combination of parameters  
- Subject to constraints  

Best = minimum or maximum of a fitness function

---

## Fitness Function

- Mathematical expression  
- Evaluates solution quality  
- Output: single numeric value  

<!-- image: fitness-function -->

---

## Distance-Based Fitness Example

Distance between two 3D points:
- Input: (x, y, z)  
- Target: (0, 0, 0)  

Fitness:
- Minimize distance to target  

<!-- image: distance-formula -->

---

## Calculating All Fitness Values

- Compute fitness for each solution  
- Compare results  

<!-- image: calculating-fitness -->

---

## DesignLogger (DSE Module)

- Records design vectors  
- Records fitness values  
- Tracks time  
- Allows bookmarking designs  
- Exports exploration history  

<!-- image: design-logger -->

---

## DesignExplorer Tool

- Visualizes design space  
- Supports interactive exploration  

Video:
https://youtu.be/UEe6mDuu2NM

<!-- image: design-explorer -->

---

# Types of Optimization

---

## Optimization in General

- Simple maximization/minimization  
- Random sampling  
- Few constraints  

More advanced methods exist

---

## What to Optimize

### Levels
- Material  
- Member  
- Geometry  
- Topology  

### Objectives
- Minimize: weight, volume, cost  
- Maximize: strength, stiffness, ductility  

---

## Optimization Methods

### Physical
- Structural models  
- Form-finding  
- Analog models  

### Computational
- Linear programming  
- Stochastic algorithms  
- Genetic algorithms  
- Evolutionary strategies  

---

# Optimization Algorithms

---

## Divide and Conquer

1. Define domain  
2. Subdivide domain  
3. Select best region  
4. Shrink domain  
5. Repeat  

<!-- image: divide-and-conquer -->

---

## Divide and Conquer – Limitation

- Can miss narrow peaks  
- Prone to local optima  
- Global optimum not guaranteed  

<!-- image: divide-and-conquer-downside -->

---

## Hill Climbing

1. Start at random point  
2. Evaluate neighbors  
3. Move uphill  

<!-- image: hill-climbing -->

---

## Hill Climbing – Limitation

- Easily stuck in local optima  

<!-- image: hill-climbing-downside -->

---

## Basin of Attraction

- Region that converges to same peak  
- Basin size ≠ peak quality  

<!-- image: basin-of-attraction -->

---

## Simulated Annealing

- Similar to hill climbing  
- Allows worse moves early  
- Becomes greedy over time  

Steps:
1. High initial temperature  
2. Random exploration  
3. Gradual cooling  

<!-- image: simulated-annealing -->

---

## Evolutionary Algorithms

Principle:
- Survival of the fittest  

Steps:
- Initialize population  
- Evaluate fitness  
- Select best  
- Crossover and mutation  
- Repeat  

<!-- image: evolutionary-overview -->

---

## Selection Strategies

- Isotropic  
- Exclusive  
- Biased  

<!-- image: selection -->

---

## Coupling (Finding Mates)

- Based on genome distance  
- Balance in-breeding and out-breeding  

<!-- image: coupling -->

---

## Coalescence

- Crossover  
- Blending  
- Fitness-based combination  

<!-- image: coalescence -->

---

## Mutation

- Introduces diversity  
- Avoids premature convergence  

<!-- image: mutation -->

---

# Galapagos

---

## Galapagos Evolutionary Solver

- Generic evolutionary solver  
- Operates on slider parameters  
- Requires one fitness value  

<!-- image: galapagos-overview -->

---

## Galapagos Inputs

- Genes: number sliders  
- Fitness: single numeric output  
- Direction: maximize or minimize  

<!-- image: galapagos-inputs -->

---

## Running Galapagos

- Record  
- Reset  
- Adjust population and inbreeding  
- Run multiple times  

<!-- image: galapagos-run -->

---

## Solver Results

- Multiple optima possible  
- Results depend on settings  

<!-- image: solver-results -->

---

# Example: Beam Optimization

---

## Beam Optimization Problem

Parameters:
- Length  
- Width  
- Height  

Material:
- Stiffness  
- Strength  

Load:
- Distributed load  

<!-- image: beam-setup -->

---

## Fitness Definition (Beam)

Possible fitness:
- Minimize deflection  
- Minimize material  
- Satisfy stress limits  

<!-- image: beam-fitness -->

---

# Example: Space Planning Layout

---

## Room Layout Optimization

Goal:
- Fit rooms inside a boundary  
- Avoid overlap  

Constraints:
- Boolean geometry  
- Area requirements  

<!-- image: room-layout -->

---

## Previous Assignment Examples

1. Room layout optimization  
2. Timber shelter optimization  

<!-- image: assignments -->

---

# Other Optimization Tools

- Goat  
- Octopus  
- Wallacei  
- Opossum  
- Kangaroo  
- Biomorpher  

Available on Food4Rhino

---

# End

Questions?

---
src: ./Week5_Coding_into_Grasshopper_EXACT_Slidev.md
---