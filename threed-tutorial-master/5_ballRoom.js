import * as THREE from './build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

var renderer,scene,camera,ball,controls;
/**
 * 实例化渲染器
 */
function initRenderer(){
    renderer = new THREE.WebGLRenderer();//实例化渲染器
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xFFFFFF));//0x000000
    document.body.appendChild(renderer.domElement);
}
/**
 * 创建相机
 */
function initCamera(){
    //创建透视投影相机，视角45度，画幅比例 宽比高，近平面距离0.1，远平面1000
    camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.z=8;
    camera.up.y=1;
    camera.lookAt(new THREE.Vector3(0,0,0.01));
}

/**
 * 创建场景：
 */
function initScene(){
    scene=new THREE.Scene();
}

/**
 * 添加灯光
 */
function initLight(){
    // const ambiLight = new THREE.AmbientLight(0x333333);
    // scene.add(ambiLight);

    // const direLight = new THREE.DirectionalLight(0xffffff, 1.0);  // 平行光 DirectionalLight (光源颜色的RGB数值, 光源强度数值) 
    // direLight.position.set(500, 500, 500);
    // scene.add(direLight);

    // const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.1 );//环境光
    // scene.add( ambientLight );
    // var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.2 );//平行光( DirectionalLight ) 平行光或者说方向光
    // directionalLight.position.set( 1, 0.1, 0 ).normalize();
    // var directionalLight2 = new THREE.DirectionalLight( 0xff2ffff, 0.2 );
    // directionalLight2.position.set( 1, 0.1, 0.1 ).normalize();
    // scene.add( directionalLight );
    // scene.add( directionalLight2 );
    // var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.2 );//创建半球光,就是天光效果
    // hemiLight.position.set( 0, 1, 0 );
    // scene.add( hemiLight );
    // var directionalLight = new THREE.DirectionalLight( 0xffffff );
    // directionalLight.position.set( 1, 500, - 20 );
    // directionalLight.castShadow = true;
    // directionalLight.shadow.camera.top = 18;
    // directionalLight.shadow.camera.bottom = - 10;
    // directionalLight.shadow.camera.left = - 52;
    // directionalLight.shadow.camera.right = 12;
    // scene.add(directionalLight);
    var pointLight = new THREE.PointLight(0xFFFFFF); // 创建点光源
    pointLight.visible = false; //不显示点光源
    
    pointLight.intensity = 2;// 点光源强度设置为2
    pointLight.position.set(0.0,0.0,0.0);
    //distance属性表示光源的照射距离，该属性决定了光源可以照射多远，如果将该属性的值设置为4，那么从点光源的位置开始光线强度会慢慢衰减，到距离为4的位置衰减为0，也就是距离超过4将看不到点光源发出的光
    pointLight.distance = 16;// 点光源距离设置为

    scene.add(pointLight) // 将点光源添加到场景
}
/**
 * 创建模型
 * threejs 添加一个球体。并把全景图作为贴图贴到球体上
 */
function initObject(){

    const loader = new THREE.TextureLoader();

    let sphereGeometry = new THREE.SphereGeometry(16, 50, 50);//球体
    sphereGeometry.scale(16, 16, -16);
    let texture = loader.load("/texture/livingRoom.jpg");
    let sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
    ball = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(ball);
}


/**
	* 初始化用户交互
**/
function initControls() {
    // controls = new OrbitControls( camera, renderer.domElement );
    // controls.enableDamping = true;
    // controls.enableZoom = true;
    // controls.autoRotate = false;
    // controls.autoRotateSpeed = 2;
    // controls.enablePan = true;
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 60;
    controls.enablePan = false;
}


/**
 * 渲染界面
 */
function initRender(){
    renderer.clear();
    renderer.render(scene,camera);//渲染界面
}
/**
 * 动画效果
 */
function animate(){
    requestAnimationFrame(animate);
    if(!ball||!controls)return;
    //earth.rotation.x += 0.02; //每帧网格模型的沿x轴旋转0.02弧度
    ball.rotation.y += 0.001; //每帧网格模型的沿y轴旋转0.02弧度
    controls.update();
    initRender() //渲染界面
}

/**
 * 启动
 */
function init(){

    
    initRenderer();
    initCamera();
    initScene();
    initControls();
    initLight();
    initObject();
    initRender();
    animate();
}


init();