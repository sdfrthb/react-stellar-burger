import React from "react";
import styles from "./IngredientsType.module.css";
import IngredientCard from "../IngredientCard/IngredientCard";
import PropTypes from "prop-types";

function IngredientsType(props) {
  const { ingredients, title, onOpenDetails } = props;
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`${styles.list} ml-4`}>
        {ingredients.map((ingredient) => (
          <IngredientCard
            key={ingredient._id}
            info={ingredient}
            onClick={onOpenDetails}
          ></IngredientCard>
        ))}
      </ul>
    </>
  );
}

IngredientsType.propTypes = {
  ingredients: PropTypes.array,
  title: PropTypes.string,
  onOpenDetails: PropTypes.func,
};

export default IngredientsType;
