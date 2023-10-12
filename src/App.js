import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Intro from './page/Intro';
import Story from './page/Story';
import Header from './component/Header';
import Navbar from './component/Navbar';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Intro />} />    
        <Route path='/story' element={<Story />} />    
        <Route path='/header' element={<Header />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/productAll' element={<ProductAll />} />  {/*12 /work/productAll->/productAll, 데이터확인O */}    
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Container>    
  );
}

export default App;
