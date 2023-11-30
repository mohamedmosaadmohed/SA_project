const search = document.querySelector(".search");
const images = document.querySelectorAll(".menu-img-container");

search.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.trim().toLowerCase();

  images.forEach((image) => {
    const itemName = image.dataset.name.toLowerCase();
    if (itemName.includes(searchValue)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

search.addEventListener("keyup", () => {
  if (search.value === "") {
    images.forEach((image) => {
      image.style.display = "block";
    });
  }
});









// let filterarray=[];


// let product=[
//     {
//         id:1,
//         name:"Magnam Tiste",
//         src:"../assets/img/menu/menu-item-1.png",
//         desc:"Lorem, deren, trataro, filede, nerada"
//     },
//     {
//         id:2,
//         name:"Aut Luia",
//         src:"../assets/img/menu/menu-item-2.png",
//         desc:"Lorem, deren, trataro, filede, nerada"
//     },
//     {
//         id:3,
//         name:"Est Eligendi",
//         src:"../assets/img/menu/menu-item-3.png",
//         desc:"Lorem, deren, trataro, filede, nerada"
//     },
//     {
//         id:4,
//         name:"Eos Luibusdam",
//         src:"../assets/img/menu/menu-item-4.png",
//         desc:"Lorem, deren, trataro, filede, nerada"
//     },
//     {
//         id:5,
//         name:"cheese pizza",
//         src:"../assets/img/menu/menu-item-5.png",
//         desc:"Lorem, deren, trataro, filede, nerada"
//     },
//     {
//         id:6,
//         name:"steak",
//         src:"../assets/img/menu/menu-item-6.png",
//         desc:"Lorem, deren, trataro, filede, nerada"
//     }
// ]

// function showitems(currentarray){
//        document.getElementById("card").innerHTML = "";
//         for(var i =0; i<currentarray.length;i++ ){
//                 document.getElementById("card").innerHTML +=`
//                    <div class="col-md-4 mt-3">
//                    <div class="card p-3 ps-5 pe-5">
//                       <h4 class="text-capitalize text-center">${currentarray[i].name}</h4>
//                       <img src="${currentarray[i].src}" width="100%" heigth="320px"/>
//                       <p class="mt-2">${currentarray[i].desc}</P>
//                       <button class="btn btn-primary w-100 mx-auto">more</button>
//                       </div>
//                       </div>
                
//                 `



//         }




// }

// document.getElementById("myinput").addEventListener("keyup",function(){

//     let text = document.getElementById("myinput").value;
//     filterarray = product.filter(function(a){
//         if(a.name.includes(text)){
//             return a.name;
//         }
//     });
    
    
// });
// if(this.value ==""){
//     showitems(product);
// }
// else {
//     if(filterarray = ""){
//         document.getElementById("para").style.display='block';
//         document.getElementById("card").innerHTML="";


//     }
//     else{
//         showitems(filterarray);
//         document.getElementById("para").style.display='none';
//     }
// }









       

// const categories = [...new Set(product.map((item)=> {return item}))]        
     
// document.getElementById('container').addEventListener('keyup',(e)=>{
//     const searchdata = e.target.value.toLowerCase();
//     const filterdata = categories.filter((item)=>{
//         return(
//             item.desc.toLowerCase().includes(searchdata)

//         )
//     })
//     displayitem(filterdata)
// });

// const displayitem = (items)=>{
// document.getElementById('root').innerHTML=items.map(item)=>{
//     var {src , desc , name} = item;
//     return(
//     `<div class = 'box'>
//     <div class='img-box'>
//     <img class='images' src=${src}></img>
//     </div>
//     <div class='bottom'>
//         <p>${desc}</p>
//         <h2>$ ${name}</h2>




//     `
//     )



// }

// }
