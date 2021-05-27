
//let api_rick = fetch("https://rickandmortyapi.com/api/character/65")
//console.log(api_rick)
//api_rick.then(res => res.json())
//      console.log(data.name)
//}
//  ).catch(erro => console.log(error))


// let contenedor = document.getElementById("ApiDataRM")
// let api_rick = fetch("https://rickandmortyapi.com/api/character")
// let estado

// // console.log(api_rick)

// api_rick.then(res => res.json())
//     .then(data => {
//         contenedor.innerHTML += `<img src="${DataRickMorty.image}">`
//     }
//     ).catch(erro => console.log(error))

function alertinicial() {
  Swal.fire({
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_807725-MLA26847544577_022018-O.webp',
    imageHeight: 300,
    imageAlt: 'A tall image',
    title: 'Bienvenido Terricola',
    text: 'Api Rick & Morty, Consumida Por Santiago Roa',
    footer: 'Aun estoy aprendiendo...',
    timer: '2500'
  })

}

let api_rickmorty
let api_rick = "https://rickandmortyapi.com/api/character"
function paginas(pagin) {
  api_rickmorty = fetch(api_rick + "?page=" + pagin)
  let contenedor = document.getElementById("ApiDataRM")
  contenedor.innerHTML = ''

  // console.log(api_rick)
  api_rickmorty.then(res => res.json())
    .then(DataRickMorty => {
      console.log(DataRickMorty)
      for (const infor of DataRickMorty.results) {
        contenedor.innerHTML += `<div class="card text-center" style="width: 12.3rem; margin: 15px; font-family: cursive; color: green; background-color: rgba(0, 183, 255, 0.664); ">
            <img src="${infor.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${infor.name}</h5>
              <p>${"Especie" + ":" + " " + infor.species}</p>
              <p>${"Genero" + ":" + " " + infor.gender}</p>
              <p>${"Id" + ":" + " " + infor.id}</p>
              
            </div>
          </div>`
      }
    }).catch(error_rick => console.log(error_rick))
}
paginas(1)