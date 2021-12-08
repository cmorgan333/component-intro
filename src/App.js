import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';
import ProductTights from './components/productTights/productTights';
import PopCategories from './components/popCategories/popCategories';
import HeroTwo from './components/heroTwo/heroTwo';
import FooterComp from './components/footerComp/footerComp';

import BootstrapComponent from './components/bootstrapComp/boostrapComp';
import FontAwesomeComponent from './components/fontAwesomeComp/fontAwesomeComp';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
     <FontAwesomeComponent></FontAwesomeComponent>
<Hero></Hero>
<ProductTights>
<BootstrapComponent></BootstrapComponent>
</ProductTights>
<PopCategories></PopCategories>
<HeroTwo></HeroTwo>
<FooterComp></FooterComp>
</div>
  );
}

export default App;
