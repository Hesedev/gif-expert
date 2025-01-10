export const getGifs = async (category) => {
    const api_key = 'WbhJVDVFU5UoS45TfXJgRr9ECCDw3O1O';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

    return gifs;
}