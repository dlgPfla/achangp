import React, { useState } from 'react';
import { useUserStore } from '../../stores/useUserStore';
import styles from '../../styles/onboarding/Onboarding12.module.css';
import { useNavigate } from 'react-router-dom';


function Onboarding12() {
  const name = useUserStore((state) => state.name);
  const profileImage = useUserStore((state) => state.profileImage);
  
const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('홈');
  const tabs = ['홈', '예산 계산기', '이벤트', '랭킹'];

  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    '/banner1.png',
    '/banner2.png',
    '/banner3.png',
    '/banner4.png',
    '/banner5.png',
  ];

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const [currentCategoryPage, setCurrentCategoryPage] = useState(0);
  const categories = [
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

  const pages = Array.from({ length: Math.ceil(categories.length / 8) }, (_, i) =>
    categories.slice(i * 8, (i + 1) * 8)
  );
   

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileHeader}>
          <img src={profileImage} alt="프로필" className={styles.profileImage} />
          <span className={styles.profileName}>{name}</span>
          <div className={styles.iconGroup}>
            <img src="/meteor-icons_search.svg" alt="검색" />
            <img src="/wish button.svg" alt="찜" />
          </div>
        </div>

        <div className={styles.tabMenu}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

          <div className={styles.sliderContainer} >
          <img src={banners[currentBanner]} className={styles.bannerImage} alt="배너" />
          <div className={styles.arrowContainer} >
            <span className={styles.arrowText}>
              {currentBanner + 1} / {banners.length}
            </span>
            <img src="/arrow-icon.svg" alt="다음"
            className={styles.arrowButton} />
          </div>
        </div>

        <div className={styles.categoryWrapper}>
          <div className={`${styles.categoryPages} ${styles[`page${currentCategoryPage}`]}`}>
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className={styles.categoryPage}>
                {page.map((cat, idx) => (
                  <div key={idx} className={styles.categoryItem}>
                    <div className={styles.categoryIcon}>
                      <img src={cat.icon} alt={cat.label} />
                    </div>
                    <span className={styles.categoryLabel}>{cat.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.categoryDotsWrapper}>
            <div className={styles.categoryDots}>
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${currentCategoryPage === idx ? styles.active : ''}`}
                  onClick={() => setCurrentCategoryPage(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.infoCardWrapper}>
          <div className={styles.infoCard}>
            <img src="/character.svg" alt="캐릭터" className={styles.cardImage} />
            <div className={styles.cardTextContent}>
              <div className={styles.cardTitle}>
                휴대용/절충형 유모차,<br />
                지금이 딱 구매 시기예요!
              </div>
              <div className={styles.cardDescription}>
                6개월부터 디럭스형 유모차 대신, 앉을 수 있는 절충형/휴대용 유모차가 더 적합해요.
              </div>
            </div>
             <img
    src="/ep_arrow-left-bold (1).svg"
    alt="화살표"
    className={styles.iconBtn}
    onClick={(e) => {
      e.stopPropagation(); // 부모 클릭 막기
      navigate('/onboarding/19');
    }}
  />
          </div>
        </div>




        {/* 추천 상품 섹션 */}
<div className={styles.recommendSection}>
  <div className={styles.sectionTitle}>6개월차 부모님들이 선호하는 상품이에요</div>

  <div className={styles.recommendCategoryTabs}>
    <button className= {styles.categoryTab}>기저귀/배변용품</button>
    <button className={styles.categoryTab}>젖병/수유</button>
    <button className={`${styles.categoryTab} ${styles.active}`}>이유식/간식</button>
    <button className={styles.categoryTab}>스킨케어/목욕</button>
  </div>

  <div className={styles.productList}>
    {/* 상품 카드 1 */}
    <div className={styles.productCard}>
      <img src="/sample-product1.png" alt="쌀가루" className={styles.productImage} />
      <div className={styles.productInfo}>
        <div className={styles.brand}>아이보리</div>
        <div className={styles.name}>초기 쌀가루 1단계 세척 유기농 고운 분말...</div>
        <div className={styles.priceRow}>
          <span className={styles.price}>8000원</span>
          <span className={styles.discount}>▼21%</span>
        </div>
        <div className={styles.reviewRow}>
        <div className={styles.rating}>
            <div className={styles.tags}>
          ⭐ 4.8 <span className={styles.reviewCount}>(후기 52,456개)</span>
        
          <span className={styles.tag}>사용하기 편해요</span>
          <span className={styles.tag}>위생적이에요</span>
        </div>
      </div>
    </div>
    </div>
</div>
    {/* 상품 카드 2 */}
    <div className={styles.productCard}>
      <img src="/sample-product2.png" alt="스푼세트" className={styles.productImage} />
      <div className={styles.productInfo}>
        <div className={styles.brand}>Kidsmile</div>
        <div className={styles.name}>퍼기 실리콘 조리도구 스파출라 소 버터...</div>
        <div className={styles.priceRow}>
          <span className={styles.price}>7900원</span>
          <span className={styles.discount}>▼33%</span>
        </div>
        <div className={styles.reviewRow}>
        <div className={styles.rating}>
            <div className={styles.tags}>
          ⭐ 4.9 <span className={styles.reviewCount}>(후기 6,200개)</span>
        
          <span className={styles.tag}>단단해요</span>
          <span className={styles.tag + ' ' + styles.bad}>마감이 아쉬워요</span>
        </div>
      </div>
    </div>
</div>
</div>
    {/* 상품 카드 3 */}
    <div className={styles.productCard}>
      <img src="/sample-product3.png" alt="소고기" className={styles.productImage} />
      <div className={styles.productInfo}>
        <div className={styles.brand}>베네베이비</div>
        <div className={styles.name}>무항생제 설도 다짐육 이유식 소고기 1등급...</div>
        <div className={styles.priceRow}>
          <span className={styles.price}>23,900원</span>
          <span className={styles.discount}>▼16%</span>
        </div>
        <div className={styles.reviewRow}>
        <div className={styles.rating}>
            <div className={styles.tags}>
          ⭐ 4.9 <span className={styles.reviewCount}>(후기 23,418개)</span>
        
          <span className={styles.tag}>소분 포장</span>
          <span className={styles.tag + ' ' + styles.bad}>질겨요</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  <button className={styles.moreButton}>더보기</button>
</div> 
<div className={styles.recommendSection}>
  <div className={styles.sectionTitle}>아토피 피부를 위한 크림 제품 추천드려요</div>
  
  {/* 카테고리 탭 */}
  <div className={styles.recommendCategoryTabs}>
    <button className={styles.categoryTab}>#아토피피부 전용</button>
    <button className={styles.categoryTab}>#EWG1등급</button>
    <button className={styles.categoryTab}>#세라마이드 보습</button>
  </div>

  {/* 상품 리스트 */}
  <div className={styles.productListGrid}>
    <div className={styles.productCardColumn}>
      <img src="/1.png" alt="제품1" className={styles.productImageColumn} />
      <div className={styles.brand}>아토팜</div>
      <div className={styles.name}>아토팜 MLE 크림, 160ml, 2개</div>
      <div className={styles.priceRow}>
        <span className={styles.price}>46,980원</span>
        <span className={styles.discount1}>▼20%</span>
      </div>
      <div className={styles.reviewRow}>
        <div className={styles.rating}>⭐ 4.9 <span className={styles.reviewCount}>(후기 13,898개)</span></div>
        <div className={styles.tags}>
          <span className={styles.tag}>촉촉해요</span>
          <span className={`${styles.tag} ${styles.bad}`}>내부 먼지 유입</span>
        </div>
      </div>
    </div>
      {/* 상품 2 */}
  <div className={styles.productCardColumn}>
    <img src="/2.png" alt="제품2" className={styles.productImageColumn} />
    <div className={styles.brand}>베비루미</div>
    <div className={styles.name}>베비루미 아토크림 <br></br> 1+1</div>
    <div className={styles.priceRow}>
      <span className={styles.price}>34,000원</span>
      <span className={styles.discount1}>▼33%</span>
    </div>
    <div className={styles.reviewRow}>
      <div className={styles.rating}>⭐ 4.8 <span className={styles.reviewCount}>(후기 12,903개)</span></div>
      <div className={styles.tags}>
        <span className={styles.tag}>부드러움</span>
        <span className={`${styles.tag} ${styles.bad}`}>찐득한 느낌</span>
      </div>
    </div>
  </div>

  {/* 상품 3 */}
  <div className={styles.productCardColumn}>
    <img src="/3.png" alt="제품3" className={styles.productImageColumn} />
    <div className={styles.brand}>아토99</div>
    <div className={styles.name}>아토99 편백 바디 크림 200ml 건조한 ...</div>
    <div className={styles.priceRow}>
      <span className={styles.price}>20,000원</span>
      <span className={styles.discount1}>▼47%</span>
    </div>
    <div className={styles.reviewRow}>
      <div className={styles.rating}>⭐ 4.8 <span className={styles.reviewCount}>(후기 2,193개)</span></div>
      <div className={styles.tags}>
        <span className={styles.tag}>끈적임 없음</span>
        <span className={`${styles.tag} ${styles.bad}`}>가려움 지속</span>
      </div>
    </div>
  </div>

  {/* 상품 4 */}
  <div className={styles.productCardColumn}>
    <img src="/4.png" alt="제품4" className={styles.productImageColumn} />
    <div className={styles.brand}>더순해</div>
    <div className={styles.name}>집중케어크림 100ml x 2개</div>
    <div className={styles.priceRow}>
      <span className={styles.price}>49,500원</span>
      <span className={styles.discount1}>▼25%</span>
    </div>
    <div className={styles.reviewRow}>
      <div className={styles.rating}>⭐ 4.9 <span className={styles.reviewCount}>(후기 14,817개)</span></div>
      <div className={styles.tags}>
        <span className={styles.tag}>부드러움</span>
        <span className={`${styles.tag} ${styles.bad}`}>가격 부담</span>
      </div>
    </div>
  </div>

  {/* 상품 5 */}
  <div className={styles.productCardColumn}>
    <img src="/5.png" alt="제품5" className={styles.productImageColumn} />
    <div className={styles.brand}>vivicell</div>
    <div className={styles.name}>아토닌즈 MD 인텐시브 크림 문제성 아... </div>
    <div className={styles.priceRow}>
      <span className={styles.price}>39,000원</span>
      <span className={styles.discount1}>▼20%</span>
    </div>
    <div className={styles.reviewRow}>
      <div className={styles.rating}>⭐ 4.9 <span className={styles.reviewCount}>(후기 1,861개)</span></div>
      <div className={styles.tags}>
        <span className={styles.tag}>보습력 좋음</span>
        <span className={`${styles.tag} ${styles.bad}`}>개인차 있음</span>
      </div>
    </div>
  </div>

  {/* 상품 6 */}
  <div className={styles.productCardColumn}>
    <img src="/6.png" alt="제품6" className={styles.productImageColumn} />
    <div className={styles.brand}>제로이드</div>
    <div className={styles.name}>제로이드 수딩 크림 100ml 1개</div>
    <div className={styles.priceRow}>
      <span className={styles.price}>30,900원</span>
      <span className={styles.discount1}>▼31%</span>
    </div>
    <div className={styles.reviewRow}>
      <div className={styles.rating}>⭐ 4.9 <span className={styles.reviewCount}>(후기 3,649개)</span></div>
      <div className={styles.tags}>
        <span className={styles.tag}>흡수력 좋음</span>
        <span className={`${styles.tag} ${styles.bad}`}>가격 부담</span>
      </div>
    </div>
  </div>

    {/* 다른 제품들도 동일한 구조로 반복 */}
  </div>
<div className={styles.recommendRowSection1}>
  <h3 className={styles.sectionTitle1}>‘버터플라이 휴대용 유모차’와 유사한 상품</h3>
  <div className={styles.productRow1}>
    {/* 상품 1 */}
    <div className={styles.productCard1}>
      <img src="/stroller1.png" className={styles.productImage1} alt="유모차1" />
      <div className={styles.brand1}>씨투엠뉴</div>
      <div className={styles.name1}>에이블코지프리미엄 트라이크 휴대용유모차</div>
      <div className={styles.priceRow1}>
        <span className={styles.price1}>368,000원</span>
        <span className={styles.discount1}>▼21%</span>
      </div>
      <div className={styles.reviewRow1}>
        <span className={styles.rating1}>
          ⭐ 4.9 <span className={styles.reviewCount1}>(후기 3,546개)</span>
        </span>
        <div className={styles.tags1}>
          <span className={`${styles.tag1} ${styles.good}`}>폴딩이 쉬워요</span>
          <span className={`${styles.tag1} ${styles.bad}`}>튼튼하지 않아요</span>
        </div>
      </div>
    </div>

    {/* 상품 2 */}
    <div className={styles.productCard1}>
      <img src="/stroller2.png" className={styles.productImage1} alt="유모차2" />
      <div className={styles.brand1}>리안</div>
      <div className={styles.name1}>리안 그램플러스 기내반입형 휴대용유모차</div>
      <div className={styles.priceRow1}>
        <span className={styles.price1}>270,000원</span>
        <span className={styles.discount1}>▼21%</span>
      </div>
      <div className={styles.reviewRow1}>
        <span className={styles.rating1}>
          ⭐ 4.8 <span className={styles.reviewCount1}>(후기 2,449개)</span>
        </span>
        <div className={styles.tags1}>
          <span className={`${styles.tag1} ${styles.good}`}>가성비 있어요</span>
          <span className={`${styles.tag1} ${styles.bad}`}>무거워요</span>
        </div>
      </div>
    </div>
    
  </div>
  <div className={styles.recommendRowSection1}>
  <h3 className={styles.sectionTitle}>직장 병행 중인 부모님께 추천하는 육아템!</h3>

  <div className={styles.recommendCategoryTabs}>
    <button className={`${styles.categoryTab} ${styles.active}`}>베이비 모니터</button>
    <button className={styles.categoryTab}>젖병 소독기</button>
    <button className={styles.categoryTab}>자동 분유 제조기</button>
  </div>

  <div className={styles.productList}>
    {/* 상품 1 */}
    <div className={styles.productCard}>
      <img src="/monitor1.png" className={styles.workingImage} alt="상품1" />
      <div className={styles.productInfo}>
        <div className={styles.brand}>nanit</div>
        <div className={styles.name}>내닛 신생아 홈캠 + 고정형 플로어&휴대...</div>
        <div className={styles.workingPriceRow}>
          <span className={styles.price}>550,000원</span>
          <span className={styles.discount}>– 0%</span>
        </div>
        <div className={styles.reviewRow}>
             <div className={styles.rating}>
          ⭐ 5.0 <span className={styles.reviewCount}>(후기 13개)</span>
          <span className={styles.tag}>화질 우수</span>
          <span className={`${styles.tag} ${styles.bad}`}>주요 기능 유료</span>
        </div>
      </div>
    </div>
</div>
    {/* 상품 2 */}
    <div className={styles.workingCard}>
      <img src="/monitor2.png" className={styles.workingImage} alt="상품2" />
      <div className={styles.workingInfo}>
        <div className={styles.workingBrand}>이글루캠</div>
        <div className={styles.workingName}>이글루캠S4+ 플러스 베이비 신생아 홈C...</div>
        <div className={styles.workingPriceRow}>
          <span className={styles.workingPrice}>89,800원</span>
          <span className={styles.workingDiscount}>▼ 25%</span>
        </div>
        <div className={styles.workingReview}>
          ⭐ 4.9 <span className={styles.reviewCount}>(후기 2,598개)</span>
          <span className={styles.tag}>가성비</span>
          <span className={`${styles.tag} ${styles.bad}`}>화질이 아쉬워요</span>
        </div>
      </div>
    </div>

    {/* 상품 3 */}
    <div className={styles.workingCard}>
      <img src="/monitor3.png" className={styles.workingImage} alt="상품3" />
      <div className={styles.workingInfo}>
        <div className={styles.workingBrand}>이글루캠</div>
        <div className={styles.workingName}>이글루캠 S8 베이비 신생아 홈CCTV 집...</div>
        <div className={styles.workingPriceRow}>
          <span className={styles.workingPrice}>119,000원</span>
          <span className={styles.workingDiscount}>▼ 7%</span>
        </div>
        <div className={styles.workingReview}>
          ⭐ 4.9 <span className={styles.reviewCount}>(후기 2,347개)</span>
          <span className={styles.tag}>화질 무난</span>
          <span className={`${styles.tag} ${styles.bad}`}>반응이 느려요</span>
        </div>
      </div>
    </div>
  </div>

  <button className={styles.moreButton}>더보기</button>
</div>

</div>

 
</div>

      </div>
      

      <div className={styles.bottomNav}>
        <img src="/tabler_home.svg" alt="홈" />
        <img src="/icon-park-outline_hamburger-button.svg" alt="메뉴" />
        <div className={styles.centerButton}>
          <img src="/mdi_google-lens.svg" alt="렌즈" />
        </div>
        <img src="/solar_sale-outline.svg" alt="세일" />
        <img src="/ion_person-outline.svg" alt="마이페이지" />
      </div>
    </div>

  );
}

export default Onboarding12;
