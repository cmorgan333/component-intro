import styles from "./footerComp.css"

function FooterComp(){
    return(
      <div className="footer">
        <div className="section1">
          <div className="bcorp">
            <div className="cert">Certified</div>
            <div className="bcircle">B</div>
            <div className="bline"></div>
            <div className="corp">Corporation</div>
          </div>
          <div className="bcorp-info">
            <h3>We're a B Corp!</h3>
            <p className="sustain">We are a sustainable clothing company. We are here to do good!</p>
            <a className="matters">Why this matters</a>
          </div>
        </div>

       

<div className="section2">
  <div className="company-name">RegrettaRewards</div>
  <p className="open">Open up a credit card with us and you will certainly Regretta it!</p>
  <div className="apply">
    <div className="link l1"></div>
    <div className="link l2"></div>
  </div>

  <div className="dots">
    <div className="dot d1"></div>
    <div className="dot d2"></div>
  </div>
</div>



<div className="section3">
<div className="discount">
  <h1 className="discount20">Get 20% Off</h1>
  <p className="pdiscount">Sign up to get the discount</p>
  <button className="join">Join Here</button>
  <div className="privacy-link"></div>
  <div className="terms-link"></div>
</div>
</div>



      </div>
    );
}

export default FooterComp;