import './style.css'
import * as THREE  from 'three';

let scene, camera, renderer, skyboxGeo, skybox,material;


function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,25,30000);
  camera.position.set(1200,-250,2000);

  //renderer
  renderer = new THREE.WebGL1Renderer({
    canvas:document.querySelector('#bg'),
  });

  const light = new THREE.AmbientLight(0xffffff);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.render(scene, camera);
  skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
  
  skybox = new THREE.Mesh(skyboxGeo,materialArray);
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

  skybox.rotation.y += 0.002;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function createPathStrings(filename){
  const basePath = './static/skybox/';
  const baseFilename = basePath + filename;
  const fileType = '.png';
  const sides = [ 'ft', 'bk','up','dn','rt','lf'];
  const pathStrings =sides.map(side =>{
    return baseFilename +'_'+side+fileType;
  });
  return pathStrings
}

let skyboxImage = 'free_world';
function createMaterialArray(filename){
  const skyboxImagepaths  = createPathStrings(filename);
  const materialArray =skyboxImagepaths.map(image=>{
    let texture  = new THREE.TextureLoader().load(image);

    return new THREE.MeshBasicMaterial({map:texture, side:THREE.BackSide});
  })
  return materialArray;
}

init();