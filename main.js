import './style.css'
import * as THREE  from 'three';

let scene, camera, renderer, skyboxGeo, skybox;


function init(){
  scene = new THREE.Scene();

  //camera
  camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,2,200);
  camera.position.setZ(50);
  //renderer
  renderer = new THREE.WebGL1Renderer({
    canvas:document.querySelector('#bg'),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth,window.innerHeight);

  renderer.render(scene, camera);
  animate();
}
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();