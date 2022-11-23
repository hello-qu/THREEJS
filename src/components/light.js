import {RectAreaLight} from "three";

function createLight (){

  const light = new RectAreaLight("#F2BD42",10);

  light.position.set(10,10,10);
  return light

}

export {createLight}
