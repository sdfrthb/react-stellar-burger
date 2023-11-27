import styles from "./App.module.css";
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingSelector,
  errorSelector,
} from "../../services/selectors/ingredientsSelectors";
import { fetchIngredients } from "../../services/slices/burgerIngredientsSlice";
import {
  modalTypeSelector,
  openModalSelector,
} from "../../services/selectors/modalSelector";
import { closeModal } from "../../services/slices/modalSlice";
import { deleteAllIngredients } from "../../services/slices/constructorSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector);
  const isError = useSelector(errorSelector);
  const modalType = useSelector(modalTypeSelector);
  const isOpen = useSelector(openModalSelector);

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className="text text_type_main-default">
      <AppHeader />
      {isLoading ? (
        <span className="text_type_main-large">Загрузка...</span>
      ) : isError ? (
        <span className="text_type_main-large">Произошла ошибка</span>
      ) : (
        <main className={styles.content}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}

      {modalType === "orderDetails" && isOpen ? (
        <Modal onClose={() => {
          dispatch(closeModal())
          dispatch(deleteAllIngredients())
          }}>
          <OrderDetails />
        </Modal>
      ) : (
        ""
      )}
      {modalType === "ingredientDetails" && isOpen ? (
        <Modal
          heading="Детали ингредиента"
          onClose={() => dispatch(closeModal())}
        >
          <IngredientDetails />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
