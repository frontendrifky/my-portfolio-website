import { useState } from 'react';
import ThemeToggle from './themeToggle';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault(); // Prevent the default anchor behavior

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false); // Close the menu after clicking
        }
    };

    return (
        <div className='navbar-section'>
            <div className='navbar'>
                <div className='logo'>
                    <h1>RIFKY</h1>
                </div>
                <div className='right'>
                    <ThemeToggle />
                    <input
                        type="checkbox"
                        id="checkbox"
                        checked={menuOpen}
                        onChange={handleMenuToggle}
                        style={{ display: 'none' }} // Hide checkbox, use label as toggle button
                    />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                    <div className={`menu ${menuOpen ? 'show' : ''}`}>
                        <ul>
                            <li>
                                <a href="#about" style={{ textDecoration: 'none' }} onClick={(e) => handleScroll(e, 'about')}>About</a>
                            </li>
                            <li>
                                <a href="#project" style={{ textDecoration: 'none' }} onClick={(e) => handleScroll(e, 'project')}>Project</a>
                            </li>
                            <li>
                                <a href="#contact" style={{ textDecoration: 'none' }} onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
