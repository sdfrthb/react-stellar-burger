import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientsTabs.module.css"

function IngredientsTabs() {
  const [current, setCurrent] = React.useState('buns')

  return (
    <div className={styles.wrapper}>
      <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>Булки</Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
        Начинки
      </Tab>

    </div>
  );
}

export default IngredientsTabs;
