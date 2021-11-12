// Find the latest version by visiting https://cdn.skypack.dev/three.

import * as THREE from 'https://cdn.skypack.dev/three@0.134.0';
import * as dat from "dat.gui"
//import {OrbitControls} from 'https://cdn.skypack.dev/three@0.134.0/examples/jsm/controls/orbitcntrols';
//console.log(OrbitControls)


const gui =new dat.GUI()
const world={
  plane:{
    width:10,
    height:10,
    widthsegments:10,
    heightsegments:10,
    
  },
}
gui.add(world.plane,"widthsegments",1,10).
onChange(generatePlane)
gui.add(world.plane,"heightsegments",1,10).
onChange(generatePlane)
gui.add(world.plane,"width",1,10).
onChange (generatePlane)
gui.add(world.plane,"height",1,10).
onChange (generatePlane )
//generateplanefunction where z components of the segments change
function generatePlane(){
  planemesh.geometry.dispose()
  planemesh.geometry=new THREE.PlaneGeometry(world.plane.width,world.plane.height,world.plane.widthsegments,world.plane.heightsegments)
  const {array}=planemesh.geometry.attributes.position;
  for (let i=0; i<array.length;i+=3)
  {
    const x= array[i];
    const y=array[i+1];
    const z=array[i+2];
    array[i+2]=z + Math.random();
  }
  }
const scene = new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer=new THREE.WebGLRenderer();
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement)
//const boxgeometry=new THREE.BoxGeometry(1,1,1)
//const material=new THREE.MeshBasicMaterial({color:0xffff00})
//const mesh =new THREE.Mesh(boxgeometry,material)
//scene.add(mesh)
//plane geometry
const planegeometry=new THREE.PlaneGeometry(5,5,10,10)
const planematerial=new THREE.MeshPhongMaterial({color:0x0000ff,
                                                 side:THREE.DoubleSide,
                                                flatShading:THREE.FlatShading})
                                                
                                               
const planemesh =new THREE.Mesh(planegeometry,planematerial)
scene.add(planemesh)


const light =new THREE.DirectionalLight(0xffffff,1) 
light.position.set(0,0,1)
scene.add(light)
//new OrbitControls(camera, camera.direction, camera.up)
camera.position.z=5;

function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
  planemesh.rotation.x +=0.1

  
 
}
animate()

