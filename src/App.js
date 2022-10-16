import './App.css';
import {Note} from "./Note"
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Side} from "./Side";
import { Aside } from './Aside_left';
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
     <Note textName="Resize the browser window to see the responsive effect." />
     <Header hText="My Website" pText="With a flexible layout." /> 
     {/* kindly ask on how to use the <b> bold tag using react</b> */}
     <Navbar linkName="link"/>
     <div className="row">
     <Side hTwo="About Me" photoOfme="Photo of me:" image="Image" pText="Some text about me in culpa qui officia deserunt mollit anim.."  hThree="More Text" pTag="Lorem ipsum dolor sit ame." />
     <Aside hTwoFirst="TITLE HEADING" hFiveFirst="Title description, Dec 7, 2017" image="Image" 
     pFirst="Some text.." pSecond="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
     hTwoSecond="TITLE HEADING" hFiveSecond="Title description, Sep 2, 2017" pThird="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."/>
     </div>
     <Footer hText="Footer" />
    </div>
  );
}

export default App;
