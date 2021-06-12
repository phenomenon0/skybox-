import './style.css'
import * as THREE  from 'three';




//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,2,200);
camera.position.setZ(50);
//renderer
const renderer = new THREE.WebGL1Renderer({
  canvas:document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.render(scene, camera);