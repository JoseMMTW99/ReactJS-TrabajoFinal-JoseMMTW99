import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Descuentos from './components/Descuentos';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greeting={"Esta pagina esta en desarrollo. Proximamente estara disponible las demas secciones de Venta Gamer. Esperamos que sepa disculpar las molestias, muchas gracias."}/>
            <Descuentos/>
            <Footer/>
        </div>
    );
}

export default App;