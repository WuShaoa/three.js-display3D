import * as THREE from 'three';
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    let scene = new THREE.Scene();
    // create a camera, which defines where we're looking at
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    // tell the camera where to look
    camera.position.set(0, 0, 10);
    // create a render and set the size
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    // add the output of the render function to the HTML
    document.body.appendChild(renderer.domElement);


    let loader = new THREE.ObjectLoader();
    const resource = loader.load("resource_url",
        // onLoad callback
        function onLoad(resource) {
            // do something with resource
            // scene.add(resource);
        },
        // (optional) onProgress callback
        // function onProgress() {
            // do something
        // },
        // onError callback
        function onError(err) {
            console.log('An error happened');
        }
    );

    // var clock = new THREE.Clock();
    // function for re-rendering/animating the scene
    function tick() {
        requestAnimationFrame(tick);
        renderer.render(scene, camera);
    }
    tick();
}
init();