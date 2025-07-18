
import styles from './styles/AppWrapper.module.css';
import { Outlet } from 'react-router-dom';
import StatusBar from './components/Statusbar/StatusBar';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.appContent}>
        <StatusBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
