import { useNavigate } from 'react-router-dom';
import styles from '../../styles/onboarding/Onboarding2.module.css';
import { useRef, useState } from 'react';
import { useUserStore } from '../../stores/useUserStore';

function Onboarding2() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>('/profile.png');
  const [selectedGender, setSelectedGender] = useState<'남자' | '여자' | null>(null);
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');

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

  const isFormValid = selectedGender && birthDate && name;
const setUser = useUserStore((state) => state.setUser);
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
        <h1 className={styles.title}>
          출생일과 성별,<br />이름을 입력해주세요
        </h1>

        <div className={styles.profileGenderRow}>
          {/* 프로필 */}
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

          {/* 성별 버튼 */}
          <div className={styles.genderButtonsRow}>
            {['남자', '여자'].map((gender) => (
              <button
                key={gender}
                className={`${styles.gender} ${selectedGender === gender ? styles.selected : ''}`}
                onClick={() => setSelectedGender(gender as '남자' | '여자')}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          className={styles.input}
          placeholder="생일"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className={styles.addChild}>
          <img src="/plus-icon.png" alt="plus" />
          <span className={styles.addText}>아이 추가</span>
        </div>
      </div>

      <button
  className={styles.submitBtn}
  onClick={() => {
    setUser(name, profileImage);   // Zustand에 저장
    navigate('/onboarding/25');   // state 없이 이동해도 됨!
  }}
>
  등록하기
</button>
    </div>
  );
}

export default Onboarding2;
