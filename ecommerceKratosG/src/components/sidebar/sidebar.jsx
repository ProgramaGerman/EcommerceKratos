import "./sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Carrito</a></li>
          <li><a href="#">Favoritos</a></li>
          <li><a href="#">Mi cuenta</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;