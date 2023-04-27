<template>
  <div class="referral">
    <HeaderTop />

    <div class="top-panel">
      <h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Партнерство
      </h2>

      <router-link to="/top-referrals" class="top-referrals">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 14H10.6667M8 11.3334V14M8 11.3334C8.88406 11.3334 9.7319 10.9822 10.357 10.357C10.9821 9.73192 11.3333 8.88407 11.3333 8.00002V2.66669H4.66667V8.00002C4.66667 8.88407 5.01786 9.73192 5.64298 10.357C6.2681 10.9822 7.11595 11.3334 8 11.3334ZM4.66667 6.00002C4.66667 6.7364 4.06971 7.33335 3.33333 7.33335C2.59695 7.33335 2 6.7364 2 6.00002C2 5.26364 2.59695 4.66669 3.33333 4.66669C4.06971 4.66669 4.66667 5.26364 4.66667 6.00002ZM14 6.00002C14 6.7364 13.403 7.33335 12.6667 7.33335C11.9303 7.33335 11.3333 6.7364 11.3333 6.00002C11.3333 5.26364 11.9303 4.66669 12.6667 4.66669C13.403 4.66669 14 5.26364 14 6.00002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Топ рефоводов
      </router-link>
    </div>
    <div class="content">
      <router-link to="/top-referrals" class="top-referrals mobile">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 14H10.6667M8 11.3334V14M8 11.3334C8.88406 11.3334 9.7319 10.9822 10.357 10.357C10.9821 9.73192 11.3333 8.88407 11.3333 8.00002V2.66669H4.66667V8.00002C4.66667 8.88407 5.01786 9.73192 5.64298 10.357C6.2681 10.9822 7.11595 11.3334 8 11.3334ZM4.66667 6.00002C4.66667 6.7364 4.06971 7.33335 3.33333 7.33335C2.59695 7.33335 2 6.7364 2 6.00002C2 5.26364 2.59695 4.66669 3.33333 4.66669C4.06971 4.66669 4.66667 5.26364 4.66667 6.00002ZM14 6.00002C14 6.7364 13.403 7.33335 12.6667 7.33335C11.9303 7.33335 11.3333 6.7364 11.3333 6.00002C11.3333 5.26364 11.9303 4.66669 12.6667 4.66669C13.403 4.66669 14 5.26364 14 6.00002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Топ рефоводов
      </router-link>
      <div class="types">
        <div class="tabs">
          <div class="tab active">Стандарт</div>
          <div class="tab">VIP</div>
          <div class="tab">Блоггер</div>
        </div>
        <div class="table">
          <div class="head">
            <div class="lvl">Уровень</div>
            <div class="to_next">До след. уровня</div>
            <div class="give">Получаете</div>
            <div class="referral_give">Реферал получит</div>
          </div>
          <div class="table-items">
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">10</div>
              </div>
              <div class="to_next">$ 500 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">9</div>
              </div>
              <div class="to_next">$ 200 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">8</div>
              </div>
              <div class="to_next">$ 100 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">7</div>
              </div>
              <div class="to_next">$ 50 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">6</div>
              </div>
              <div class="to_next">$ 15 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item select">
              <div class="lvl">
                <div class="lvl-avatar">5</div>
              </div>
              <div class="to_next">$ 5 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">4</div>
              </div>
              <div class="to_next">$ 1 000</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">3</div>
              </div>
              <div class="to_next">$ 500</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">2</div>
              </div>
              <div class="to_next">$ 100</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
            <div class="item">
              <div class="lvl">
                <div class="lvl-avatar">1</div>
              </div>
              <div class="to_next">$ 50</div>
              <div class="give">
                10 %
              </div>
              <div class="referral_give">+ 25 % к депозиту</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-col">
        <div class="user-informations">
          <div class="top-indicators">
            <div class="your-level">
              <div class="your-level_head">
                <strong>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.393 15.3126C14.7992 15.3126 15.9377 14.1734 15.9377 12.7679V10.7429C15.0077 10.7429 14.2577 9.99288 14.2577 9.06363C14.2577 8.13363 15.0077 7.38438 15.9377 7.38438L15.9362 5.35713C15.9362 3.95163 14.7977 2.81238 13.3922 2.81238H4.60823C3.20273 2.81238 2.06348 3.95163 2.06348 5.35713L2.06273 7.44963C2.99198 7.44963 3.74198 8.13363 3.74198 9.06363C3.74198 9.99288 2.99198 10.7429 2.06273 10.7429V12.7679C2.06273 14.1734 3.20123 15.3126 4.60673 15.3126H13.393Z" stroke="#576CB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99986 10.3908L10.3049 11.077C10.4271 11.1408 10.5704 11.0373 10.5471 10.9015L10.2974 9.44728L11.3541 8.41903C11.4531 8.32228 11.3984 8.15503 11.2619 8.13478L9.80236 7.92253L9.14911 6.59953C9.08836 6.47578 8.91211 6.47578 8.85061 6.59953L8.19736 7.92253L6.73861 8.13478C6.60211 8.15503 6.54736 8.32228 6.64636 8.41903L7.70236 9.44728L7.45261 10.9015C7.42936 11.0373 7.57261 11.1408 7.69486 11.077L8.99986 10.3908Z" stroke="#576CB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Ваш уровень
                </strong>
                <span>Стандарт</span>
              </div>
              <div class="level-circle">
                <CircleProgress total="100" completed="25" />
                <span>1</span>
              </div>
              <div class="level-prices">
                $ 10,997   <strong>/</strong>   $ 20,000
              </div>
            </div>
            <div class="user-details">
              <div class="indicators">
                <div class="indicator">
                  <div class="indicator-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.2">
                        <path d="M46.9197 29.1517C51.1926 29.1517 54.6588 25.6879 54.6588 21.415C54.6588 17.1421 51.1926 13.6783 46.9197 13.6783" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50.4776 37.5593C51.7536 37.6473 53.0222 37.8282 54.2713 38.1093C56.0069 38.4491 58.0944 39.1604 58.8376 40.7175C59.3118 41.7149 59.3118 42.876 58.8376 43.8758C58.0969 45.4329 56.0069 46.1418 54.2713 46.4987" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.7733 29.1517C12.5004 29.1517 9.0342 25.6879 9.0342 21.415C9.0342 17.1421 12.5004 13.6783 16.7733 13.6783" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.2154 37.5593C11.9394 37.6473 10.6708 37.8282 9.42164 38.1093C7.68609 38.4491 5.59853 39.1604 4.85787 40.7175C4.3812 41.7149 4.3812 42.876 4.85787 43.8758C5.59609 45.4329 7.68609 46.1418 9.42164 46.4987" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.834 39.2255C40.4922 39.2255 47.8891 40.5357 47.8891 45.7791C47.8891 51.02 40.5411 52.3791 31.834 52.3791C23.1734 52.3791 15.7789 51.0689 15.7789 45.8255C15.7789 40.5822 23.1269 39.2255 31.834 39.2255Z" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.834 31.7465C26.1238 31.7465 21.5454 27.168 21.5454 21.4554C21.5454 15.7451 26.1238 11.1667 31.834 11.1667C37.5442 11.1667 42.1227 15.7451 42.1227 21.4554C42.1227 27.168 37.5442 31.7465 31.834 31.7465Z" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </svg>
                  </div>
                  <div class="indicator-text">
                    <span>Приглашено</span>
                    <strong>15</strong>
                  </div>
                </div>
                <div class="indicator">
                  <div class="indicator-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.2">
                        <path d="M12.7848 18.8155C12.7848 15.4848 15.4861 12.7835 18.8141 12.7835H21.5581C23.1475 12.7835 24.6755 12.1541 25.8061 11.0315L27.7235 9.11146C30.0728 6.75146 33.8915 6.7408 36.2515 9.09013L36.2755 9.11146L38.1955 11.0315C39.3235 12.1541 40.8515 12.7835 42.4435 12.7835H45.1848C48.5155 12.7835 51.2168 15.4848 51.2168 18.8155V21.5541C51.2168 23.1488 51.8461 24.6741 52.9688 25.8048L54.8888 27.7248C57.2488 30.0741 57.2621 33.8901 54.9128 36.2528L54.8888 36.2768L52.9688 38.1968C51.8461 39.3221 51.2168 40.8528 51.2168 42.4421V45.1861C51.2168 48.5168 48.5155 51.2155 45.1848 51.2155H42.4435C40.8515 51.2155 39.3235 51.8475 38.1955 52.9701L36.2755 54.8875C33.9288 57.2501 30.1101 57.2608 27.7475 54.9115C27.7395 54.9035 27.7315 54.8955 27.7235 54.8875L25.8061 52.9701C24.6755 51.8475 23.1475 51.2155 21.5581 51.2155H18.8141C15.4861 51.2155 12.7848 48.5168 12.7848 45.1861V42.4421C12.7848 40.8528 12.1528 39.3221 11.0301 38.1968L9.11279 36.2768C6.75013 33.9275 6.73946 30.1088 9.08879 27.7488L9.11279 27.7248L11.0301 25.8048C12.1528 24.6741 12.7848 23.1488 12.7848 21.5541V18.8155" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.1467 38.852L38.8533 25.1453" stroke="#576CB0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M38.8445 40.8597C38.3112 40.8597 37.8045 40.6464 37.4312 40.2731C37.2445 40.0864 37.1112 39.8464 37.0045 39.6064C36.8978 39.3664 36.8445 39.1291 36.8445 38.8597C36.8445 38.5931 36.8978 38.3264 37.0045 38.0864C37.1112 37.8464 37.2445 37.6331 37.4312 37.4464C38.1778 36.6997 39.5112 36.6997 40.2578 37.4464C40.4445 37.6331 40.6045 37.8464 40.7112 38.0864C40.7912 38.3264 40.8445 38.5931 40.8445 38.8597C40.8445 39.1291 40.7912 39.3664 40.7112 39.6064C40.6045 39.8464 40.4445 40.0864 40.2578 40.2731C39.8845 40.6464 39.3778 40.8597 38.8445 40.8597Z" fill="#576CB0"/>
                        <path d="M25.1376 27.1541C24.8709 27.1541 24.6309 27.0981 24.3909 26.9914C24.1509 26.8848 23.9109 26.7541 23.7243 26.5674C23.5376 26.3541 23.4043 26.1408 23.2976 25.9008C23.1909 25.6581 23.1376 25.4208 23.1376 25.1541C23.1376 24.8848 23.1909 24.6208 23.2976 24.3808C23.4043 24.1408 23.5376 23.9008 23.7243 23.7408C24.4976 22.9914 25.8043 22.9914 26.5509 23.7408C26.9243 24.1114 27.1376 24.6208 27.1376 25.1541C27.1376 25.4208 27.1109 25.6581 27.0043 25.9008C26.8976 26.1408 26.7376 26.3541 26.5509 26.5674C26.3643 26.7541 26.1509 26.8848 25.9109 26.9914C25.6709 27.0981 25.4043 27.1541 25.1376 27.1541Z" fill="#576CB0"/>
                      </g>
                    </svg>
                  </div>
                  <div class="indicator-text">
                    <span>Бонус</span>
                    <strong>12%</strong>
                  </div>
                </div>
                <div class="indicator">
                  <div class="indicator-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.2">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3333 29.8187C53.3333 41.928 44.232 53.2507 32 56C19.768 53.2507 10.6667 41.928 10.6667 29.8187V19.3147C10.6667 17.1493 11.976 15.1973 13.9813 14.3787L27.3147 8.92267C30.3173 7.69334 33.6827 7.69334 36.6853 8.92267L50.0187 14.3787C52.024 15.2 53.3333 17.1493 53.3333 19.3147V29.8187V29.8187Z" stroke="#576CB0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32 22.6667V20" stroke="#576CB0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32 38.6667V41.3334" stroke="#576CB0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.3707 36.76C28.0613 37.8907 29.24 38.672 30.6667 38.672H32H33.5893C35.6587 38.672 37.3333 36.9947 37.3333 34.928C37.3333 33.2107 36.1627 31.7147 34.4987 31.2933L29.4987 30.0373C27.8373 29.6213 26.6667 28.1253 26.6667 26.408C26.6667 24.3387 28.344 22.664 30.4107 22.664H32H33.3333C34.7547 22.664 35.9333 23.4427 36.6213 24.5707" stroke="#576CB0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </svg>
                  </div>
                  <div class="indicator-text">
                    <span>Баланс</span>
                    <strong>$ 22.9</strong>
                  </div>
                  <div class="indicator-check">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.37201 1.07697L6.00001 5.72497L10.628 1.07697" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="user-form">
                <div class="user-form_input">
                  <label for="">Ваша ссылка</label>
                  <div class="input-instance">
                    <input type="text" readonly value="csroll.com/r/6a65gag56a5eg">
                    <div class="input-instance_buttons">
                      <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_609_585)">
                            <path d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_609_585">
                              <rect width="18" height="18" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="user-form_input">
                  <label for="">Ваш код</label>
                  <div class="input-instance">
                    <input type="text" readonly value="GH665F-GA6-G6">
                    <div class="input-instance_buttons">
                      <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.24969 13.5019H3.65403C3.28085 13.5021 2.9229 13.3539 2.65903 13.09C2.39515 12.8262 2.24699 12.4682 2.24719 12.095V3.65403C2.24699 3.28085 2.39515 2.9229 2.65903 2.65903C2.9229 2.39515 3.28085 2.24699 3.65403 2.24719H12.095C12.4682 2.24699 12.8262 2.39515 13.09 2.65903C13.3539 2.9229 13.5021 3.28085 13.5019 3.65403V8.24969" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7217 15.5329L16.2833 12.9714C16.5762 12.6784 16.5762 12.2034 16.2833 11.9104L15.0933 10.7204C14.8003 10.4275 14.3254 10.4275 14.0324 10.7204L11.4708 13.282C11.3301 13.4227 11.2509 13.6135 11.2509 13.8125V15.7528H13.1913C13.3902 15.7528 13.581 15.6736 13.7217 15.5329Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                      <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_609_585)">
                            <path d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_609_585">
                              <rect width="18" height="18" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="questions">
            <QuestionBlock :faq="faq" v-for="faq in faqs" :key="faq.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import HeaderTop from "@/components/main/HeaderTop.vue";
