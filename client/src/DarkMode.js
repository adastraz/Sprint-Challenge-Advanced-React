import React from 'react'
import {useDarkMode} from './hooks/useDarkMode'
import styled from 'styled-components'

const Button = styled.button`
padding:2%;
background
`
const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <>
            <nav className="navbar">
                <h1>lol</h1>
                <div className="dark-mode__toggle">
                    <button
                        onClick={toggleMode}
                        className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
                </div>
            </nav>
        </>
    )
}
export default DarkMode