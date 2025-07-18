import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding8.module.css';

function Onboarding8() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const environments = [
    { label: '부가부', icon: '/b9c7873a55557b86e95c44df29984fa86efae04f.png' },
    { label: '리안', icon: '/d459cf857d67ac100b1563f6234f5ad933e901a4.png' },
    { label: '실버크로스', icon: '/7035b1c6cbca5167a1d2f2944307b48241ba010d.png' },
    { label: '브라이텍스', icon: '/e1ec987b4ae0eea629907214e165893b71a320c7.png' },
    { label: '다이치', icon: '/31e94e9d051cda6a3879ee6d6bb01aa4452eb27f.png' },
    { label: '스펙트라', icon: '/03edb98473145d92f8491a11e050263989328e1e.png' },
    { label: '압타밀', icon: '/4974c450275bbdc9889b01c0d516065932e67954.png' },
    { label: '포그내', icon: '/6f9ad4c4c14e0a479ee204cc2016b49f7aa0e997.png' },
    { label: '베베숲', icon: '/569f377ce48f1cf86323eb1719d9a1c8bf477bfd.png' },
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
        <h1 className={styles.title}>관심 있는 브랜드를 선택해주세요</h1>

        <div className={styles.searchWrapper}>
          <input
            placeholder="브랜드 검색"
            className={styles.searchInput}
          />
          <img
            src="/basil_search-outline.svg"
            alt="검색"
            className={styles.searchIcon}
          />
        </div>

        {/* 브랜드 선택 카드 */}
<div className={styles.grid}>
  {environments.map((env, index) => (
    <button
      key={`${env.label}-${index}`}
      className={`${styles.card} ${selected === env.label ? styles.selected : ''}`}
      onClick={() => setSelected(env.label)}
    >
      <div className={styles.brandCard}>
        <div className={styles.imageWrapper}>
          <img src={env.icon} alt={env.label} className={styles.brandImage} />
        </div>
        <span className={styles.brandLabel}>{env.label}</span>
      </div>
    </button>
  ))}
</div>
</div>

{/* ✅ 하단 고정 버튼은 scrollArea 바깥에 있어야 함 */}
<div className={styles.fixedBottom}>
  <button
    className={`${styles.nextBtn} ${selected ? styles.active : ''}`}
    onClick={() => navigate('/onboarding/12',)}
  >
    가입완료
  </button>
</div>

    </div>
  );
}

export default Onboarding8;
