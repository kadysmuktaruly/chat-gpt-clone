import styles from './index.module.css';
import Left_section from './LeftSection';
import Right_section from './RightSection';
import './App.css';

export default function App() {  
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <Left_section />
      </div>
      <div className={styles.rightOut}>
        <Right_section />
      </div>
    </div>
  );
}

