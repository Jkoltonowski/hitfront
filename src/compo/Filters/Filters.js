import React, { useState, useEffect } from 'react';
import './filters.css';
function Filters({ onFilterChange, currentCategory, isVisible }) {
    const [category, setCategory] = useState(currentCategory || '');
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        if (currentCategory) {
            setCategory(currentCategory);
        }
    }, [currentCategory]);
    const applyFilters = () => {
        onFilterChange({
            category,
            name: searchTerm,
            price: { min: minPrice, max: maxPrice },
        });
    };
    if (!isVisible) {
        return null;
    }
    return (
        <div className="filters-container"> 
            <div className='tekstfiltry'>
             Zastosuj filtry 
            </div>
            
            <input
                type="text"
                placeholder="Szukaj po nazwie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Wszystkie kategorie</option>
                <option value="Oleje">Oleje</option>
                <option value="FiltryPowietrza"> Filtr Powietrza </option>
                <option value="Tlok"> Tłoki </option>
                <option value="Filtr"> Filtr Oleju </option>
            </select>
            <input
                type="number"
                placeholder="Minimalna cena"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Maksymalna cena"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button onClick={applyFilters}>Zastosuj filtry</button>
        </div>
    );
}

export default Filters;
