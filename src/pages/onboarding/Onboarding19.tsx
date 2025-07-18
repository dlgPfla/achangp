import React from 'react';
import styles from '../../styles/onboarding/Onboarding19.module.css';
import { useNavigate } from 'react-router-dom';

import { useUserStore } from '../../stores/useUserStore'


function Onboarding19() {
  const navigate = useNavigate(); // ✅ 여기에 있어야 합니다
  const store = useUserStore();

  return (
     <div className={styles.scrollWrapper}>
    <div className={styles.container}>
      {/* 상단 바 */}
      <div className={styles.topBar}>
        <img
          src="/ep_arrow-left-bold (2).svg"
          alt="뒤로가기"
          className={styles.backIcon}
          onClick={() => navigate(-1)} // 예: 뒤로 가기
        />
        <div></div>
        <div className={styles.rightIcons}>
          <img src="/meteor-icons_search.svg" alt="검색" className={styles.icon} />
          <img src="/wish button.svg" alt="찜" className={styles.icon} />
        </div>
      </div>

      {/* 본문 콘텐츠 */}
      <div className={styles.section}>
        <h2 className={styles.title}>생후 6개월, 외출이 달라지는 시기예요</h2>
        <p className={styles.description}>
          생후 6개월은 아기의 감각 발달과 신체 조절 능력이 급격히 성장하는 시기로,
          외출의 성격도 크게 달라지기 시작합니다.
        </p>

        <div className={styles.tipsBox}>
          <div className={styles.tipTitle}>☀️ 외출 전, 꼭 확인해보세요!</div>
          <ul className={styles.tipList}>
            <li>아기의 기분이 좋은지, 열은 없는지 확인해 주세요.
                <br/>생후 초기 아기들은 익숙하지 않은 장소에 예민하게 반응할 수 있어요. 낮잠을 충분히 재운 뒤 외출하는 것을 추천합니다.
            </li>
            <li>외출 시간은 오전 10~12시, 오후 2~5시가 적당해요.<br/>햇볕이 가장 강한 오후 1~2시, 퇴근 시간대의 혼잡한 공간은 피해주세요.</li>
            <li>유모차에 앉아 있어도 발이 차가워지기 쉬우니<br/>양말, 부드러운 신발, 우주복 등으로 체온을 지켜주세요.</li>
            <li>얇은 옷 여러 겹으로 체온을 조절하고,<br/> 날씨에 따라 담요나 모자도 함께 준비해 주세요.</li>
            <li>외출 장소는 집에서 멀거나 낯선 장소보다 근처 공원, 산책로, 실내 놀이터처럼 이동 스트레스가 적고 안전한 곳이 좋아요.</li>
          </ul>
        </div>

        <h3 className={styles.subTitle}>그럼 유모차는 어떤 걸 써야 할까요?</h3>
        <p className={styles.subDescription}>
          디럭스형 유모차는 신생아기에게 편안하지만,<br/>
          6개월 이후 아기가 크고 외출이 많아지면 무게, 부피, 이동의 <br/>
          불편함이 눈에 띄기 시작합니다. 그래서 이 시기에 많은 부모들이 
          더 가볍고 간편한 절충형 유모차나 접기 쉬운 휴대용 유모차로 
          자연스럽게 넘어가게 되는 거죠.
        </p>
      </div>
    </div>
    <div className={styles.strollerSection}>
  <div className={styles.strollerBox}>
    <div className={styles.strollerTitle}>
      <img src="/stroller-icon1.svg" alt="절충형" className={styles.strollerIcon} />
      <span>절충형 유모차</span>
    </div>
    <ul className={styles.strollerList}>
      <li>디럭스형보다 가볍고, 휴대용보다 안정적</li>
      <li>110도 이상 리클라인 가능</li>
      <li>보통 6개월~돌 전후까지 사용</li>
      <li>장시간 외출, 짐이 많은 경우에도 적합</li>
      <li>한 손 접이, 셀프 스탠딩, 충격 흡수 기능이 있는 제품 많음</li>
    </ul>
  </div>

  <div className={styles.strollerBox}>
    <div className={styles.strollerTitle}>
      <img src="/stroller-icon2.svg" alt="휴대용" className={styles.strollerIcon} />
      <span>휴대용 유모차</span>
    </div>
    <ul className={styles.strollerList}>
      <li>매우 가볍고 접기 쉬움</li>
      <li>외출이 잦거나 차에 자주 실어야 하는 가정에 추천</li>
      <li>다만 시트 안정감이나 충격 흡수는 약한 편</li>
      <li>보통 앉는 게 익숙해지는 6~7개월 이후부터 사용</li>
    </ul>
  </div>
</div>
<div className={styles.recommendSection}>
  <div className={styles.recommendTitle}>휴대용 유모차 BEST 5</div>
  <p className={styles.recommendDesc}>
    가볍고 쉽게 접히는 구조로,<br />
    차에 태울 때도 부담 없이 들 수 있는 유모차예요.
  </p>

  <div className={styles.productScroll}>
  {/* 1번 카드 */}
  <div className={styles.productCard}>
    <img src="/a.png" alt="유모차1" className={styles.productImage} />
    <div className={styles.brand}>bugaboo</div>
    <div className={styles.name}>부가부 버터플라이<br/> 휴대용 스트롤러</div>
    <div className={styles.price}>870,000원</div>
    <div className={styles.rating}>⭐ 4.8 (후기 184개)</div>
    <div className={styles.tags}>
      <span className={styles.greenTag}>핸들링</span>
      <span className={styles.redTag}>각도조절</span>
    </div>
  </div>

  {/* 2번 카드 */}
  <div className={styles.productCard}>
    <img src="/b.png" alt="유모차2" className={styles.productImage} />
    <div className={styles.brand}>스토케</div>
    <div className={styles.name}>베비루미 아토크림 <br/>1+1</div>
    <div className={styles.price}>716,000원</div>
    <div className={styles.rating}>⭐ 4.8 (후기 230개)</div>
    <div className={styles.tags}>
      <span className={styles.greenTag}>핸들링</span>
      <span className={styles.redTag}>폴딩이 어려워요</span>
    </div>
  </div>

  {/* 3번 카드 */}
  <div className={styles.productCard}>
    <img src="/c.png" alt="유모차3" className={styles.productImage} />
    <div className={styles.brand}>JOOLZ</div>
    <div className={styles.name}>JOOLZ 에어2 휴대용 유모차 색상 택1</div>
    <div className={styles.price}>788,000원</div>
    <div className={styles.rating}>⭐ 4.9 (후기 574개)</div>
    <div className={styles.tags}>
      <span className={styles.greenTag}>폴딩이 쉬워요</span>
      <span className={styles.redTag}>각도조절</span>
    </div>
  </div>
<div className={styles.productCard}>
    <img src="/d.png" alt="유모차4" className={styles.productImage} />
    <div className={styles.brand}>씨투엠뉴</div>
    <div className={styles.name}>에이블코지프리미엄 <br/>트라이크</div>
    <div className={styles.price}>368,000원</div>
    <div className={styles.rating}>⭐ 4.9 (후기 3546개)</div>
    <div className={styles.tags}>
      <span className={styles.greenTag}>폴딩이 쉬워요</span>
      <span className={styles.redTag}>각도조절</span>
    </div>
  </div>
    {/* 같은 구조로 2~5번 카드 반복 */}
  
</div>
<div className={styles.compareSection}>
  <h3 className={styles.compareTitle}>대표 상품들을 비교해봤어요</h3>
  <div className={styles.tableWrapper}>
    <table className={styles.compareTable}>
      <thead>
        <tr>
          <th></th>
          <th>부가부 버터플라이</th>
          <th>스토케 요요3</th>
          <th>졸즈 에어2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>평점</td>
          <td>⭐ 4.8 (후기 184개)</td>
          <td>⭐ 4.9 (후기 230개)</td>
          <td>⭐ 4.9 (후기 574개)</td>
        </tr>
        <tr>
          <td>사이즈</td>
          <td>언폴딩 L94.5 / W44.8 / H102.8<br />폴딩 L44.8 / W24.5 / H55.5</td>
          <td>언폴딩 L86 / W44 / H106<br />폴딩 L44 / W18 / H52</td>
          <td>언폴딩 L85 / W44 / H106.5<br />폴딩 L44 / W23 / H53</td>
        </tr>
        <tr>
          <td>평균가</td>
          <td>890,000원</td>
          <td>716,000원</td>
          <td>788,000원</td>
        </tr>
        <tr>
          <td>무게</td>
          <td>7.3kg</td>
          <td>6.2kg</td>
          <td>6.5kg</td>
        </tr>
        <tr>
          <td>장바구니 무게</td>
          <td>8kg</td>
          <td>10kg</td>
          <td>8kg</td>
        </tr>
        <tr>
          <td>색상</td>
          <td>4가지</td>
          <td>9가지</td>
          <td>7가지</td>
        </tr>
        <tr>
          <td>핸들링</td>
          <td>묵직한 핸들링</td>
          <td>가장 부드러운 핸들링</td>
          <td>부드러운 핸들링</td>
        </tr>
        <tr>
          <td>장점</td>
          <td>
            <span className={styles.greenTag}>수납공간이 넓어요</span>
            <span className={styles.greenTag}>핸들링이 안정적이에요</span>
          </td>
          <td>
            <span className={styles.greenTag}>핸들링이 부드러워요</span>
            <span className={styles.greenTag}>각도 조절이 편해요</span>
          </td>
          <td>
            <span className={styles.greenTag}>폴딩이 쉬워요</span>
            <span className={styles.greenTag}>시트가 넓어요</span>
          </td>
        </tr>
        <tr>
          <td>단점</td>
          <td>
            <span className={styles.redTag}>휴대성이 아쉬워요</span>
            <span className={styles.redTag}>각도 조절이 어려워요</span>
          </td>
          <td>
            <span className={styles.redTag}>별매가 많아요</span>
            <span className={styles.redTag}>폴딩이 어려워요</span>
          </td>
          <td>
            <span className={styles.redTag}>핸들 길이 조절 불가</span>
            <span className={styles.redTag}>각도 조절이 어려워요</span>
          </td>
        </tr>
        <tr>
          <td>폴딩 방법</td>
          <td>순접이 상단을 누른 상태로<br />아래방향으로 힘을 주면 됨</td>
          <td>상체부분을 뒤집고 유모차 하단의<br />버튼을 눌러서 접어야 함</td>
          <td>범퍼바 제거 필요 없는<br />1초 원 핸드 폴딩</td>
        </tr>
        <tr>
          <td>등받이</td>
          <td>110도 ~ 145도</td>
          <td>118도 ~ 145도</td>
          <td>105도 ~ 170도</td>
        </tr>
        <tr>
          <td>최대 하중</td>
          <td>22kg까지</td>
          <td>22kg까지</td>
          <td>22kg까지</td>
        </tr>
        <tr>
          <td>추가 특이사항</td>
          <td>
            생활 방수 가능<br />
            부착 가능한 햇빛도 있음<br />
            기내 반입 가능 여부 비행기마다 다름
          </td>
          <td>
            기내 반입 가능<br />
            ‘0+’뉴본팩, 뉴본시트(별매)와 함께 제공
          </td>
          <td>
            기내 반입 가능<br />
            생활 방수 가능<br />
            좁은 차양막(75cm)에 해도 통풍창 있음
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
    </div>
  );
}

export default Onboarding19;
