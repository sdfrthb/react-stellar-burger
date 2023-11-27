import React from "react";
import styles from "./IngredientsType.module.css";
import IngredientCard from "../IngredientCard/IngredientCard";
import PropTypes from "prop-types";

const IngredientsType = React.forwardRef((props, ref) => {

  const { ingredients, title } = props;

  return (
    <div ref={ref}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`${styles.list} ml-4`}>
        {ingredients.map((ingredient) => (
          <IngredientCard
            key={ingredient._id}
            ingredient={ingredient}
          ></IngredientCard>
        ))}
      </ul>
    </div>
  );
})

IngredientsType.propTypes = {
  ingredients: PropTypes.array,
  title: PropTypes.string,
};

export default IngredientsType;
