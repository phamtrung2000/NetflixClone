
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faListAlt, faComment , faQuestionCircle ,faCog,faGlobe,faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown,faCaretDown, faAlignLeft, faThLarge, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Manage from './components/Manage/Manage';
import {  BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import TruyenHinh from './components/TruyenHinh/TruyenHinh';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Intro from './components/Intro/Intro';
import DetailPage from './components/DetailPage/DetailPage';
import WatchPage from './components/WatchPage/WatchPage';
import User from './components/DetailUser/User'
import Confirm from './components/Login/Confirm';
import Toast from './components/ToastMessage/Toast';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/phim/detail">
            <DetailPage></DetailPage>
          </Route>
          <Route path="/phim/detail/watch">
            <WatchPage/>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/phim">
            <TruyenHinh cate="Phim lẻ"></TruyenHinh>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/">
            <Intro/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
library.add(faListAlt,faComment,faQuestionCircle,faCog,faGlobe,fab,faSearch,faBell,faInfoCircle,faCaretRight,faUndoAlt,faChevronRight,faVolumeUp,faVolumeOff,faVolumeMute,faPlay,faPlus,faThumbsUp,faThumbsDown,faChevronDown,faCaretDown,faAlignLeft,faThLarge)
