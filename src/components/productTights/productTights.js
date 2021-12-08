import styles from "./productTights.css";

import { Carousel } from "react-bootstrap";

function ProductTops() {
    return (
        <Carousel className="tights-carousel">
    <div className="productTights-holder">
      
      <div className="info-holder">
        <div className="productTights tight1"></div>
        <div className="productDescription">
            <div className="product-name">Yoga Tights One</div>
            <div className="price">$29.99</div>
        </div>
        </div>

        <div className="info-holder">
        <div className="productTights tight2"></div>
        <div className="productDescription">
        <div className="product-name">Yoga Tights Two</div>
            <div className="price">$29.99</div>
        </div>
        </div>

        <div className="info-holder">
        <div className="productTights tight3"></div>
        <div className="productDescription">
        <div className="product-name">Yoga Tights Three</div>
            <div className="price">$29.99</div>
        </div>
        </div>

        <div className="info-holder">
        <div className="productTights tight4"></div>
        <div className="productDescription">
        <div className="product-name">Yoga Tights Four</div>
            <div className="price">$29.99</div>
        </div>
        </div>
       

    </div>
    </Carousel>
    );
}

export default ProductTops;