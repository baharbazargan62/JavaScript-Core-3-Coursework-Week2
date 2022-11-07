fetch("https://dog.ceo/api/breeds/image/random")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  // Do something with the JSON
  .then((response) => {
    makePageDogGallery(response.message);
  })
  // If something goes wrong
  .catch((error) => console.log(error));



function makePageDogGallery(item){
    let button1=document.querySelector("#button1");
    let button2=document.querySelector("#button2");
    let div=document.querySelector("#container");
    let ul=document.querySelector("#ul-list")
    button1.addEventListener("click",function(){
        let liEl=document.createElement("li")
        ul.innerHTML=""
        ul.appendChild(liEl)
        let image=document.createElement("img")
        liEl.appendChild(image)
        image.src=item

    })
    
}