import './App.css';
import AddShop from './components/AddShop/AddShop';
import shopImg from './assets/shop1.jpg';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-7">
          <AddShop />
          <ShopList />
          <ShopItem />
        </div>
        <div className="col-md-5 mt-5 pt-5">
          <img src={shopImg} alt="" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
}

export default App;
