import React from 'react'
import Button from './Button'
import '../../styles/SearchInput.scss'

function SearchInput() {
    return (
        <div className="search-input">
            <input placeholder="Поиск по названию картины" />
            <Button className="button_main" children="Найти"/>
        </div>
    )
}

export default SearchInput
