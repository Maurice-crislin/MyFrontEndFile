
import * as THREE from './build/three.module.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45,1,0.1,1000);
camera.position.set(0,0,15);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(500,500);
renderer.setClearColor(0x808080);
document.body.appendChild(renderer.domElement);


//model
const loader = new GLTFLoader();
loader.load(
    '/model/monkey.gltf',
    function(gltf){
        console.log('wuhu');
        scene.add(gltf.scene);
        const light = new THREE.AmbientLight(0xFFFFF);
        scene.add(light);
        renderer.render(scene,camera);
    },
    function onProgress(xhr){
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function onError(err){
        console.log('出错啦啦啦');
    }
)