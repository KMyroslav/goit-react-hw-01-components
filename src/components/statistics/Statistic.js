import styles from "./Statistic.module.css";
import propTypes from "prop-types";

const Statistic = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {true && <h2 className={styles.title}>{title}</h2>}
      <ul className={`${styles.statList} list`}>
        {stats
          .sort((a, b) => b.percentage - a.percentage)
          .map((el) => {
            return (
              <li
                key={el.id}
                className={styles.item}
                style={{
                  backgroundColor: `rgba(
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)}, 0.85)`,
                }}
              >
                <span className={styles.label}>{el.label}</span>
                <span className={styles.percentage}>{el.percentage}</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  stats: propTypes.arrayOf(propTypes.object).isRequired,
  title: propTypes.string,
};

export default Statistic;
