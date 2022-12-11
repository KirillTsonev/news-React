import './App.sass';
import HeaderTop from "../headerTop/HeaderTop";
import HeaderMiddle from '../headerMiddle/HeaderMiddle';
import HeaderBottom from '../headerBottom/HeaderBottom';
import BigPic from '../bigPic/BigPic';
import Grid from '../grid/Grid';

function App() {
  return (
    <div className='container'>
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
      <BigPic></BigPic>
      <Grid></Grid>
    </div>
  );
}

export default App;