import styles from "./OrderDetails.module.css";
import doneImage from "../../images/done.png";
import { useSelector } from "react-redux";
import { oderIdSelector } from "../../services/selectors/orderSelector";

function OrderDetails() {
  const id = useSelector(oderIdSelector)
  console.log(id)
  return (
    <div className={styles.container}>
      <span className="text text_type_digits-large mt-4 mb-8">{id}</span>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={doneImage} className="mb-15" alt="done-icon"></img>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
