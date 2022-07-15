import * as THREE from './build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import Stats from './jsm/libs/stats.module.js';
import {GUI} from './jsm/libs/dat.gui.module.js';

var renderer,scene,camera,cubeList=[],controls,stats,gui;
/**
 * 实例化渲染器
 */
function initRenderer(){
    renderer = new THREE.WebGLRenderer();//实例化渲染器
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setClearColor(new THREE.Color(0x000000));//-0xFFFFFF
    renderer.shadowMap.enabled = true;//首先我们需要告诉渲染器我们需要阴影效果 开启阴影，加上阴影渲染
    document.body.appendChild(renderer.domElement);
}
/**
 * 初始化帧率监听器
 */
function initStats(){
    stats = new Stats();
    document.body.append(stats.dom);
}
/**
 * 辅助坐标平面
 */
function initHelper(){
    var axes = new THREE.AxesHelper(30);
    scene.add(axes);
    var gridHelper = new THREE.GridHelper( 100, 30, 0x2C2C2C, 0x888888 );
    scene.add(gridHelper);
}
/**
 * dat.gui
 */
function initGui(){
    gui = new GUI();
    gui.add(camera.position,'x',-5,5);
}
/**
 * 创建相机
 */
function initCamera(){
    //创建透视投影相机，视角45度，画幅比例 宽比高，近平面距离0.1，远平面1000
    camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.set(100,300,100);//相机位置
    camera.up.y=1;

    camera.lookAt(new THREE.Vector3(100,300,100));//相机指向
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
    // const ambiLight = new THREE.AmbientLight(0x333333);//环境光不能投影
    // scene.add(ambiLight);

    const direLight = new THREE.DirectionalLight(0xffffff, 1.0);  // 平行光 DirectionalLight (光源颜色的RGB数值, 光源强度数值) 
    direLight.position.set(300, 300, 80);
    direLight.castShadow = true;
    scene.add(direLight);

    var spotLight = new THREE.SpotLight(0xffffff);//聚光灯
    spotLight.position.set(-200, 160, 85);
    spotLight.castShadow = true;//允许投射阴影
    scene.add(spotLight);


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

    // var pointLight = new THREE.PointLight(0xFFFFFF); // 创建点光源
    // pointLight.visible = false; //不显示点光源
    
    // pointLight.intensity = 2;// 点光源强度设置为2
    // pointLight.position.set(16,16,16);
    // //distance属性表示光源的照射距离，该属性决定了光源可以照射多远，如果将该属性的值设置为4，那么从点光源的位置开始光线强度会慢慢衰减，到距离为4的位置衰减为0，也就是距离超过4将看不到点光源发出的光
    // pointLight.distance = 16;// 点光源距离设置为
    // pointLight.castShadow = true;//pointLight
    // scene.add(pointLight) // 将点光源添加到场景
}

/**
 * 创建单个cube
 */
function addSingleCube(){
    const cubeSize = 1.0;
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMaterial = new THREE.MeshNormalMaterial({
    transparent: true,
    opacity: 0.5
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;

    cube.position.x =  Math.round(Math.random() * 50);
    cube.position.y =  Math.round(Math.random() * 50);
    cube.position.z =  Math.round(Math.random() * 50);

    return cube;
}

/**
 * 创建模型
 * 
 */
function initObject(){
    for (let i = 0; i < 1000; i++) {
        let cube= addSingleCube();
        cubeList.push(cube);
        scene.add(cube);
    }
    

        // var sphereGeo = new THREE.SphereGeometry(6, 40, 40);//创建球体
        // var sphereMat = new THREE.MeshLambertMaterial({//创建材料
        //     color:0x0000FF,
        //     wireframe:false
        // });
        // var sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);//创建球体网格模型
        // sphereMesh.position.set(0, 6, 0);//设置球的坐标
        // sphereMesh.castShadow = true;//允许投射阴影
        // sphereMesh.receiveShadow = true;//允许接收阴影
        // scene.add(sphereMesh);//将球体添加到场景


        // const planeGeometry = new THREE.PlaneGeometry(300, 300,10,10); // 生成平面几何
        // const planeMaterial = new THREE.MeshStandardMaterial({ // 生成材质
        // color: 0xFFFFFF,
        // wireframe:false
        // });
        // const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial); // 生成平面网格
        // planeMesh.receiveShadow = true; // 设置平面网格为接受阴影的投影面
        // //注意： 只有receiveShadow属性为true的物体才能够接受阴影
        // planeMesh.position.set(0, 0, -20);//设置平面的坐标
        // planeMesh.rotation.x = -0.5 * Math.PI;//将平面绕X轴逆时针旋转90度
        // scene.add(planeMesh);
}

/**
 * 射线检测
 */

function initRayCaster(){
    window.addEventListener('click',choose);
}

/**
 * 射线点选
 */
function choose(e){
    console.log("点击了click");
    //鼠标单击位置横坐标 e.clientX
    //鼠标单击位置纵坐标 e.clientY
    //屏幕坐标转WebGL标准设备坐标
    var x = (e.clientX / window.innerWidth) * 2 - 1; //WebGL标准设备横坐标
    var y = -(e.clientY / window.innerHeight) * 2 + 1; //WebGL标准设备纵坐标
    //创建一个射线投射器`Raycaster`
    let rayCaster = new THREE.Raycaster();
    //通过鼠标单击位置标准设备坐标和相机参数计算射线投射器`Raycaster`的射线属性.ray
    rayCaster.setFromCamera(new THREE.Vector2(x,y),camera);
    //返回.intersectObjects()参数中射线选中的网格模型对象
    // 未选中对象返回空数组[],选中一个数组1个元素，选中两个 数组两个元素
    let intersects = rayCaster.intersectObjects(cubeList);
    if(intersects.length>0){
        //选中的第一个设置为透明
        console.log("选中了",intersects[0]);
        intersects[0].object.material.transparent = true;
        intersects[0].object.material.opacity = 0.0;
        
    }
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
    stats.update();
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
    initGui();
    initStats();
    initControls();
    initHelper();
    initLight();
    initObject();
    initRayCaster();
    initRender();
    animate();
}


init();