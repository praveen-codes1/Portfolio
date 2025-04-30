import myphoto from './suit_pic1.jpg';


function Header(props){
    return(
        <header>
            <h1>Welcome to {props.name}'s portfolio!</h1>
            <h2>An aspiring {props.job}.</h2>
            <img src={myphoto} alt="Profile Pic" height={200}/>
        </header>
    );
}
export default Header;