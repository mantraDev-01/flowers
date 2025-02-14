function createRose() {
    const roseContainer = document.getElementById("rose-container");
    roseContainer.innerHTML = ""; // Clear previous rose

    // Create SVG Rose structure
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("viewBox", "0 0 100 100");

    // Create the petals of the rose using SVG paths
    const petalPaths = [
        "M 50,10 C 65,25 65,45 50,50 C 35,45 35,25 50,10 Z", // Top petal
        "M 50,10 C 35,25 35,45 50,50 C 65,45 65,25 50,10 Z", // Bottom petal
        "M 50,10 C 70,25 70,50 50,50 C 30,50 30,25 50,10 Z", // Right petal
        "M 50,10 C 30,25 30,50 50,50 C 70,50 70,25 50,10 Z", // Left petal
    ];

    // Add petal paths to the SVG
    petalPaths.forEach((pathData, index) => {
        const path = document.createElementNS(svgNamespace, "path");
        path.setAttribute("d", pathData);
        path.setAttribute("fill", "#e91e63");
        path.setAttribute("opacity", 0);
        path.setAttribute("stroke", "darkred");
        path.setAttribute("stroke-width", 1);
        path.style.animation = `petalAnim 4s ease-in-out ${index * 0.5}s forwards`;
        svg.appendChild(path);
    });

    // Create the center of the rose (a circle)
    const center = document.createElementNS(svgNamespace, "circle");
    center.setAttribute("cx", "50");
    center.setAttribute("cy", "50");
    center.setAttribute("r", "10");
    center.setAttribute("fill", "#ffccbc");
    center.setAttribute("opacity", 0);
    center.style.animation = "centerAnim 4s ease-in-out 2s forwards"; // Center appears later
    svg.appendChild(center);

    // Create the stem of the rose (rectangle)
    const stem = document.createElementNS(svgNamespace, "rect");
    stem.setAttribute("x", "45");
    stem.setAttribute("y", "60");
    stem.setAttribute("width", "10");
    stem.setAttribute("height", "30");
    stem.setAttribute("fill", "#4caf50");
    stem.setAttribute("opacity", 0);
    stem.style.animation = "stemAnim 3s ease-in-out 2s forwards"; // Stem appears after petals
    svg.appendChild(stem);

    // Create leaves
    const leafPaths = [
        "M 35,70 C 30,80 25,85 35,90 C 40,85 45,80 35,70 Z", // Left leaf
        "M 65,70 C 70,80 75,85 65,90 C 60,85 55,80 65,70 Z"  // Right leaf
    ];

    leafPaths.forEach((pathData, index) => {
        const leaf = document.createElementNS(svgNamespace, "path");
        leaf.setAttribute("d", pathData);
        leaf.setAttribute("fill", "#388e3c");
        leaf.setAttribute("opacity", 0);
        leaf.style.animation = `leafAnim 4s ease-in-out ${2.5 + index * 0.5}s forwards`;
        svg.appendChild(leaf);
    });

    // Append SVG to container
    roseContainer.appendChild(svg);
}
