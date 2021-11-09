import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

import "./App.scss";

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default App;
