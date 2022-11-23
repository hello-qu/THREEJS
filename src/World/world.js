import {createCube} from "../components/cube";
import {createScene} from "../components/scene";
import {createCamera} from "../components/camera";
import {createLight} from "../components/light";

import {createRenderer} from "../systems/renderer";
import {Resizer} from "../systems/Resizer";

let scene,camera,renderer;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera()
    renderer = createRenderer()
    container.append(renderer.domElement)
    const resizer = new Resizer(container, camera, renderer)
  }

  render(){
    const cube = createCube()
    const light = createLight()
    let x=10,y=10,z=10;
    function relate(){
      x+=0.01, y+=0.01,z+=0.01;
      cube.rotation.set(10,y,z)
      scene.add(cube,light)
      renderer.render(scene, camera);
      window.requestAnimationFrame(relate)
    }
    relate()



  }
}

export {World}
