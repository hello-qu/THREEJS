import {Mesh, BoxBufferGeometry, MeshStandardMaterial} from "three";


function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2)
  const material = new MeshStandardMaterial({color:0xffffff})
  const cube = new Mesh(geometry, material);
  return cube
}

export {createCube}
