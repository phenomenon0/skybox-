import './style.css'
import * as THREE  from 'three';

let scene, camera, renderer, skyboxGeo, skybox,material;


function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,25,30000);
  camera.position.set(1200,-250,20000);

  //renderer
  renderer = new THREE.WebGL1Renderer({
    canvas:document.querySelector('#bg'),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.render(scene, camera);

  skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
  material = new THREE.MeshBasicMaterial({color:0xffffff});
  skybox = new THREE.Mesh(skyboxGeo);
  scene.add(skybox);
  animate();
}

function animate() {
  
  skybox.rotation.y += 0.002;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();