import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Hats from './routes/hats/hats.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';





const App = () => {
 
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path='shop' element={<Shop />} /> */}
          <Route path='hats' element={<Shop category='hats' />} />
          <Route path='jackets' element={<Shop category='jackets'/>} />
          <Route path='mens' element={<Shop category='mens'/>} />
          <Route path='sneakers' element={<Shop category='sneakers'/>} />
          <Route path='women' element={<Shop category='women'/>} />

          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout/>} />
        </Route>
    
    </Routes>
    
  );
};

export default App;
