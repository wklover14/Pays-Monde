import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact='true' to="/"> Acceuil </NavLink>
            <NavLink exact='true' to="/a-propos" > A propos </NavLink>
        </div>
    );
};

export default Navigation;