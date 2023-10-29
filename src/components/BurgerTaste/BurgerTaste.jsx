import styles from './BurgerTaste.module.css'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

function BurgerTaste(props) {
  const { bun, fillings } = props.ingredients
  return (
    <div className={styles.taste_wrapper}>
      <ConstructorElement
        type='top'
        isLocked={true}
        text={`${bun.name}(верх)`}
        price={bun.price}
        thumbnail={bun.image}
        extraClass={`ml-8`}
      />
      <div className={styles.items}>
      {
        fillings.map(item => (
          <div key={item._id} className={styles.item_wrapper}>
            <DragIcon />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image} />
          </div>
          )
        )
      }
      </div>
    <ConstructorElement
        type='bottom'
        isLocked={true}
        text={`${bun.name}(низ)`}
        price={bun.price}
        thumbnail={bun.image}
        extraClass={`ml-8`}
      />
    </div>
   );
}

BurgerTaste.propTypes = {
  ingredients: PropTypes.object
}

export default BurgerTaste;
