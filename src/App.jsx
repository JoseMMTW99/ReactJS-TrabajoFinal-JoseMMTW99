import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";

function App() {
    return (
        <CartContextProvider>
            <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<ItemListContainer />} />
                    <Route path={"/category/:id"} element={<ItemListContainer />} />
                    <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"*"} element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
        </CartContextProvider>
        
    );
}

export default App;