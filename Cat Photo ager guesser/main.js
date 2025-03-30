document.querySelector('button').addEventListener('click', getAnime)

function getAnime(){

   const firstName = document.querySelector('input').value

    fetch(`https://api.agify.io?name=${firstName}`)
    .then(res => res.json()) // parse response as JSON 
     .then(data => { 
       console.log(data)
      let age = data.age
    
    fetch(`https://cataas.com/cat/says/${age}`)
    .then(data => {
      document.querySelector('img').src = data.url
    })})
    
}
