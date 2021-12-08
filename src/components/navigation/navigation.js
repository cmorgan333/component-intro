import styles from "../navigation/navigation.css"


function Navigation(){
    return(
<div className="navigation">
    <div className="logolinks-holder">
<div className="logo"></div>
<div className="links">
    <a href="#" className="link">home</a>
    <a href="#" className="link">new</a>
    <a href="#" className="link">bottoms</a>
    <a href="#" className="link">tops</a>
    <a href="#" className="link">bras</a>
    <a href="#" className="link">jackets</a>
    <a href="#" className="link">swim</a>
    <a href="#" className="link">sleep</a>
    <a href="#" className="link">accessories</a>
    <a href="#" className="link">sale </a>
</div>
</div>
<div className="search-holder">
    <div className="search-text">search:</div>
    <div className="search-icon">
    <i class="fas fa-search"></i>
    </div>
</div>
</div>
    );
}

export default Navigation;