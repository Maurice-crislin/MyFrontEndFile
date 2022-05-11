import * as THREE from './build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

var renderer,scene,camera,box,controls;
/**
 * 实例化渲染器
 */
function initRenderer(){
    renderer = new THREE.WebGLRenderer();//实例化渲染器
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor(new THREE.Color(0x000000));
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
    const ambiLight = new THREE.AmbientLight(0x333333);
    scene.add(ambiLight);

    const direLight = new THREE.DirectionalLight(0xffffff, 1.0);  // 平行光 DirectionalLight (光源颜色的RGB数值, 光源强度数值) 
    direLight.position.set(500, 500, 500);
    scene.add(direLight);

    const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.1 );//环境光
    //scene.add( ambientLight );
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.2 );//平行光( DirectionalLight ) 平行光或者说方向光
    directionalLight.position.set( 1, 0.1, 0 ).normalize();
    var directionalLight2 = new THREE.DirectionalLight( 0xff2ffff, 0.2 );
    directionalLight2.position.set( 1, 0.1, 0.1 ).normalize();
    //scene.add( directionalLight );
    //scene.add( directionalLight2 );
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.2 );//创建半球光,就是天光效果
    hemiLight.position.set( 0, 1, 0 );
    //scene.add( hemiLight );
    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 1, 500, - 20 );
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 18;
    directionalLight.shadow.camera.bottom = - 10;
    directionalLight.shadow.camera.left = - 52;
    directionalLight.shadow.camera.right = 12;
    //scene.add(directionalLight);
}



/**
 * 创建模型
 * skyBox 方法是最容易理解的，在我们身处的场景内，
 * 无非就是6个面，上下、前后、左右。
 * 将这6个面的视觉处理成图片就得到6张不同方向视觉的图片。
 */
function initObject(){

    const loader = new THREE.TextureLoader();

    let picList = ["left", "right", "top", "bottom", "front", "back"];
    let boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    let boxMaterials = [];
    picList.forEach((item) => {
        let texture = loader.load(`/texture/${item}.png`);
        boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }))
    });
    
    box = new THREE.Mesh(boxGeometry, boxMaterials);
    boxGeometry.scale(10, 10, -10);
    scene.add(box);
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
    if(!box||!box.rotation||!controls)return;
    //earth.rotation.x += 0.02; //每帧网格模型的沿x轴旋转0.02弧度
    box.rotation.y += 0.001; //每帧网格模型的沿y轴旋转0.02弧度
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