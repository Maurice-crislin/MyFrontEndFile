
 //import * as THREE from '../../node_modules/three/build/three.module.js';
 import * as THREE from '../build/three.module.js';
 //import * as THREE from 'three';
 //import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
 /**
  * 实例化渲染器
  */
 function initRender(){
     let renderer = new THREE.WebGLRenderer();//实例化渲染器
     renderer.setSize(500,500);
     document.body.appendChild(renderer.domElement);
     return renderer;
     
 }
 /**
  * 创建相机
  */
 function initCamera(){
     let camera=new THREE.PerspectiveCamera(90,1,0.8,800);
     camera.position.set(0,0,15);
     return camera;
 }

 /**
  * 创建场景：
  */
 function initScene(){
     let scene=new THREE.Scene();
     return scene;
 }

 /**
  * 创建模型
  */
 function initMesh(){
     let grometry = new THREE.BoxGeometry(7,7,7);//创建几何体
     let material = new THREE.MeshNormalMaterial();//创建材质
     let mesh = new THREE.Mesh(grometry,material);//创建网格
     return mesh;
 }

 /**
  * 动画效果
  */
 function animate(renderer,scene,camera,mesh){
     requestAnimationFrame(()=>animate(renderer,scene,camera,mesh));
     mesh.rotation.x+=0.01;//每帧网格模型的沿x轴旋转0.01弧度
     mesh.rotation.y += 0.02; //每帧网格模型的沿y轴旋转0.02弧度
     renderer.render(scene,camera); //渲染界面
 }

 /**
  * 启动
  */
 function init(){
     let renderer = initRender();
     let camera = initCamera();
     let scene = initScene();
     let mesh = initMesh();
     scene.add(mesh);
     animate(renderer,scene,camera,mesh);
 }

 // 页面加载完成是调用
 window.addEventListener("load", () => {
 init();  
 });