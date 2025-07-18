import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding25.module.css';

function Onboarding25() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<'첫째' | '둘째 이상' | null>(null);

  return (
    <div className={styles.container}>
      {/* 상단 헤더 */}
      <div className={styles.header}>
        <svg
          className={styles.backIcon}
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className={styles.titleText}>회원가입</span>
      </div>

      {/* 본문 */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          처음 키우는 아기인가요,<br />
          아니면 형제가 있나요?
        </h1>

        <div className={styles.options}>
          {['첫째', '둘째 이상'].map(option => (
            <button
              key={option}
              className={`${styles.optionButton} ${selected === option ? styles.selected : ''}`}
              onClick={() => setSelected(option as '첫째' | '둘째 이상')}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
  className={`${styles.nextBtn} ${selected ? styles.active : ''}`}
  onClick={() => navigate('/onboarding/23')}
>
  {selected ? '다음 단계' : '건너뛰기'}
</button>

      
    </div>
  );
}

export default Onboarding25;
