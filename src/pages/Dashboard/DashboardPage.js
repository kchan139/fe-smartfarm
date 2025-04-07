import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import RoomTab from './RoomTab/RoomTab';
import Dashboard from './Dashboard';
import "./DashboardPage.css"
import Control from './Control/Control';

function DashboardPage() {
    return (
        <>
            <body>
                <sidebar>
                    <Sidebar/>
                </sidebar>
                <maincontent>
                    <Header/>
                    <RoomTab/>
                    <Dashboard/>
                    <Control/>
                </maincontent>
            </body>
        </>
    )
}

export default DashboardPage;  // Exporting the component for use in other files.  The filename is also DashboardPage.js, so it's not necessary to specify the file extension.  Just the component name is sufficient.  This allows other files to import this component using `import DashboardPage from './DashboardPage';` or `import { DashboardPage } from './DashboardPage';` (if using React Router).  The latter option is preferred for named imports.  The default import
