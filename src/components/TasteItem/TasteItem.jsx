import { useDispatch, useSelector } from "react-redux";
import { fillingsSelector } from "../../services/selectors/constructorSelector";
import {
  deleteIngredient,
  replaceIngredient,
} from "../../services/slices/constructorSlice";
import styles from "./TasteItem.module.css";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types";

function TasteItem({ item, index }) {
  const fillings = useSelector(fillingsSelector);
  const dispatch = useDispatch();
  // console.log(key)
  const [, dragRef] = useDrag({
    type: "sort",
    item: { ingredient: item },
  });
  const handleClose = () => {
    dispatch(deleteIngredient(item));
  };
  const findIndex = (item) => {
    return fillings.indexOf(item);
  };
  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ ingredient }) {
      if (ingredient._customId === item._customId) return;
      dispatch(
        replaceIngredient({
          indexFrom: findIndex(ingredient),
          indexTo: index,
          ingredient: ingredient,
        })
      );
    },
  });
  return (
    <div className={styles.item_wrapper} ref={(node) => dropRef(dragRef(node))}>
      <DragIcon />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={handleClose}
      />
    </div>
  );
}

TasteItem.propTypes = {
  item: ingredientPropType,
  index: PropTypes.number,
  key: PropTypes.string
};

export default TasteItem;
