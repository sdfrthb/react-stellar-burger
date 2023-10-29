import PropTypes from "prop-types";
import styles from "./ModalOverlay.module.css";

function ModalOverlay({ children, onClose }) {
  function handleCloseModal(event) {
    if (event.target === event.currentTarget) onClose();
  }
  return (
    <div className={styles.overlay} onMouseDown={handleCloseModal}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
};

export default ModalOverlay;
