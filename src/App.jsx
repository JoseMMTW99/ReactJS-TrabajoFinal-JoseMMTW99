import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/items/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/cart/Cart";
import RedesSociales from "./components/venta-gamer/RedesSociales";

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
                    <Route path={"/redessociales"} element={<RedesSociales/>}/>
                    <Route path={"*"} element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
        </CartContextProvider>
        
    );
}

export default App;