import styles from './StatusBar.module.css';

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.time}>9:41</div>
      <div className={styles.icons}>
        <img
          src={`${import.meta.env.BASE_URL}icon-signal.png`}
          alt="signal"
          className={styles.icon}
          style={{ width: '19.2px' }}
        />
        <img
          src={`${import.meta.env.BASE_URL}icon-wifi.png`}
          alt="wifi"
          className={styles.icon}
          style={{ width: '17.14px' }}
        />
        <img
          src={`${import.meta.env.BASE_URL}icon-battery.png`}
          alt="battery"
          className={styles.icon}
          style={{ width: '27.33px' }}
        />
      </div>
    </div>
  );
}

export default StatusBar;
