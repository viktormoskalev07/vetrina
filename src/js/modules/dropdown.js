 //dropdown

 function dropdown() {
    const drop = document.querySelector(".dropdown__activator");
    if(drop) {
    drop.addEventListener("click", function () {
      drop.classList.toggle("dropdown_open");
    });

    } 
  }
  
 
    dropdown();
 
  //dropdown

  console.log(this)