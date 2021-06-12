import './style.css'
import * as THREE  from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'; 

let scene, camera, renderer, skyboxGeo, skybox,controls;


function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,25,30000);
  camera.position.set(1200,-250,2000);

  //renderer
  renderer = new THREE.WebGL1Renderer({
    canvas:document.querySelector('#bg'),
  });

  const light = new THREE.AmbientLight(0xffffff,12);
  

  
  controls = new OrbitControls(camera,renderer.domElement);
  controls.enabled =true;
  controls.minDistance = 700;
  controls.maxDistance = 1500;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.render(scene, camera);
  skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
  
  
  skybox = new THREE.Mesh(skyboxGeo,materialArray);
  window.addEventListener('resize', onWindowResize, false);
  scene.add(skybox,light);
  animate();
}




let materialArray = [];
let texture_ft = new THREE.TextureLoader().load( './static/skybox/skybox_front.png');
let texture_bk = new THREE.TextureLoader().load( './static/skybox/skybox_back.png');
let texture_up = new THREE.TextureLoader().load( './static/skybox/skybox_up.png');
let texture_dn = new THREE.TextureLoader().load( './static/skybox/skybox_down.png');
let texture_rt = new THREE.TextureLoader().load( './static/skybox/skybox_right.png');
let texture_lf = new THREE.TextureLoader().load( './static/skybox/skybox_left.png');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

   
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}


init();