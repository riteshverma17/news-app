import Navbar from "../components/Navbar";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <NewsList />
            <Pagination />
        </>
    );
};

export default Home;
