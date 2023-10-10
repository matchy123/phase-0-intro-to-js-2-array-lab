// Write your solution here!
// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function  array(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    let addcat1 =[...cats, name];
    return addcat1;
}

function prependCat(name){
    let addcat2 =[name,...cats];
    return addcat2;
}

function removeLastCat(){
    let catss = cats.slice(0,cats.length - 1);
    return catss;
}

function removeFirstCat(){
  let pets = cats.slice(1);
  return pets;
}