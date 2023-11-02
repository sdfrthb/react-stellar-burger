import BurgerTaste from "../BurgerTaste/BurgerTaste";
import styles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { addIngredient } from "../../services/slices/constructorSlice";
import {
  allIdSelector,
  priceSelector,
} from "../../services/selectors/constructorSelector";
import { createNewOrder } from "../../services/slices/orderSlice";
import { openModal } from "../../services/slices/modalSlice";
import { orderLoadSelector } from "../../services/selectors/orderSelector";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const price = useSelector(priceSelector);
  const oderLoading = useSelector(orderLoadSelector);
  const allId = useSelector(allIdSelector)

  const onOder = () => {
    console.log(allId)
    dispatch(createNewOrder({ ingredients: allId }));
    if (!oderLoading) {
      dispatch(openModal("orderDetails"));
    }
  };

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      const newElement = { ...ingredient, _customId: uuidv4() };
      dispatch(addIngredient(newElement));
    },
  });

  return (
    <section className={styles.oder} ref={dropRef}>
      <BurgerTaste></BurgerTaste>
      <div className={`${styles.wrapper} mr-4 ml-4`}>
        <span
          className={`${styles.price_wrapper} text text_type_digits-medium`}
        >
          {price}
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="large" onClick={onOder}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
