let button=document.getElementById('add picture')
button.addEventListener('click',getfetch)
 let ulEl=document.getElementById('list')
//Retrieve the JSON
function getfetch(){
fetch("https://dog.ceo/api/breeds/image/random")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  // Do something with the JSON
  .then((response) => {
    showDogimage(response.message);
  })
  // If something goes wrong
  .catch((error) => console.log(error));
}

  function showDogimage(item){
    let body=document.getElementById('container')
      let liEl=document.createElement('li')
      let image=document.createElement('img')
      ulEl.innerText=''
      ulEl.appendChild(liEl)
      liEl.appendChild(image)
      image.src=item
  }
