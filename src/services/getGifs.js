const apiKey = 'iXTVl2zWjXqbWaCsxwp28y24ws7EZjAX'

// Por defecto sera un objeto vacio y si no llega sera morty
export default function getGifs({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return (
        fetch(apiURL)
      .then(res => res.json())
      .then(response =>{
        const {data} = response
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {title, id, url}
        })
        console.log(gifs);
        return gifs
      })
    )
}