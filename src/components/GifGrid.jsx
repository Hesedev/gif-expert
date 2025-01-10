import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    // Esto es un custom hooks
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {(isLoading) ?
                <h2>Loading...</h2>
                :
                <div className='card-grid'>
                    {gifs.map((gif) =>
                        <GifItem key={gif.id} {...gif} />
                    )}
                </div>
            }
        </>
    )
}