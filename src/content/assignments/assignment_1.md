---
title: 'Assignment 1: Scripting'
---

# Scripting Variations in Collaboration

## Purpose:

This assignment consists of two parts, and has a two-fold purpose. The focus is on the first part of the assignment, but don't underestimate the second part either.

(1.) explore the strength of **'design space exploration'** in parametric design with Rhino + Grasshopper:

The structure of a parametric script and its input variables define the solution space of a parametric model. The purpose of this part of the assignment is to explore how the choice of parameters and the structure of your parametric script influence the resulting 3D shape. There are namely many ways in which you can create the same shape. A simple rectangular column can be built in many different scripts, still leading to the same or different shapes. For this assignment, create **one script that generates three different 3D shapes**, and show in a report how the structure of your script and the parameters that you chose impact the number of designs you can generate. The script needs to have a well-defined choice of input parameters. What is the size and content of the solution space for your script? How can you make your script more interesting in your opinion and why?

(2.) learn to **collaborate using Speckle**:

<!-- TODO: Update Speckle link (2026) -->

Parametric design is fun, even more so when you can collaborate! In this part of the assignment, you need to show how you can download content from a partner using Speckle, and how you can upload your content to Speckle for others to use that content. The Speckle environment to use for this assignment is available at https://tue.speckle.xyz/projects/8b75adc489. This Speckle environment is organised based on student numbers.

image.png

## Goal:

Together, we are going to create a modular space station.

<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_station_pictured_from_the_SpaceX_Crew_Dragon_1.jpg/2560px-The_station_pictured_from_the_SpaceX_Crew_Dragon_1.jpg"
         alt="International Space Station">
    <figcaption>International Space Station - (source:Wikipedia)</figcaption>
</figure>

The overall space-station structure (the carcass) is provided and shared with all students. Each student is responsible for designing one parametric module that attaches to this shared structure.

<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/ISS-20_Robert_Thirsk_at_the_Minus_Eighty_Degree_Laboratory_Freezer.jpg/2560px-ISS-20_Robert_Thirsk_at_the_Minus_Eighty_Degree_Laboratory_Freezer.jpg"
         alt="Interior of the space module">
    <figcaption>Note the access point to the module - (source:Wikipedia)</figcaption>
</figure>

As part of the collaboration, each student subscribes to an assigned attachment node from Speckle, which will serve as the geometric and parametric input for their module.

After loading the assigned attachment node into Grasshopper, parametric modelling of the module can start.

The content to be created by each student is one space-station module, which can represent a functional part of the station such as living quarters, a laboratory, life-support facilities, an engineering module, or an observation module.

No other content is to be modelled. The focus is on:

1. a parametric module volume,
1. a clear and controlled connection to the station attachment node, and
1. external structure that supports the module’s function.

For the Scripting Variations part of the assignment, your task is to create a parametric Grasshopper script, without the use of advanced plugins or add-ons, that generates three variations of your space-station module.

At the end of the geometric modelling part, the resulting module geometry must be uploaded back to Speckle using a workflow similar to the one used for downloading the station carcass. All student modules together will form a collaboratively assembled space station.

## Hints:

- The focus of the assignment is on the parametric model and the associated design solution space, as well as the Speckle collaboration. The focus is less on making the most complicated shape ever. Do not forget that there is also a main group assignment.
- Do not rely on geometry that is created in Rhino. For this assignment, create everything in Grasshopper.
- Avoid random inputs preferably. Keep control of the script with meaningful input parameters.
- Document your script using GH groups and the GH Scribble component.
- It is encouraged to learn from online material and sample scripts. However, your own script needs to be original and your own.

## Report:

The report needs to:

1. Explain the script and how it works, using pictures (screenshots) of the script.
1. Show three resulting shapes (a total of 3 parametric designs).
1. Reflect on the impact of your script structure on the result (what is the design solution space).
1. Explain how collaboration in Speckle worked out.
1. Be about 5 pages long.

## Submission:

- Two files must be submitted to Canvas:
  - ZIP file of the Grasshopper files and any additional material
  - PDF file with the report.
- The name of the files must be xxxxxx_variations.zip or xxxxxx_variations.pdf where xxxxxx is your student number.
