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
2. Set the execution policy using: Set-ExecutionPolicy RemoteSigned
3. Navigate into my working folder: cd "C:\Users\guluz\OneDrive\Masaüstü\personal-folder"
4. Clone my GitHub repository correctly: git clone https://github.com/glzrygt/guluzar-yigit-portfolio.git
5. Move my local project files into the cloned repository folder  
6. Configure Git credentials (`user.name` & `user.email`)  
7. Commit and push all changes:
   git add .
   git commit -m "Update portfolio files"
   git push origin main
## The NDVI (OpenLayers) Challenge

After completing the version control setup, I focused again on the NDVI part of my project.
I wanted to include an interactive NDVI (Normalized Difference Vegetation Index) map in my portfolio’s Projects page,
so visitors could explore real satellite-based vegetation data interactively.

At first, I copied the example code from the OpenLayers website, but it didn’t work locally — the map stayed blank.
The console displayed CORS errors and “module not found” messages. I turned again to AI assistance (ChatGPT-5) to understand why this happened.
Together, we discovered that:
-The NDVI example was written using ES Modules (import statements),
-Browsers cannot run such imports directly without a development server,
-A module bundler (like Vite) was necessary to handle imports and run the map properly.
## How I Solved It
We followed these steps to get the OpenLayers NDVI map working:
1. Created a package.json file to manage dependencies:
{
  "name": "ndvi-map",
  "dependencies": { "ol": "10.6.1" },
  "devDependencies": { "vite": "^3.2.3" },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
2. Installed dependencies:
   npm install
3. Created main.js to handle the NDVI logic:
  
   import Map from 'ol/Map.js';
   import TileLayer from 'ol/layer/WebGLTile.js';
   import GeoTIFF from 'ol/source/GeoTIFF.js';
   const source = new GeoTIFF({
   sources: [
   { url: '.../B04.tif', max: 10000 },
   { url: '.../B08.tif', max: 10000 }
   ],
   });

   const layer = new TileLayer({
   style: {
   color: [
   'interpolate', ['linear'],
   ['/', ['-', ['band', 2], ['band', 1]], ['+', ['band', 2], ['band', 1]]],
   -0.2, [191, 191, 191],
    0.25, [128, 179, 71],
    0.5, [48, 110, 28],
    0.65, [0, 69, 0]
   ],
   },
   source,
   });

   const map = new Map({
    target: 'map',
   layers: [layer],
   view: source.getView()
   });
5. Added it to my projects.html with:
   <div id="map"></div>
   <script type="module" src="/main.js"></script>
6. Started the development server:
   npm run start
The map finally loaded successfully and computed live NDVI values from real Sentinel-2 bands.
   

## What I Learned
- The difference between copying files and using version control  
- How to safely give PowerShell permission to run scripts  
- How to properly use `cd` to switch directories before cloning  
- The Git workflow: **add → commit → push**  
- Why the OpenLayers example alone was insufficient — because it required hosting local JS and HTML files together, which the browser blocks if not run locally or via a local server  
- How AI guidance can support understanding and documenting every step clearly  
-The difference between static HTML embedding and modular JavaScript development
-Why browsers block GeoTIFF requests without proper CORS handling
-How to configure PowerShell permissions safely
-How Vite works as a modern web development server
-How to combine AI explanations with practical debugging to understand every step deeply

## Reflection
This exercise taught me to not just follow tutorials but to **understand the reasoning** behind each step.  
Instead of copying code, I now know how to **diagnose, test, and fix errors systematically** — exactly what a professional engineer should do.
This process taught me that problem-solving in software isn’t just about following tutorials — it’s about understanding the logic behind each layer of the workflow.
By combining my own effort with AI-assisted reasoning, I learned to:
-identify the root cause of technical issues,
-apply the correct tools,
-and document the full process transparently.
Now, I understand how real web-based GIS applications integrate front-end, data layers, and local hosting environments.

## Acknowledgment
With the assistance of AI tools (ChatGPT-5),
I debugged both PowerShell and OpenLayers-related issues, understood how module bundlers like Vite work, and properly documented the entire setup process.
AI acted not as a shortcut but as a technical collaborator — helping me ask why things work the way they do, not just how to make them work.
## Author
**Gülüzar Yiğit**  
Geomatics Engineering Student  
Hacettepe University



