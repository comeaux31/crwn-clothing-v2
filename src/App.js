import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Hats from './routes/hats/hats.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';





const App = () => {
 
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='hats' element={<Hats />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
    
    </Routes>
    
  );
};

export default App;
