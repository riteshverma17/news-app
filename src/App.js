import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsProvider from "./context/NewsContext";

const App = () => {
    return (
        <NewsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </NewsProvider>
    );
};

export default App;
