import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AddServices from "./Pages/AddServices/AddServices";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Manage from "./Pages/Manage/Manage";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/service/:serviceId"
                    element={<ServiceDetail></ServiceDetail>}
                ></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/addservices"
                    element={
                        <RequireAuth>
                            <AddServices></AddServices>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manage"
                    element={
                        <RequireAuth>
                            <Manage></Manage>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
