import "./HomePage.css";
import Header from "./Header/Header.js";
import MainContent from "./MainContent/MainContent.js";

function HomePage() {
    return (
        <>
            <container>
                <div class="background-image"></div>
                <div class="overlay"></div>
                <Header></Header>
                <MainContent></MainContent>
            </container>
            
        </>
    )
}

export default HomePage;  // Exporting the component for use in other files.  The filename is also HomePage.js, so it's not necessary to specify the file extension.  Just the component name is sufficient.  This allows other files to import this component using `import HomePage from './HomePage';` or `import { HomePage } from './HomePage';` (if using React Router).  The latter option is preferred for named imports.  The default import
