import { useState } from 'react'

export const AddCategory = ({ onNewValue }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewValue(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={handleChange}
            />
            {/* <button type="submit">Guardar</button> */}
        </form>
    )
}
