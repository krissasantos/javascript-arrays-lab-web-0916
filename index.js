// const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)

}

function destructivelyPrependKitten(name){
  kittens.unshift(name)

}

function destructivelyRemoveLastKitten(name){
  kittens.pop()

}


function destructivelyRemoveFirstKitten(){

    kittens.shift()
}

function appendKitten(name) {
  // kittens = [...kittens, name]
  // return kittens
return [...kittens, name]
  // return kittens
  
}

function prependKitten(name) {
  return [name, ...kittens]
}


function removeFirstKitten() {
  return kittens.slice(1)

}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)

}
// function removeLastKitten(name) {

//   return kittens.slice(-1)

  
// }





