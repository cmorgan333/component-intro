import styles from "../popCategories/popCategories.css"

function PopCategories(){
    return(
        <div className="pop-categories">
<h1 className="pop-text">Popular Categories</h1>
<div className="pop-buttons">
    <a className="pop-btn">bottoms</a>
    <a className="pop-btn">tops</a>
    <a className="pop-btn">jackets</a>
    <a className="pop-btn">swim</a>
</div>
        </div>
    );
}

export default PopCategories;