import styles from "./IngredientDetails.module.css";
import Nutrients from "../Nutrients/Nutrients";
import { useSelector } from "react-redux";
import { currentIngredientSelector } from "../../services/selectors/ingredientsSelectors";

function IngredientDetails() {
  const ingredient = useSelector(currentIngredientSelector);

  const { image_large, proteins, fat, carbohydrates, calories, name } =
    ingredient;

  return (
    <div className={`${styles.wrapper} mb-15 pt-5`}>
      <img src={image_large} alt={name} />
      <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
      <ul className={styles.list}>
        <Nutrients nutrient="Калории" qt="ккал" number={calories}></Nutrients>
        <Nutrients nutrient="Белки" qt="г" number={proteins}></Nutrients>
        <Nutrients nutrient="Жиры" qt="г" number={fat}></Nutrients>
        <Nutrients
          nutrient="Углеводы"
          qt="г"
          number={carbohydrates}
        ></Nutrients>
      </ul>
    </div>
  );
}

export default IngredientDetails;
