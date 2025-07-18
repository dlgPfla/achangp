import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import styles from '../../styles/onboarding/Onboarding14.module.css';

function Onboarding14() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>('/profile.png');
  const [pregnancyWeek, setPregnancyWeek] = useState('');
  const [babyName, setBabyName] = useState('');

  const isFormValid = pregnancyWeek.trim() !== '' && babyName.trim() !== '';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        <h1 className={styles.title}>소중한 아기의 태명을 알려주세요</h1>

        {/* 프로필 이미지 */}
        <div className={styles.profileWrapper}>
          <img src={profileImage} alt="profile" className={styles.profileImage} />
          <img
            src="/camera-icon.png"
            alt="camera"
            className={styles.cameraIcon}
            onClick={() => fileInputRef.current?.click()}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>

        {/* 입력창 */}
        <input
          type="text"
          className={styles.input}
          placeholder="임신 주차"
          value={pregnancyWeek}
          onChange={(e) => setPregnancyWeek(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="이름"
          value={babyName}
          onChange={(e) => setBabyName(e.target.value)}
        />

        {/* 아이 추가 */}
        <div className={styles.addChild}>
          <img src="/plus-icon.png" alt="plus" />
          <span className={styles.addText}>아이 추가</span>
        </div>
      </div>

       {/* 등록하기 버튼 수정됨 */}
      <button
        className={styles.submitBtn}
        onClick={() => navigate('/onboarding/25')}
      >
        등록하기
      </button>
    </div>
  );
}

export default Onboarding14;
