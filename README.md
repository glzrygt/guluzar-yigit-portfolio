# GMT 458 - Assignment 1: Gülüzar Yiğit Personal Web Page
This project fulfills the requirements for the GMT 458 - Web GIS course, Assignment 1: Personal Web Page. The aim is to familiarize students with HTML, CSS, and OpenLayers by creating a portfolio web page hosted on GitHub.

The site serves as a personal portfolio, featuring the map visualization for my 2025 İzmir Wildfire Impact Assessment project.

## Assignment Objectives Checklist

| Objective | Status and Requirement | Weight |
| :--- | :--- | :---: |
| **HTML Structure** | At least three different HTML files (`index.html`, `projects.html`, `certificates.html`, etc.) are used. | %15 |
| **CSS: Tabular Information** | Tabular information with images (used for certificates) is included. | %15 |
| **CSS: Animation** | An animation (fire GIF shaking effect) has been applied to the OpenLayers features. | %15 |
| **OpenLayers (OL) Inclusion** | OpenLayers is successfully included on the web page. | %20 |
| **Git Usage** | Regular use of Git is demonstrated, with at least 3 commits on different days. | %10 |
| **Overall Quality** | The overall quality, design, and adherence to requirements are maintained. | %25 |

---

## AI Usage and Specific Learning Detail

I first understood and searched the issue on Google, and when I could not resolve it, I used AI to solve a specific technical problem[cite: 19].
**Specific Thing/Issue Learned from AI:**

I learned how to correctly apply a continuous shaking/wobbling animation (fire flicker) to OpenLayers marker features. The AI helped clarify that once coordinates are transformed using `ol.proj.fromLonLat()` (from EPSG:4326 to EPSG:3857), subsequent position changes within the `setInterval` animation loop must operate directly on the already-transformed (projected) coordinates, preventing the marker from continuously jumping to the wrong location.

**Estimate of Total AI Usage:**

Approximately 45 minutes.

---

## Viewing the Project

This project is hosted on GitHub Pages.

**GitHub Repository URL:** https://github.com/GMT-458-Web-GIS/personal-web-page-glzrygt

**Live URL (GitHub Pages):** https://glzrygt.github.io/guluzar-yigit-portfolio/
