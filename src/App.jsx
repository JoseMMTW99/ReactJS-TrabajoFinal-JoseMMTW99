import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/items/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/cart/Cart";
import RedesSociales from "./components/venta-gamer/RedesSociales";
import Checkout from "./components/cart/Checkout";
import CheckoutEnd from "./components/cart/CheckoutEnd";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<ItemListContainer />} />
                    <Route path={"/category/:id"} element={<ItemListContainer />} />
                    <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/cart/checkout"} element={<Checkout/>}/>
                    <Route path={"/cart/checkout/checkoutend"} element={<CheckoutEnd/>}/>
                    <Route path={"/redessociales"} element={<RedesSociales/>}/>
                    <Route path={"*"} element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
        
    );
}

export default App;