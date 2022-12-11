import './App.sass';
import HeaderTop from "../headerTop/HeaderTop"
import HeaderMiddle from '../headerMiddle/headerMiddle';

function App() {
  return (
    <div className='container'>
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
    </div>
  );
}

export default App;