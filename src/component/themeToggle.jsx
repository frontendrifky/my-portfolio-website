import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    // Check saved theme or system preference
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // If no theme is saved, fallback to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    // State for managing the theme (true = dark mode, false = light mode)
    const [theme, setTheme] = useState(getInitialTheme);

    // Toggle between light and dark mode
    const toggleTheme = () => {
        setTheme((prevMode) => !prevMode);
    };

    // Apply the theme (dark or light) and save the user's preference in localStorage
    useEffect(() => {
        if (theme) {
            // If dark mode is enabled
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // If light mode is enabled
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return (
        <label className="ui-switch">
            <input type="checkbox"
            checked={theme}
            onChange={toggleTheme}
            />
            <div className="slider">
                <div className="circle"></div>
            </div>
        </label>    
    );
};

export default ThemeToggle;