import CircleProgress from "@/components/UI/CircleProgress.vue";
import QuestionBlock from "@/components/main/QuestionBlock.vue";
export default {
  data () {
    return {
      faqs: [
        {
          id: 0,
          title: 'Первый вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 1,
          title: 'Второй вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 2,
          title: 'Третий вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 3,
          title: 'Четвертый вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 4,
          title: 'Пятый вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 5,
          title: 'Шестой вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        }
      ]
    }
  },
  methods: {

  },
  components: {
    QuestionBlock,
    CircleProgress,
    HeaderTop
  }
}
</script>
<style scoped lang="scss">
.circle-progress-container {
  transform: rotate(180deg);
}
.referral {
  padding: 15px 12px;
  .top-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
    h2 {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      svg {
        margin-right: 12px;
      }
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
  }
  .content {
    display: flex;
    align-items: flex-start;
    margin-top: 24px;
    @media (max-width: 1200px) {
      flex-wrap: wrap;
      margin-top: 16px;
    }
    .types {
      width: 593px;
      min-width: 593px;
      @media (max-width: 1200px) {
        order: 1;
      }
      @media (max-width: 768px) {}
      .tabs {
        margin-bottom: 11px;
        border-radius: 20px;
        overflow: hidden;

        display: flex;
        .tab {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          background: rgba(69, 84, 137, 0.2);
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          cursor: pointer;
          text-align: center;
          color: #576CB0;
          transition: 0.2s;
          &.active,&:hover {
            background: rgba(69, 84, 137, 0.1);
          }
          @media (max-width: 600px) {
            font-size: 14px;
          }
        }
        .tab + .tab {
          border-left: 1px solid rgba(69, 84, 137, 0.2)
        }
      }
      .table {
        .lvl {
          width: 20%;
        }
        .to_next {
          width: 30%;
          @media (max-width: 600px) {
            width: 70%;
            text-align: right;
          }
        }
        .give {
          width: 20%;
          @media (max-width: 600px) {
            width: 50%;
            margin-top: 10px;
            padding-left: 7px;
          }
        }
        .referral_give {
          width: 30%;
          text-align: right;
          @media (max-width: 600px) {
            margin-top: 10px;
            width: 50%;
          }
        }
        .head {
          display: flex;
          align-items: center;
          padding: 13px 24px;
          justify-content: space-between;
          @media (max-width: 600px) {
            flex-wrap: wrap;
            padding-left: 0;
            padding-right: 0;
          }
          & > div {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #576CB0;
            &.give {
              padding-left: 0;
            }
          }
        }
        .table-items {
          .item {
            background: rgba(69, 84, 137, 0.1);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 9px 24px;
            &.select {
              background: rgba(234, 193, 89, 0.1);
            }
            @media (max-width: 600px) {
              flex-wrap: wrap;
              padding: 9px 16px;
            }
            .lvl {
              .lvl-avatar {
                background: url(@/assets/images/lvl-bg.png);
                background-size: 52px 42px;
                background-position: center center;
                width: 42px;
                height: 42px;
                min-width: 42px;
                font-weight: 600;
                font-size: 18px;
                line-height: 27px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #EAC159;
              }

            }
            .to_next {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              color: #EAC159;
            }
            .give,.referral_give {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
            }
          }
          .item + .item {
            margin-top: 8px;
          }
        }
      }
      @media (max-width: 1200px) {
        width: 100%;
        min-width: 100%;
        margin-bottom: 16px;
      }
    }
    .right-col {
      margin-left: 12px;
      flex-grow: 1;
      overflow: hidden;
      display: flex;
      @media (max-width: 1200px) {
        margin-left: 0;
      }
      @media (max-width: 1200px) {
        order: 0;
      }
      .user-informations {
        overflow: hidden;
        width: 100%;
        .top-indicators {
          display: flex;
          @media (max-width: 1600px) {
            flex-wrap: wrap;
          }
          .your-level {
            padding: 24px;
            width: 294px;
            padding-bottom: 32px;
            background: linear-gradient(251.16deg, rgba(37, 47, 80, 0) -17.49%, rgba(37, 47, 80, 0.5) 104.25%);
            filter: drop-shadow(0px 20px 30px rgba(23, 18, 43, 0.2));
            border-radius: 16px 0px 0px 16px;
            min-width: 294px;
            @media (max-width: 1600px) {
              width: 100%;
              min-width: 100%;
              margin-bottom: 16px;
            }
            .your-level_head {
              display: flex;
              align-items: center;
              justify-content: space-between;
              strong {
                display: flex;
                align-items: center;
                svg {
                  margin-right: 8px;
                }
                font-weight: 600;
                font-size: 14px;
                line-height: 100%;
              }
              span {
                font-weight: 600;
                font-size: 14px;
                line-height: 100%;
                color: #576CB0;
              }
            }
            .level-circle {
              width: 142px;
              height: 142px;
              border-radius: 100%;
              margin: 0 auto;
              position: relative;
              margin-top: 35px;
              margin-bottom: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                font-weight: 700;
                font-size: 64px;
                position: absolute;
                z-index: 2;
                line-height: 100%;
                color: #EAC159;
              }
            }
            .level-prices {
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: 600;
              font-size: 16px;
              line-height: 100%;
              strong {
                color: rgba(87, 108, 176, 1);
                font-weight: 600;
                font-size: 16px;
                margin: 0 10px;
                line-height: 100%;
              }
            }
          }
          .user-details {
            flex-grow: 1;
            overflow: hidden;
            background: linear-gradient(251.16deg, rgba(37, 47, 80, 0) -17.49%, rgba(37, 47, 80, 0.5) 104.25%);
            filter: drop-shadow(0px 20px 30px rgba(23, 18, 43, 0.2));
            border-radius: 0px 0px 16px 0px;
            @media (max-width: 1600px) {
              width: 100%;
              border-radius: 16px;
            }
            .indicators {
              padding: 31px 32px;
              padding-right: 35px;
              background: linear-gradient(251.16deg, rgba(37, 47, 80, 0) -17.49%, rgba(37, 47, 80, 0.5) 104.25%);
              filter: drop-shadow(0px 20px 30px rgba(23, 18, 43, 0.2));
              border-radius: 0px 16px 0px 0px;
              display: flex;
              justify-content: space-between;

              @media (max-width: 1600px) {
                padding: 16px;
              }
              .indicator {
                align-items: center;
                display: flex;
                position: relative;
                @media (max-width: 600px) {
                  width: 50%;
                }
                .indicator-icon {
                  position: absolute;
                  left: 0;
                  svg {
                    width: 40px;
                  }
                }
                .indicator-text {
                  padding-right: 24px;
                  padding-left: 40px;
                  @media (max-width: 1600px) {
                    padding-left: 20px;
                  }
                  @media (max-width: 600px) {
                    padding-left: 10px;
                  }
                  strong,span {
                    display: block;
                    width: 100%;
                  }
                  strong {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 27px;
                    color: #EAC159;
                    @media (max-width: 1600px) {
                      font-size: 20px;
                    }
                    @media (max-width: 575px) {
                      font-size: 14px;
                      line-height: 16px;
                    }
                  }
                  span {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 21px;
                    @media (max-width: 575px) {
                      font-size: 12px;
                      line-height: 16px;
                    }
                  }
                }
                .indicator-check {
                  width: 24px;
                  height: 24px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 100%;
                  background: rgba(81, 215, 111, 0.1);
                  svg {
                    margin-top: 2px;
                  }
                  @media (max-width: 768px) {
                    display: none;
                  }
                  border: 1px solid #4ABA62;
                }
              }
              .indicator:last-child {
                @media (max-width: 768px) {
                  margin-top: 0;
                }
              }
            }
            .user-form {
              padding: 29px 32px;
              @media (max-width: 600px) {
                padding: 16px;
              }
              .user-form_input {
                label {
                  display: block;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 21px;
                  margin-bottom: 8px;

                }
                .input-instance {
                  height: 40px;
                  width: 100%;
                  background: #232C4B;
                  input {
                    padding: 0 16px;
                    background: transparent;
                    height: 100%;
                    width: 100%;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 21px;
                    color: #576CB0;
                  }
                  border-radius: 8px;
                  position: relative;
                  .input-instance_buttons {
                    position: absolute;
                    padding-right: 16px;
                    right: 0;
                    top: 0;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    button {
                      display: flex;
                      align-items: center;
                      padding: 8px;
                      background: transparent;
                      cursor: pointer;
                      transition: 0.2s;
                      &:hover {
                        opacity: 0.8;
                      }
                      &:focus-within {
                        opacity: 0.5;
                      }
                    }
                  }
                }
              }
              .user-form_input + .user-form_input {
                margin-top: 16px;
              }
            }
          }
        }
        .questions {
          padding: 24px 0;
          @media (max-width: 1600px) {
            padding-top: 16px;
          }
          @media (max-width: 768px) {
            padding-bottom: 6px;
          }
          .question + .question {
            margin-top: 12px;
          }
        }

      }
    }
  }
}
.top-referrals {
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  svg {
    margin-right: 8px;
  }
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  &:hover {
    opacity: 0.8;
  }
  transition: 0.2s;
  background: #4E70E9;
  border-radius: 8px;
  padding: 12px 32px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
    justify-content: center;
  }
}

.top-referrals {
  &.mobile {
    display: none;
    width: 100%;
    justify-content: center;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      display: flex;
      order: 1;
    }
  }
}
</style>