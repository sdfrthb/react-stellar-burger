import styles from "./app.module.css";
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { data } from '../../utils/data'
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

const baseUrl = 'https://norma.nomoreparties.space/api/ingredients'



function App() {
  const [ingredients, setIngredients] = React.useState([])
  const [isOderIdModalOpened, setIsOderIdModalOpened] = React.useState(false)
  const [isDetailsModalOpened, setIsDetailsModalOpened] = React.useState(false)
  const [ingredientId, setIngerdientId] = React.useState(-1)

  function handleOpenDetails(id) {
    setIngerdientId(id)
    setIsDetailsModalOpened(true)
  }

  function handleCloseDetails() {
    setIngerdientId(-1)
    setIsDetailsModalOpened(false)
  }

  const filterId = React.useMemo(
    () => ingredients.filter((item) => item._id === ingredientId)[0],
    [ingredientId]
  );

  function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  async function getData() {
    const res = await fetch(`${baseUrl}`);
    return checkResponse(res);
  }

  React.useEffect(() => {
    getData()
    .then(apiData => {
      setIngredients(apiData.data)
    })
    .catch(console.error)
    setIngredients(data)
  },[])

  return (
    <div className="text text_type_main-default">
      <AppHeader />
    {ingredients.length && ( <main className={styles.content}>
        <BurgerIngredients ingredients={ingredients} onOpenDetails={handleOpenDetails}></BurgerIngredients>
        <BurgerConstructor bun={ingredients[0]} fillings={ingredients.slice(2,10)} onOder={() => setIsOderIdModalOpened(true)}></BurgerConstructor>
      </main> ) }
    { isOderIdModalOpened && <Modal>
      <OrderDetails id='000000' onClose={() => setIsOderIdModalOpened(false)}></OrderDetails>
    </Modal>}
    { isDetailsModalOpened && <Modal heading='Детали ингредиента'>
      <IngredientDetails ingredient={filterId} onClose={handleCloseDetails}></IngredientDetails>
      </Modal>}
    </div>
  );
}


export default App;
