import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Properties from "./components/Properties";
import PropertyDetails from "./components/PropertyDetails";
import BookTour from "./components/BookTour";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/booktour" element={<BookTour />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Footer" element={<Footer/>}/>
                <Route path="/layout" element={<Layout/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
