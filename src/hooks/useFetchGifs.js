import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Esto es un custom hooks
export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(setGifs);
        setIsLoading(false);
    }, []);

    return {
        gifs,
        isLoading
    };
}