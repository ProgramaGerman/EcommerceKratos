import  "./App.css";
import Sidebar from "./components/sidebar/sidebar";

function App() {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-content">
                <div className="Titulo">
                    <h1>Bienvenido a Ecommerce</h1>
                    <p>Explora productos, ofertas y mucho más desde el menú lateral.</p>
                </div>
                {/* Aquí puedes agregar más contenido */}
            </main>
        </div>
    );
}

export default App;