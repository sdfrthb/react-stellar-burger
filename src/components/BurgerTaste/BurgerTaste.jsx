import styles from "./BurgerTaste.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  bunSelector,
  fillingsSelector,
} from "../../services/selectors/constructorSelector";
import { useSelector } from "react-redux";
import TasteItem from "../TasteItem/TasteItem";
import React from "react";

function BurgerTaste() {
  const bun = useSelector(bunSelector);
  const fillings = useSelector(fillingsSelector);

  return (
    <div className={styles.taste_wrapper}>
      {!bun ? (
        <span className={`${styles.start} text_type_main-large`}>
          Добавьте булочку
        </span>
      ) : (
        <>
          {" "}
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name}(верх)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={`ml-8`}
          />
          <div className={styles.items}>
            {fillings.map((item, index) => {
               return (<React.Fragment key={item._customId}>
                <TasteItem index={index} item={item}/>
               </React.Fragment>)
            })}
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name}(низ)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={`ml-8`}
          />{" "}
        </>
      )}
    </div>
  );
}

export default BurgerTaste;
