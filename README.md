## Background
This repository contains the source code of my personal portfolio website.  
I created this project as part of my **WebGIS and front-end development practice**, while also learning how to use **Git and GitHub** for version control.  

Before starting, I watched the tutorial recommended by my professor:  
*How to Clone and Upload GitHub Repositories*  

However, I initially struggled to follow along because I didn’t fully understand how to navigate directories in PowerShell and clone repositories properly.


## Initial Problem
Before watching the tutorial, I was actually working on a separate task — trying to fix an **OpenLayers NDVI map visualization error**.  
While troubleshooting that, I needed to clone a GitHub repository to my local folder (`personal-folder`) for version tracking.  

At that point, I didn’t know:
- Why the OpenLayers example code from the website wasn’t enough  
- Why terminal commands were necessary  
- How to give script execution permission in PowerShell  
- Or how to switch into the correct directory before cloning  

When I first tried to clone, I accidentally pasted the GitHub URL directly into PowerShell and got this error:
The term 'https://github.com/...' is not recognized as the name of a cmdlet, function, script file, or operable program.

That’s when I realized that I needed to use the proper Git command syntax: git clone <url>


## What I Did Next
With the assistance of AI tools, I debugged command-line errors and learned the proper workflow.  
I followed these steps:

1. Open PowerShell **as Administrator**  
2. Set the execution policy using:Set-ExecutionPolicy RemoteSigned
3. Navigate into my working folder:cd "C:\Users\guluz\OneDrive\Masaüstü\personal-folder"
4. Clone my GitHub repository correctly:git clone https://github.com/glzrygt/guluzar-yigit-portfolio.git
5. Move my local project files into the cloned repository folder  
6. Configure Git credentials (`user.name` & `user.email`)  
7. Commit and push all changes:
   git add .
   git commit -m "Update portfolio files"
   git push origin main


## What I Learned
- The difference between copying files and using version control  
- How to safely give PowerShell permission to run scripts  
- How to properly use `cd` to switch directories before cloning  
- The Git workflow: **add → commit → push**  
- Why the OpenLayers example alone was insufficient — because it required hosting local JS and HTML files together, which the browser blocks if not run locally or via a local server  
- How AI guidance can support understanding and documenting every step clearly  


## Reflection
This exercise taught me to not just follow tutorials but to **understand the reasoning** behind each step.  
Instead of copying code, I now know how to **diagnose, test, and fix errors systematically** — exactly what a professional engineer should do.


## Acknowledgment
With the assistance of AI tools, I debugged command-line errors and learned the proper Git workflow.  
AI support helped me understand why terminal commands were necessary and how to properly document my learning process for academic evaluation.


## Author
**Gülüzar Yiğit**  
Geomatics Engineering Student  
Hacettepe University



