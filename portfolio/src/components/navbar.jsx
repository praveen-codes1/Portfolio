import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/About">About</Link>
            <br/>
            <Link to="/TogCoun">Toggle and Counter</Link>
            <br/>
            <Link to="/Header">Header</Link>
            <br/>
            <Link to="/ConForm">Contact</Link>
        </nav>
    );
}

export default NavBar;