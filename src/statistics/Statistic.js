const Statistic = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title ?? <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((el) => {
          return (
            <li key={el.id} className="item">
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistic;
