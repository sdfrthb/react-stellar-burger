
import IngredientsTabs from '../IngredientsTabs/IngredientsTabs';
import IngredientsType from '../IngredientsType/IngredientsType';
import styles from './BurgerIngredients.module.css'
import PropTypes from 'prop-types';

function BurgerIngredients(props) {
  const {ingredients, onOpenDetails} = props
  return (
    <section className={styles.ingredients_section}>
      <h1 className='text text_type_main-large mb-5 mt-5'>Соберите бургер</h1>
      <IngredientsTabs />
      <div className={styles.type_wrapper}>
      <IngredientsType ingredients={ingredients.filter((ingredient) => ingredient.type === 'bun')}
        title={'Булки'} onOpenDetails={onOpenDetails}></IngredientsType>
      <IngredientsType ingredients={ingredients.filter((ingredient) => ingredient.type === 'sauce')}
        title={'Соусы'} onOpenDetails={onOpenDetails}></IngredientsType>
      <IngredientsType ingredients={ingredients.filter((ingredient) => ingredient.type === 'main')}
        title={'Начинки'} onOpenDetails={onOpenDetails}></IngredientsType>
      </div>
    </section>
   );
}

BurgerIngredients.propTypes = {
  ingredients:PropTypes.array,
  onOpenDetails:PropTypes.func
}

export default BurgerIngredients;

