
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding20.module.css';

function Onboarding20() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const environments = [
    { label: '우유(유제품)', icon: '/Glass Of Milk Streamline Twemoji Emoji.svg' },
    { label: '달걀', icon: '/Egg Streamline Twemoji Emoji.svg' },
    { label: '밀(글루텐)', icon: '/Bread Streamline Twemoji Emoji.svg' },
    { label: '견과류', icon: '/Peanuts Streamline Twemoji Emoji.svg' },
    { label: '생선/해산물', icon: '/Fish Streamline Twemoji Emoji.svg' },
    { label: '과일', icon: '/Red Apple Streamline Twemoji Emoji.svg' },
    { label: '방부제/첨가물', icon: '/Salt Streamline Twemoji Emoji.svg' },
    { label: '없음/모르겠음', icon: '/White Question Mark Streamline Twemoji Emoji.svg' },
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
          아이에게 다음 중,<br />
          해당하는 알레르기가 있나요?
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
  onClick={() => navigate('/onboarding/6')}
>
  {selected ? '다음 단계' : '건너뛰기'}
</button>
    </div>
  );
}

export default Onboarding20;
