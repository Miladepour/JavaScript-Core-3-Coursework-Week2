const rootEl = document.getElementById('root')

let url = 'https://xkcd.now.sh/?comic=latest'

const convertToJson = (res) => res.json()

fetch(url)
.then(convertToJson)
.then((data) => {
    console.log(data)
    let image = document.createElement('img')
    image.src = data.img
    image.alt = data.alt
    rootEl.appendChild(image)
}).catch(error => console.log(`>>> ${error} <<<`))
