# Optimised Public Path in the Main Building

## Context

In this individual assignment, you will design and optimise a public pathway within the ground-level public zone of the main building introduced in the Beethoven Project.

This ground level is conceived as a porous, public, and accessible space, accommodating exhibitions, events, informal gatherings, and maker activities. Within this open entry-level space, visitors should be able to move intuitively and comfortably between key areas.

Your task is to use parametric design, optimisation, and scripting to generate an optimal pedestrian path through this public zone, including architectural or landscape elements placed along the path.

You are expected to use a combination of:
• Galapagos (for optimisation),
• C# scripting in Grasshopper, with support from ChatGPT or similar tools.

In this assignment, Speckle is not used.

Objective

Design an optimised public pathway that:
• connects key public zones within the open science ground level,
• avoids obstacles such as building cores, structural elements, or enclosed spaces,
• satisfies spatial constraints (e.g. minimum width),
• and is finalised with code-generated architectural or spatial elements placed along the path.

⸻

Task

Part 1 — Parametric Setup of the Public Space

Create a parametric spatial setup representing the public ground-level zone of the open science building.

Your setup must include:
• A start zone and an end zone (e.g. main entrance to exhibition hall, or entrance to event space),
• for example, both zones may be represented as lines or areas approximately 100–150 m long,
• with a configurable distance between them.
• A number of obstacles within the space, such as:
• structural cores or columns,
• enclosed rooms or service volumes,
• restricted-access areas.

All elements should be parametrically adjustable, so that:
• positions, sizes, and quantities can be modified,
• the same pathfinding logic can be tested in multiple spatial scenarios.

The setup does not need to be an exact architectural plan, but it should clearly represent a plausible public interior or semi-interior space.

⸻

Part 2 — Galapagos Pathfinding and Optimisation

Using Galapagos, generate a pathway that connects the start zone to the end zone while satisfying the following constraints:
• The path must have a minimum width of 1 m
(width should preferably be adjustable as a parameter).
• The path must not intersect with any obstacles.
• The optimisation goal should be clear and limited in scope, for example:
• minimising total path length,
• or minimising curvature or directional changes.

More complex or multi-objective optimisation strategies should be avoided and are reserved for the group assignment.

Fitness Function
You must clearly explain:
• the fitness function used in Galapagos,
• all inputs and parameters,
• any penalty terms or weight factors (if applicable),
• and why these choices are appropriate for a public pathway.

You must also explain:
• your choice between genetic algorithm and simulated annealing,
• the conceptual difference between these two methods,
• and why your chosen method is suitable for this problem.

⸻

Part 3 — C# Scripting: Path Finalisation and Decoration

In the final step, the optimised pathway must be finalised or enriched using C# scripting in Grasshopper.

You may choose the type of elements added along the path, for example:
• arches or canopies,
• lighting elements or lantern posts,
• benches or seating modules,
• trees or interior landscape elements,
• fences, railings, or spatial markers.

Requirements:
• The geometry must be generated using a C# component.
• The elements must be placed parametrically along the optimised path.
• Key parameters (spacing, size, orientation, count) should be adjustable.

You are encouraged to:
• use ChatGPT to help generate the initial C# script,
• then adapt, simplify, or extend it as needed.

You must document:
• how the code works,
• which parts were reused or modified,
• which variables are hardcoded,
• and which variables are exposed as inputs.

Submission

Submit the following: 1. A PDF report (approximately 3–4 pages) including:
• description of the spatial setup,
• explanation of the optimisation strategy and fitness function,
• discussion of results and key design decisions.
The full C# code should be included as an Annex. 2. Your Grasshopper definition.

You do not need to wait until the submission deadline to submit your work. Plan your time carefully in relation to the group assignment.
