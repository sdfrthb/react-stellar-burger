import { useState, createRef } from "react";
import { ingredientsSelector } from "../../services/selectors/ingredientsSelectors";
import IngredientsTabs from "../IngredientsTabs/IngredientsTabs";
import IngredientsType from "../IngredientsType/IngredientsType";
import styles from "./BurgerIngredients.module.css";
import { useSelector } from "react-redux";

function BurgerIngredients() {
  const ingredients = useSelector(ingredientsSelector);

  const [currentTab, setCurrentTab] = useState("bun");

  const bunRef = createRef(null);
  const saucesRef = createRef(null);
  const mainRef = createRef(null);

  const handleScroll = () => {
    const result = [
      {
        name: "bun",
        coords: bunRef.current.getBoundingClientRect().top,
      },
      {
        name: "sauce",
        coords: saucesRef.current.getBoundingClientRect().top,
      },
      {
        name: "main",
        coords: mainRef.current.getBoundingClientRect().top,
      },
    ]
      .filter((elem) => elem.coords > 0)
      .sort((a, b) => a.coords - b.coords);

    if (result.length) {
      setCurrentTab(result[0].name);
    }
  };

  return (
    <section className={styles.ingredients_section}>
      <h1 className="text text_type_main-large mb-5 mt-5">Соберите бургер</h1>
      <IngredientsTabs active={currentTab} />
      <div className={styles.type_wrapper} onScroll={handleScroll}>
        <IngredientsType
          ingredients={ingredients.filter(
            (ingredient) => ingredient.type === "bun"
          )}
          ref={bunRef}
          title={"Булки"}
        ></IngredientsType>
        <IngredientsType
          ingredients={ingredients.filter(
            (ingredient) => ingredient.type === "sauce"
          )}
          ref={saucesRef}
          title={"Соусы"}
        ></IngredientsType>
        <IngredientsType
          ingredients={ingredients.filter(
            (ingredient) => ingredient.type === "main"
          )}
          ref={mainRef}
          title={"Начинки"}
        ></IngredientsType>
      </div>
    </section>
  );
}

export default BurgerIngredients;
