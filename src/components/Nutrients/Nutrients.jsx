import styles from "./Nutrients.module.css";
import PropTypes from "prop-types";

function Nutrients({ nutrient, qt, number }) {
  return (
    <li
      className={`${styles.nutrient_item} text text_type_main-default text_color_inactive`}
    >
      <p className={styles.info}>{`${nutrient}, ${qt}`}</p>
      <span className="text_type_digits-default">{number}</span>
    </li>
  );
}

Nutrients.propTypes = {
  nutrient: PropTypes.string,
  qt: PropTypes.string,
  number: PropTypes.number,
};

export default Nutrients;
