let rootEl = document.getElementById("root")
let mainList = document.getElementById("mainList")
let btnOne = document.getElementById("btnOne")
let btnTwo = document.getElementById("btnTwo")


const convertToJson = (response) => {
    return response.json()
}

btnOne.addEventListener("click", ()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(convertToJson)
    .then((data) => {
        let liList = document.createElement("listing")
        let imgEl = document.createElement("img")
        imgEl.src = data.message
    
        btnTwo.addEventListener("click", () => {
            mainList.innerHTML = "";
          });
        liList.appendChild(imgEl)
        mainList.appendChild(liList)
        rootEl.appendChild(mainList)
    })
}).catch((error)=>console.log(error));






    
