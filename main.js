import './style.css'

import * as  THREE from './node_modules/three/build/three.js';


const scene,camera, renderer ;

scene = new THREE.Scene();
renderer = new THREE.WebGL1Renderer({canvas:document.querySelector('#bg')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera  = new THREE.PerspectiveCamera(75,window.innerHeight/window.innerWidth,1,1000)
camera.position.setZ(10);
renderer.render(scene,camera)

const geometry = new THREE.TorusGeometry(20,6,20,40, Math.PI*1.8) 
const material = new THREE.MeshStandardMaterial({color:0xffffff, wireframe:true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);


}

animate()