let obj = {
    name: "sanjay",

    regulerFun: function(){
       setTimeout(function(){
            console.log("reguler function =>", this.name); // ❌ this is NOT obj
       }, 500);
    },

    arrowFun: function (){
        setTimeout(() =>{
             console.log("arrow function =>", this.name); // ✅ this is obj
        }, 400);
    }
};

obj.regulerFun();
obj.arrowFun();


// ---------------------------------------------second -------------------------------------
let obj2 = {
    name:"sanjay",
    regulerFun: function(){
      
            console.log("reguler function =>",this.name)
      
    },
    arrowFun:  () =>{
        
             console.log("arrow function =>",this.name)
        
    }
}
obj2.regulerFun()
obj2.arrowFun()

// --------------------------thirt --------------------------------------

function Person(name) {
  this.name = name;
}
const p = new Person("Dinesh");
console.log(p.name); // ✅ Dinesh

const Person = (name) => {
  this.name = name;
};
// new Person("Dinesh"); // ❌ TypeError: Person is not a constructor




