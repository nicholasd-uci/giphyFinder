document.getElementById('searchGif').addEventListener('click', event => {
    event.preventDefault()

    let search = document.getElementById('search').value

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG`)
      .then(res => {
        let gifs = res.data.data

        document.getElementById('gifs').innerHTML = ''
        
        for (let i = 0; i < gifs.length; i++) {
          let gifElem = document.createElement('img')
          gifElem.src = gifs[i].images.original.url
          gifElem.alt = gifs[i].title
          document.getElementById('gifs').append(gifElem)
        }

      })
      .catch(err => { console.log(err) })
  })


  