import React from 'react'
import '../styles/App.scss'
import Button from './shared/Button'
import SearchInput from './shared/SearchInput'

function App() {

    const onClick = () => {
        alert('you clicked')
    }
    return (
        <div>
            <SearchInput />
        </div>
    )
}

export default App
