import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();

  // Lógica para obtener los productos, filtrarlos por categoría y mostrarlos
  return (
    <div>
      {/* Lista de productos */}
    </div>
  );
}