# GMT 458 - Assignment 1: Gülüzar Yiğit Personal Web Page

[cite_start]This project fulfills the requirements for the GMT 458 - Web GIS course, Assignment 1: Personal Web Page[cite: 1, 2]. [cite_start]The aim is to familiarize students with HTML, CSS, and OpenLayers [cite: 5] [cite_start]by creating a portfolio web page hosted on GitHub[cite: 6].

The site serves as a personal portfolio, featuring the map visualization for my [2025 İzmir Wildfire Impact Assessment] project.

## Assignment Objectives Checklist

| Objective | Status and Requirement | Weight |
| :--- | :--- | :---: |
| **HTML Structure** | [cite_start]At least three different HTML files (`index.html`, `projects.html`, `certificates.html`, etc.) are used[cite: 13]. | %15 |
| **CSS: Tabular Information** | [cite_start]Tabular information with images (used for certificates) is included[cite: 16]. | %15 |
| **CSS: Animation** | [cite_start]An animation (fire GIF shaking effect) has been applied to the OpenLayers features[cite: 15]. | %15 |
| **OpenLayers (OL) Inclusion** | [cite_start]OpenLayers is successfully included on the web page[cite: 17]. | %20 |
| **Git Usage** | [cite_start]Regular use of Git is demonstrated, with at least 3 commits on different days[cite: 17]. | %10 |
| **Overall Quality** | [cite_start]The overall quality, design, and adherence to requirements are maintained[cite: 18]. | %25 |

---

## AI Usage and Specific Learning Detail

[cite_start]I first understood and searched the issue on Google, and when I could not resolve it, I used AI to solve a specific technical problem[cite: 19].

[cite_start]**Specific Thing/Issue Learned from AI[cite: 20]:**

I learned how to correctly apply a continuous shaking/wobbling animation (fire flicker) to OpenLayers marker features. The AI helped clarify that once coordinates are transformed using `ol.proj.fromLonLat()` (from EPSG:4326 to EPSG:3857), subsequent position changes within the `setInterval` animation loop must operate directly on the already-transformed (projected) coordinates, preventing the marker from continuously jumping to the wrong location.

[cite_start]**Estimate of Total AI Usage[cite: 21]:**

Approximately 45 minutes.

---

## Viewing the Project

This project is hosted on GitHub Pages.

**GitHub Repository URL:** `https://classroom.github.com/a/7C3xAGjq`

**Live URL (GitHub Pages):** [GitHub Pages URL'niz buraya gelecek]
