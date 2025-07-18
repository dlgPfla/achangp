import styles from '../styles/AppWrapper.module.css';

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.appContainer}>
        {children}
      </div>
    </div>
  );
}

export default AppWrapper;
