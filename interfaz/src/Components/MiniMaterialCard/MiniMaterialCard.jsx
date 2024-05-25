import { useNavigate } from "react-router-dom";
import "./MiniMaterialCard.css";

const MiniMaterialCard = ({
  estado,
  id,
  material,
  ubicacion,
}) => {
  const navigate = useNavigate()
  const handleClick = () => {   
    navigate(`/detalle/${id}`)
  };
  return (
    <div className="mini-card-container">
      <div className="mini-card-info">
        <div>
          <h2>{material}</h2>
        </div>
        <div>
          <strong>Estado:</strong> {estado}
        </div>
        <div>
          <strong>Ubicacion:</strong> {ubicacion}
        </div>
        <button className="btn btn-detalles" onClick={handleClick}>
          Detalles
        </button>
      </div>
    </div>
  );
};

export default MiniMaterialCard;
