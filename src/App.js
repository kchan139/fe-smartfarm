import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import RoomTab from './RoomTab/RoomTab';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <>
    <div class="body">
      <sidebar>
        <Sidebar/>
      </sidebar>
      <maincontent>
        <Header/>
        <RoomTab/>
        <Dashboard/>
      </maincontent>
    </div>
    </>
  )
}

export default App;
