import { ingredientPropType } from "../../utils/prop-types";
import BurgerTaste from "../BurgerTaste/BurgerTaste";
import styles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerConstructor(props) {
  const { bun, fillings, onOder } = props;
  const price = fillings.reduce(
    (sum, currPrice) => (sum += currPrice.price),
    bun.price
  );
  return (
    <section className={styles.oder}>
      <BurgerTaste ingredients={props}></BurgerTaste>
      <div className={`${styles.wrapper} mr-4 ml-4`}>
        <span
          className={`${styles.price_wrapper} text text_type_digits-medium`}>
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

BurgerConstructor.propTypes = {
  bun: ingredientPropType,
  fillings: PropTypes.array,
  onOder: PropTypes.func,
};

export default BurgerConstructor;
