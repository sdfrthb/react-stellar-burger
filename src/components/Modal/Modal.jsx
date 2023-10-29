import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

export default function Modal({ children, heading }) {
  const { onClose } = children.props;
  useEffect(() => {
    const handleCloseByEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleCloseByEsc);
    return () => document.removeEventListener("keydown", handleCloseByEsc);
  }, [onClose]);

  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={`${styles.modal} pt-10 pr-10 pl-10`}>
        <div className={styles.heading_wrapper}>
          <h3 className="text text_type_main-large">{heading}</h3>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  heading: PropTypes.string,
  onClose: PropTypes.func,
};
