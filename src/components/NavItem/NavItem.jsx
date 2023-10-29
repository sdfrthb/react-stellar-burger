import React from "react";
import styles from "./NavItem.module.css";

export function NavItem(props) {
  const { icon, isOpen, children } = props;
  const openClass = isOpen ? null : "text_color_inactive";

  return (
    <div className={`${styles.nav_item} pr-5 pl-5 pt-4 pb-4`}>
      {icon}
      <p className={`text text_type_main-default ${openClass}`}>{children}</p>
    </div>
  );
}
