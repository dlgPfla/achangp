import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding23.module.css';

function Onboarding23() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const environments = [
    { label: '직장 병행', icon: '/work.png' },
    { label: '육아에 전념', icon: '/care.png' },
    { label: '조부모 육아', icon: '/grandparents.png' },
    { label: '공동 육아', icon: '/together.png' },
    { label: '기타', icon: '/etc.png' },
  ];

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

      {/* 질문 */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          아이를 주로<br />
          돌보는 환경은 어떤가요?
        </h1>

        <div className={styles.grid}>
          {environments.map(env => (
            <button
              key={env.label}
              className={`${styles.card} ${selected === env.label ? styles.selected : ''}`}
              onClick={() => setSelected(env.label)}
            >
              <img src={env.icon} alt={env.label} className={styles.icon} />
              <span>{env.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 버튼 영역 */}
      <button
  className={`${styles.nextBtn} ${selected ? styles.active : ''}`}
  onClick={() => navigate('/onboarding/20')}
>
  {selected ? '다음 단계' : '건너뛰기'}
</button>
    </div>
  );
}

export default Onboarding23;
