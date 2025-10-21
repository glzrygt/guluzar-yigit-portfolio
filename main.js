// ---- Parameters ----
const segments = 10;
const defaultMinColor = '#0300AD';
const defaultMaxColor = '#00ff00';
const defaultMinValue = -0.5;
const defaultMaxValue = 0.7;

// ---- HTML element bindings ----
const minColorInput = document.getElementById('min-color');
const maxColorInput = document.getElementById('max-color');
const minValueInput = document.getElementById('min-value-input');
const maxValueInput = document.getElementById('max-value-input');
const minValueOutput = document.getElementById('min-value-output');
const maxValueOutput = document.getElementById('max-value-output');

minColorInput.value = defaultMinColor;
maxColorInput.value = defaultMaxColor;
minValueInput.value = defaultMinValue.toString();
maxValueInput.value = defaultMaxValue.toString();

// ---- Utility functions ----
function getVariables() {
  const variables = {};
  const minColor = minColorInput.value;
  const maxColor = maxColorInput.value;
  const scale = chromaScale([minColor, maxColor]).mode('lab');
  const minValue = parseFloat(minValueInput.value);
  const maxValue = parseFloat(maxValueInput.value);
  const delta = (maxValue - minValue) / segments;

  for (let i = 0; i <= segments; ++i) {
    const color = scale(i / segments).rgb();
    const value = minValue + i * delta;
    variables[`value${i}`] = value;
    variables[`red${i}`] = color[0];
    variables[`green${i}`] = color[1];
    variables[`blue${i}`] = color[2];
  }
  return variables;
}

function colors() {
  const stops = [];
  for (let i = 0; i <= segments; ++i) {
    stops[i * 2] = ['var', `value${i}`];
    const red = ['var', `red${i}`];
    const green = ['var', `green${i}`];
    const blue = ['var', `blue${i}`];
    stops[i * 2 + 1] = ['color', red, green, blue];
  }
  return stops;
}

// ---- NDVI calculation expression ----
const ndvi = [
  '/',
  ['-', ['band', 2], ['band', 1]],
  ['+', ['band', 2], ['band', 1]],
];

// ---- GeoTIFF Source ----
// (proxy kaldırıldı çünkü AWS COG zaten CORS header gönderiyor)
const source = new GeoTIFF({
  sources: [
    {
      url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B04.tif',
      max: 10000,
    },
    {
      url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/B08.tif',
      max: 10000,
    },
  ],
});

// ---- NDVI Layer ----
const layer = new WebGLTile({
  source: source,
  style: {
    variables: getVariables(),
    color: ['interpolate', ['linear'], ndvi, ...colors()],
  },
});

// ---- Update style variables ----
function update() {
  layer.updateStyleVariables(getVariables());
  minValueOutput.innerText = parseFloat(minValueInput.value).toFixed(1);
  maxValueOutput.innerText = parseFloat(maxValueInput.value).toFixed(1);
}
minColorInput.addEventListener('input', update);
maxColorInput.addEventListener('input', update);
minValueInput.addEventListener('input', update);
maxValueInput.addEventListener('input', update);
update();

// ---- Map initialization ----
// v9'daki getView() burada yok; kendimiz View oluşturuyoruz
const map = new Map({
  target: 'map',
  layers: [layer],
  view: new View({
    center: fromLonLat([36.5, 0.0]), // Sentinel sahasının ortası (Afrika sınırında test için)
    zoom: 7,
  }),
});
