import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();

  // Lógica para obtener el detalle del producto por ID
  return (
    <div>
      {/* Detalle del producto */}
    </div>
  );
}