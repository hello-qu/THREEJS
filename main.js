import {World} from "./src/World/world";


function main(){

  const container = document.querySelector("#app")

  const world = new World(container)
  world.render()

}

main()
