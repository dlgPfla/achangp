// src/pages/Onboarding/Onboarding1.tsx
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding1.module.css';
import OnboardingLayout from '../../components/OnboardingLayout';



function Onboarding1() {
  const navigate = useNavigate();

  return (
<div className={styles.container}>
  {/* 배경 꽃 이미지 */}
 <img
  src={`${import.meta.env.BASE_URL}flower-yellow.png`}
  alt="yellow flower"
  style={{
    position: 'absolute',
    top: '80px',
    left: '30px',
    width: '100px',
    opacity: 0.2,
    zIndex: 0
  }}
/>
<img
  src={`${import.meta.env.BASE_URL}flower-green.png`}
  alt="green flower"
  style={{
    position: 'absolute',
    bottom: '100px',
    right: '20px',
    width: '90px',
    opacity: 0.15,
    zIndex: 0,
  }}
/>




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

      {/* 메인 콘텐츠 */}
<div className={styles.content}>
  <div className={styles.titleGroup}>
    <div className={styles.titleLine1}>만나서 반갑습니다!</div>
    <div className={styles.titleLine2}>현재 상태를 알려주세요</div>
  </div>

  <div className={styles.buttonGroup}>
    <button className={styles.button} onClick={() => navigate('/onboarding/14')}>
      임신 준비 중이에요
    </button>
    <button className={styles.button} onClick={() => navigate('/onboarding/14')}>
      아기가 태어날 예정이에요
    </button>
    <button className={styles.button} onClick={() => navigate('/onboarding/2')}>
      아기를 키우고 있어요
    </button>
  </div>
</div>

{/* 하단 안내 */}
<div className={styles.footer}>
  회원가입 후 언제든 마이페이지에서<br />정보를 수정할 수 있어요!
</div>
    </div>
  );
}

export default Onboarding1;
