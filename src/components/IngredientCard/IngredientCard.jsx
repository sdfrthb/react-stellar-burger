import React from "react";
import styles from "./IngredientCard.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { allIdSelector } from "../../services/selectors/constructorSelector";
import { addIngredientDetails } from "../../services/slices/burgerIngredientsSlice";
import { openModal } from "../../services/slices/modalSlice";

function IngredientCard(props) {
  const { ingredient } = props;
  const { image, name, price, _id } = ingredient;

  const ingredientsId = useSelector(allIdSelector)
  const dispatch = useDispatch()

  const onOpenDetails = () => {
    dispatch(openModal('ingredientDetails'))
    dispatch(addIngredientDetails(ingredient))
  }
  const counter = React.useMemo(() => {
    if (ingredientsId) {
      return (
        ingredientsId.filter((id) => id === _id).length || false
      );
    }
    else {
      return false
    }
  }, [ingredientsId]);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  return (
    <li className={styles.item} onClick={onOpenDetails} ref={dragRef}>
      {counter && <Counter count={counter} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.wrapper}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h2 className={`text text_type_main-default ${styles.name}`}>{name}</h2>
    </li>
  );
}

IngredientCard.propTypes = {
  ingredient: ingredientPropType,
};

export default IngredientCard;
