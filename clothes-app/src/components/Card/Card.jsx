import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, image }) => {
  // Desestructurar la prop 'name' de las props
  return (
    <div className={style.mainContainer}>
      <h4 className={style.title}>{name}</h4>
      <img className={style.card} src={image} alt="" />
      {<Link className={style.link}>Learn more</Link>}
    </div>
  );
};

export default Card;
