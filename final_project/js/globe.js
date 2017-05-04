var myCamera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('container');

function init() {
  scene = new THREE.Scene();

    var path = "js/Yokohama/";
    var format = ".jpg";
    var urls = [
        path + 'pos-x' + format, path + 'neg-x' + format,
        path + 'pos-y' + format, path + 'neg-y' + format,
        path + 'pos-z' + format, path + 'neg-z' + format
    ];

  scene.background = new THREE.CubeTextureLoader().load(urls);

  var width = window.innerWidth;
  var height = window.innerHeight;

  myCamera = new THREE.PerspectiveCamera(45, width/height, 1, 25000);
  myCamera.position.set(318, 418, 292);
  scene.add(myCamera);

  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  material = new THREE.MeshBasicMaterial({envMap: scene.background});

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(myCamera, renderer.domElement);

}

function animate() {
    requestAnimationFrame(animate);
    var date = new Date();
    var timer = date.getTime() * 0.0002;

    renderer.render(scene, myCamera);
    controls.update();

}

init();
animate();