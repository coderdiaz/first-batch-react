import clsx from 'clsx';
import styles from './account.module.css';

function Account({
  title,
  total,
  currency,
  active = false,
}) {
  return (
    <div className={clsx(styles.account, {
      [styles.active]: active,
    })}>
      <div className={styles.icon} />
      <div className={styles.details}>
        <span className={styles.detailsLabel}>{title}</span>
        <div className={styles.detailsNumerics}>
          <span className={styles.detailsTotal}>
            {total}
          </span>
          <span className={styles.detailsCurrency}>
            {currency}
          </span>
        </div>
        <a className={styles.detailsCta} href="#">
          View transactions
        </a>
      </div>
    </div>
  )
}

export default Account