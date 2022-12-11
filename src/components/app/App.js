import './App.sass';
import HeaderTop from "../headerTop/HeaderTop";
import HeaderMiddle from '../headerMiddle/HeaderMiddle';
import HeaderBottom from '../headerBottom/HeaderBottom';

function App() {
  return (
    <div className='container'>
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </div>
  );
}

export default App;