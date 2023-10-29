import React from "react";
import styles from './IngredientCard.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { ingredientPropType } from "../../utils/prop-types";

function IngredientCard(props) {
  const {info, onClick} = props
  const {image, name, price, _id } = info
  const [count, setCount] = React.useState(1)
  return (
    <li className={styles.item} onClick={() => onClick(_id)}>
      {count && <Counter count={1} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt="Картинка ингредиента" />
      <div className={styles.wrapper}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h2 className={`text text_type_main-default ${styles.name}`}>{name}</h2>
    </li>
  );
}

IngredientCard.propTypes = {
  info: ingredientPropType,
  onClick: PropTypes.func
}

export default IngredientCard;
