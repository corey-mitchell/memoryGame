import React from 'react';

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
            <li className="brand">
                <a href='/'>Clicky Game</a>
            </li>
            <li>
                {props.message}
            </li>
            <li>
                Score: <span>{props.correct}</span>&nbsp;|
                Top Score: <span>{props.topscore}</span>
            </li>
        </ul>
    </nav>
)

export default Navbar;