import styles from './container.module.css';
import clsx from 'clsx';

function Container ({ className, children }) {
  return (
    // <div className={`${styles.container} ${className}`} />
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  )
}

export default Container
