let bar = document.getElementById("bar")
let ul = document.getElementById("ul")
ul.style.opacity= 0
bar.addEventListener("click",()=>{
   
if(ul.style.opacity== 1 ){
    ul.style.opacity= 0
}else{
    ul.style.opacity= 1
}
})
