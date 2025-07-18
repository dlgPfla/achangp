
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding20.module.css';

function Onboarding20() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const environments = [
    { label: '아토피/습진', icon: '/free-icon-lotion-3731069.png' },
    { label: '건조/각질', icon: '/free-icon-soap-6990087.png' },
    { label: '민감성 피부', icon: '/50f2f5194b5341918d3e6d389837b3030c107feb.png' },
    { label: '땀 열 발진', icon: '/free-icon-sweat-7922943.png' },
    { label: '두피/머리', icon: '/Exploding Head Streamline Twemoji Emoji (2).svg' },
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
          아이 피부,<br />
          어떤 점이 신경쓰이시나요?
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
  onClick={() => navigate('/onboarding/21')}
>
  {selected ? '다음 단계' : '건너뛰기'}
</button>
    </div>
  );
}

export default Onboarding20;
