import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientsTabs.module.css";
import PropTypes from "prop-types";

function IngredientsTabs({ active }) {
  return (
    <div className={styles.wrapper}>
      <Tab value="bun" active={active === "bun"}>
        Булки
      </Tab>
      <Tab value="sauce" active={active === "sauce"}>
        Соусы
      </Tab>
      <Tab value="main" active={active === "main"}>
        Начинки
      </Tab>
    </div>
  );
}

IngredientsTabs.propTypes = {
  active: PropTypes.string
};

export default IngredientsTabs;
