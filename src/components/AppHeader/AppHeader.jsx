import React from "react";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavItem } from "../NavItem/NavItem";

export default function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.nav_list}>
            <NavItem isOpen={true} icon={<BurgerIcon type="primary" />}>
              Конструктор
            </NavItem>
            <NavItem icon={<ListIcon type="secondary" />}>
              Лента заказов
            </NavItem>
            <Logo />
            <NavItem icon={<ProfileIcon type="secondary" />}>
              Личный кабинет
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
}
