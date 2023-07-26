import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Feeling from './components/Feeling/Feeling';
import Profile from './components/Profile/Profile';
import Intro from './components/Intro/Intro';
import SwiftChat from './components/SwiftChat/SwiftChat';
import Hooks from './components/Hooks/Hooks';
import VideoBG from './components/VideoBG/VideoBG';
import Waitlist from './components/Waitlist/Waitlist';
import Beta from './components/Beta/Beta';
import Footer from './components/Footer/Footer';
import Stream from './components/Stream/Stream';
import Explore from './components/Explore/Explore';
import Clips from './components/Clips/Clips';
import Download from './components/Download/Download'
import Blufff from './components/Blufff/Blufff';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero />
      </div>
      <Feeling />
      <Clips />
      {/* <Profile /> */}
      <Intro />
      <Stream />
      <Explore />
      <SwiftChat />
      <Hooks />
      <VideoBG />
      <Blufff />
      <Waitlist />
      <Beta />
      <Footer />
      <Download />

    </div>
  );
}

export default App;
