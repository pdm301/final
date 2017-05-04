var myCamera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('container');

function init() {
  scene = new THREE.Scene();

  var path = "images/Earth/";
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
  myCamera.position.set(0, 0, 600);
  scene.add(myCamera);

  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  material = new THREE.MeshBasicMaterial({envMap: scene.background});

    var loader = new THREE.BufferGeometryLoader();

    loader.load('untitled.json', function(geometry) {
        mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(80, 80, 80);
        mesh.position.y = -80;
        scene.add(mesh);


    });


  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);

  container.appendChild(renderer.domElement);

  document.onclick = function(){
    console.log(myCamera.position);
  }
  if(myCamera.position.x >= 120 && myCamera.position.x <= 42){
    window.open("http://www.google.com");
        }

}

function animate() {
  requestAnimationFrame(animate);

  
  var date = new Date();
  var timer = date.getTime() * 0.0002;
  myCamera.position.x = 600 * Math.cos(timer); 
  myCamera.position.z = 600 * Math.sin(timer);
  myCamera.lookAt(scene.position);
  myCamera.updateMatrixWorld();

  renderer.render(scene, myCamera);
}

init();
animate();