
var arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a", "a"];
// { a: 3, b: 2, c: 2, d: 2, e: 2, f: 1, g: 1, h: 3 }


// first
const obj = {}; //default no value

for (let i of arr) {
    if (obj[i]) {
        obj[i]++  //then come here to increase valie if more then 1 time
    } else { 
        // default assign 1
        obj[i] = 1
    }
}

// second

arr.map((r) => {
    if (obj[r]) {
        obj[r]++
    } else {
        obj[r] = 1
    }
})

console.log(obj);

// third way



for (var i = 0; i < arr.length; i++) {

    if (obj[arr[i]]) {
        obj[arr[i]]++
    } else {
        obj[arr[i]] = 1
    }
}


console.log(obj)



// third way


var numbers = [12, 10, 15, 11, 14, 13, 16];

var arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a", "a"];


var map = {};
arr.forEach((data) => {
    if (map[data]) {
        map[data] += 1;
        return;
    }
    map[data] = 1;
});

console.log(map)
console.log(Object.entries(map)) 



// ---------------------------------------important -------------------------------------------

var arr = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a", "a"];
// { a: 3, b: 2, c: 2, d: 2, e: 2, f: 1, g: 1, h: 3 }

function countDublicate(arr){
var obj = {};
for(var i = 0; i<arr.length; i++){
  if(obj[arr[i]]){
   obj[arr[i]] ++
  }else{
  obj[arr[i]] = 1
  }
}
return obj;
}

var output = countDublicate(arr);
console.log(output)
