import styles from './IngredientDetails.module.css'
import Nutrients from '../Nutrients/Nutrients';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types';

function IngredientDetails(props) {
  const { image_large, proteins, fat, carbohydrates, calories, name } = props.ingredient
  return (
    <div className={`${styles.wrapper} mb-15 pt-5`}>
      <img src={image_large} alt={name} />
      <p className='text text_type_main-medium mt-4 mb-8'>{name}</p>
      <ul className={styles.list}>
        <Nutrients nutrient='Калории' qt='ккал' number={calories}></Nutrients>
        <Nutrients nutrient='Белки' qt='г' number={proteins}></Nutrients>
        <Nutrients nutrient='Жиры' qt='г' number={fat}></Nutrients>
        <Nutrients nutrient='Углеводы' qt='г' number={carbohydrates}></Nutrients>
      </ul>
    </div>
   );
}

IngredientDetails.propTypes = {
  ingredient: ingredientPropType
}

export default IngredientDetails;
