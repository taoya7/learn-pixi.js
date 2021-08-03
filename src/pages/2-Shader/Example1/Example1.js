import * as PIXI from 'pixi.js';

let diffX=0;
let diffY=0;
let width = 500;
let height = 500;
let app;
let pointerStart = new PIXI.Point()
let pointerDiffStart = new PIXI.Point()
let pointerDownTarget = 1;
let uniforms;
uniforms  = {
    uResolution: new PIXI.Point(width, height),
    uPointerDown: pointerDownTarget,
    uPointerDiff: new PIXI.Point(),
}
let BG_FRAGMENT = `
// More info here: https://stackoverflow.com/a/28540641/4908989
#ifdef GL_ES
precision mediump float;
#endif


// This function returns 1 if 'coord' correspond to a grid line, 0 otherwise
// 如果“坐标”对应于网格线，则此函数返回1，否则返回0
float isGridLine (vec2 coord) {
  vec2 pixelsPerGrid = vec2(50.0, 50.0);
  vec2 gridCoords = fract(coord / pixelsPerGrid);
  vec2 gridPixelCoords = gridCoords * pixelsPerGrid;
  vec2 gridLine = step(gridPixelCoords, vec2(1.0));
  float isGridLine = max(gridLine.x, gridLine.y);
  return isGridLine;
}

void main () {
  // Coordinates for the current pixel
  vec2 coord = gl_FragCoord.xy;
  // 设置颜色
  vec3 color = vec3(0.0);
  // If it is a grid line, change red channel to 0.8
  color.g = isGridLine(coord) * 1.0;
  // Assing the final rgba color to 'gl_FragColor'
  gl_FragColor = vec4(color, 1.0);
}
`

let STAGE_FRAGMENT = `
#ifdef GL_ES
precision mediump float;
#endif

// Uniforms from Javascript
uniform vec2 uResolution;
uniform float uPointerDown;

// The texture is defined by PixiJS
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

// Function used to get the distortion effect
vec2 computeUV (vec2 uv, float k, float kcube) {
  vec2 t = uv - 0.5;
  float r2 = t.x * t.x + t.y * t.y;
  float f = 0.0;
  if (kcube == 0.0) {
    f = 1.0 + r2 * k;
  } else {
    f = 1.0 + r2 * (k + kcube * sqrt(r2));
  }
  vec2 nUv = f * t + 0.5;
  nUv.y = 1.0 - nUv.y;
  return nUv;
}

void main () {
  // Normalized coordinates
  vec2 uv = gl_FragCoord.xy / uResolution.xy;

  // Settings for the effect
  // Multiplied by 'uPointerDown', a value between 0 and 1
  float k = -1.0 * uPointerDown;
  float kcube = 0.5 * uPointerDown;
  float offset = 0.02 * uPointerDown;
  
  // Get each channel's color using the texture provided by PixiJS
  // and the 'computeUV' function
  float red = texture2D(uSampler, computeUV(uv, k + offset, kcube)).r;
  float green = texture2D(uSampler, computeUV(uv, k, kcube)).g;
  float blue = texture2D(uSampler, computeUV(uv, k - offset, kcube)).b;
  
  // Assing the final rgba color to 'gl_FragColor'
  gl_FragColor = vec4(red, green, blue, 1.0);
}
`

function init(){
    app = new PIXI.Application({
        width: width,
        height: height,
        autoDensity: true,
        antialias: true,
        transparent: false, // transparent将整个Canvas标签的透明度进行了设置
        resolution: 1, // resolution让Pixi在不同的分辨率和像素密度的平台上运行变得简单
        backgroundColor: 0x000000
    });
    document.getElementById('example1').append(app.view);
    initBackground();
    initState();
    initEvent();

    app.ticker.add(()=>{
        uniforms.uPointerDown += (pointerDownTarget - uniforms.uPointerDown) * 0.075
        uniforms.uPointerDiff.x += (diffX - uniforms.uPointerDiff.x) * 0.2
        uniforms.uPointerDiff.y += (diffY - uniforms.uPointerDiff.y) * 0.2
    })
}
function initBackground(){
    // Bg
    let background = new PIXI.Sprite();
    background.width = width;
    background.height = height;
    let backgroundFilter = new PIXI.Filter(undefined, BG_FRAGMENT);
    background.filters = [backgroundFilter]
    app.stage.addChild(background);
    // End
}
function initState(){
    let stageFilter = new PIXI.Filter(undefined, STAGE_FRAGMENT, uniforms);
    app.stage.filters = [stageFilter];
}
function initEvent(){
    //使舞台具有互动性，以便它可以收听事件
    app.stage.interactive = true;
    app.stage
    .on('pointerdown', onPointerDown)
    .on('pointerup', onPointerUp)
    .on('pointerupoutside', onPointerUp)
    .on('pointermove', onPointerMove)
}
// On pointer down, save coordinates and set pointerDownTarget
function onPointerDown (e) {
    console.log('down')
    const { x, y } = e.data.global
    pointerDownTarget = 1
    pointerStart.set(x, y)
    pointerDiffStart = uniforms.uPointerDiff.clone()
}

// On pointer up, set pointerDownTarget
function onPointerUp () {
console.log('up')
pointerDownTarget = 0
}

// On pointer move, calculate coordinates diff
function onPointerMove (e) {
    const { x, y } = e.data.global
    if (pointerDownTarget) {
        console.log('dragging')
        diffX = pointerDiffStart.x + (x - pointerStart.x)
        diffY = pointerDiffStart.y + (y - pointerStart.y)
    }
}
// Run Code
init();