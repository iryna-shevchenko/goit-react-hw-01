import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  const statsData = Object.entries(stats);

  return (
    <section className={css.profile}>
      <div className={css.userInfo}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        {statsData.map(([idx, value]) => (
          <li key={idx} className={css.statsItem}>
            <span>{idx[0].toUpperCase() + idx.slice(1)}</span>
            <span className={css.statsValue}>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}