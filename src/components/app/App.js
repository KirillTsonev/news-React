import './App.sass';
import HeaderTop from "../headerTop/HeaderTop";
import HeaderMiddle from '../headerMiddle/HeaderMiddle';
import HeaderBottom from '../headerBottom/HeaderBottom';
import BigPic from '../bigPic/BigPic';
import Grid from '../grid/Grid';
import VideoSection from '../videoSection/VideoSection';
import FiveSections from '../fiveSections/FiveSections';
import FooterTop from '../footerTop/FooterTop';
import FooterMiddle from '../footerMiddle/FooterMiddle';
import FooterBottom from '../footerBottom/FooterBottom';

function App() {
  return (
    <div className='container'>
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
      <BigPic></BigPic>
      <Grid></Grid>
      <VideoSection></VideoSection>
      <FiveSections></FiveSections>
      <FooterTop></FooterTop>
      <FooterMiddle></FooterMiddle>
      <FooterBottom></FooterBottom>
    </div>
  );
}

export default App;