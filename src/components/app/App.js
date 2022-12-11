import './App.sass';
import HeaderTop from "../headerTop/HeaderTop";
import HeaderMiddle from '../headerMiddle/HeaderMiddle';
import HeaderBottom from '../headerBottom/HeaderBottom';
import BigPic from '../bigPic/BigPic';

function App() {
  return (
    <div className='container'>
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
      <BigPic></BigPic>
    </div>
  );
}

export default App;