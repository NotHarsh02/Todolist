const addbtn = document.querySelector("#add");
const stuff =document.querySelector("section");
const form= document.querySelector("form");

function c(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    let text =document.createElement('li');
    let spn=document.createElement('spn');
    let img=document.createElement('img');
    img.src= "assets/delete.png"
    img.classList.toggle("dlt");
    spn.classList.toggle("content");
    text.innerText=c(form.elements.content.value);
    stuff.append(spn);
    spn.append(text);
    spn.append(img)
    let dlt = document.querySelectorAll(".dlt")
    // console.dir(dlt[0].parentNode);
    for(let i=0;i<dlt.length;i++ ){
      dlt[i].addEventListener("click",()=>{
        dlt[i].parentNode.innerHTML ='';
      })
    }

    
    form.elements.content.value='';
    // spn.innerHTML="";
    // console.log(dltbtn.length);
    
});

// img.addEventListener("click",()=>{
//   console.log("success");
// })
