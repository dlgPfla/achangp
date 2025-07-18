import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding6.module.css';

function Onboarding20() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const environments = [
    { label: '기저귀/배변용품', icon: '/Baby Medium Light Skin Tone Streamline Twemoji Emoji.svg' },
{ label: '젖병/수유', icon: '/Baby Bottle Streamline Twemoji Emoji.svg' },
{ label: '이유식/간식', icon: '/Lollipop Streamline Twemoji Emoji.svg' },
{ label: '스킨케어/목욕', icon: '/Lotion Bottle Streamline Twemoji Emoji.svg' },
{ label: '놀이/발달', icon: '/Teddy Bear Streamline Twemoji Emoji.svg' },
{ label: '유모차/카시트', icon: '/Sport Utility Vehicle Streamline Twemoji Emoji.svg' },
{ label: '가구/침구', icon: '/Bed Streamline Twemoji Emoji.svg' },
{ label: '도서/학습', icon: '/Books Streamline Twemoji Emoji.svg' },
{ label: '외출소품', icon: '/Handbag Streamline Twemoji Emoji.svg' },
{ label: '전자/소형가전', icon: '/Electric Plug Streamline Twemoji Emoji.svg' },
{ label: '세탁/위생', icon: '/Bubbles Streamline Twemoji Emoji.svg' },
{ label: '안전용품', icon: '/Unlocked Streamline Twemoji Emoji.svg' },
{ label: '생활/정리용품', icon: '/File Cabinet Streamline Twemoji Emoji.svg' },
{ label: '임부용품', icon: '/Pregnant Woman Light Skin Tone Streamline Twemoji Emoji.svg' },

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

      {/* 스크롤 가능한 콘텐츠 영역 */}
      <div className={styles.scrollArea}>
        <h1 className={styles.title}>
          관심 있는,<br />카테고리를 골라주세요!
        </h1>

        
      <div className={styles.grid}>
        {environments.map((env, index) => (
          <button
            key={`${env.label}-${index}`}
            className={`${styles.card} ${selected === env.label ? styles.selected : ''}`}
            onClick={() => setSelected(env.label)}
            >
              <img src={env.icon} alt={env.label} className={styles.icon} />
              <span>{env.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className={styles.fixedBottom}>
        <button
          className={`${styles.nextBtn} ${selected ? styles.active : ''}`}
          onClick={() => navigate('/onboarding/8')}
        >
          {selected ? '다음 단계' : '건너뛰기'}
        </button>
      </div>
    </div>
  );
}

export default Onboarding20;
