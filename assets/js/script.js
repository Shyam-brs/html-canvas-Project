/* Get Our Elements */
const canvas = document.getElementById("draw");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext("2d");

// Default theme
let chathams_blue = "#1A4B84";

// Apply some properties to ctx
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

// Init
let isDrawing = false;
let isErasing = false; // New variable for erasing
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing || isErasing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

function erase(e) {
  if (!isDrawing || !isErasing) return;

  ctx.clearRect(e.offsetX - 5, e.offsetY - 5, 10, 10);
}

// Event Listeners
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  isErasing ? erase(e) : ([lastX, lastY] = [e.offsetX, e.offsetY]);
});

canvas.addEventListener("mousemove", (e) => {
  draw(e);
  erase(e); // Erase while moving if erasing mode is active
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Toggle between draw and erase modes
document.getElementById("toggleMode").addEventListener("click", () => {
  isErasing = !isErasing;
  document.getElementById("toggleMode").innerText = isErasing ? "Draw Mode" : "Erase Mode";
});

// Set theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

console.log("hello world");

let num = 10;
num == 10;

function addNum(a = 10, b = 20) {
  return a + b;
}
