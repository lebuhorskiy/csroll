<template>
  <div class="top-players">
    <HeaderTop />

    <div class="content">
      <div class="left-content">
        <div class="head">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21H16M12 17V21M12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12V4H7V12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17ZM7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9ZM21 9C21 10.1046 20.1046 11 19 11C17.8954 11 17 10.1046 17 9C17 7.89543 17.8954 7 19 7C20.1046 7 21 7.89543 21 9Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Топ игроков
        </div>
        <div class="head-information">
          <span>Попадите в топ и получите призы!</span>
          <div class="timer">
            <div class="timer-label">
              До следующей раздачи призов
            </div>
            <div class="timer-value">24:59:58</div>
          </div>
        </div>
        <div class="players-list">
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
                <div class="player-user_place">
                  1
                  <div class="player-user_place-img">
                    <img src="@/assets/images/gold-top.png" alt="">
                  </div>
                </div>
              </div>
              <div class="player-user_nickname">Jacob Jones</div>
              <div class="player-user_win">
                <strong>$ 175 117.9</strong>
                <span>Денег выиграно</span>
              </div>
            </div>
            <div class="player-skin">
              <div class="quality">MW</div>
              <div class="name">
                <strong>
                  Nomad Knife
                </strong>
                <span>
                  Slaughter
                </span>
              </div>
              <div class="price">
                $ 199.9
              </div>
              <div class="shadow"></div>
              <img src="@/assets/images/big-skin.png" alt="" class="skin-img">
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
                <div class="player-user_place">
                  2
                  <div class="player-user_place-img">
                    <img src="@/assets/images/gold-top.png" alt="">
                  </div>
                </div>
              </div>
              <div class="player-user_nickname">Jacob Jones</div>
              <div class="player-user_win">
                <strong>$ 175 117.9</strong>
                <span>Денег выиграно</span>
              </div>
            </div>
            <div class="player-skin purple">
              <div class="quality">MW</div>
              <div class="name">
                <strong>
                  Nomad Knife
                </strong>
                <span>
                  Slaughter
                </span>
              </div>
              <div class="price">
                $ 199.9
              </div>
              <div class="shadow"></div>
              <img src="@/assets/images/big-skin.png" alt="" class="skin-img">

            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
                <div class="player-user_place">
                  3
                  <div class="player-user_place-img">
                    <img src="@/assets/images/gold-top.png" alt="">
                  </div>
                </div>
              </div>
              <div class="player-user_nickname">Jacob Jones</div>
              <div class="player-user_win">
                <strong>$ 175 117.9</strong>
                <span>Денег выиграно</span>
              </div>
            </div>
            <div class="player-skin green">
              <div class="quality">MW</div>
              <div class="name">
                <strong>
                  Nomad Knife
                </strong>
                <span>
                  Slaughter
                </span>
              </div>
              <div class="price">
                $ 199.9
              </div>
              <img src="@/assets/images/big-skin.png" alt="" class="skin-img">
              <div class="shadow"></div>
            </div>
          </div>
        </div>

        <div class="table">
          <div class="table-head">
            <div class="place">Место</div>
            <div class="referral">Игрок</div>
            <div class="coef">Лучший коэффициент</div>
            <div class="prize">Приз</div>
            <div class="bank">Депозитов</div>
          </div>
          <div class="table-items">
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin pink">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin purple">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin blue">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin green">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin pink">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin purple">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin blue">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin green">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin pink">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin purple">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin blue">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin green">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin pink">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin purple">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin blue">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
            <div class="table-item">
              <div class="place"># 4</div>
              <div class="referral">
                <div class="user">
                  <img src="@/assets/images/av1.png" alt="" class="avatar">
                  <div class="nickname">Darrell Steward</div>
                </div>
              </div>
              <div class="coef">
                <div class="coef-block">
                  X 10.20
                </div>
              </div>
              <div class="prize">
                <div class="prize-skin green">
                  <div class="prize-skin_img">
                    <img src="@/assets/images/skin-1.png" alt="">
                  </div>
                  <div class="prize-skin_shadow"></div>
                </div>
              </div>
              <div class="bank">
                $ 119.87
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="fortune-block">
        <div class="fortune-head">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9975 2.99622C5.9975 5.20628 4.20589 6.99788 1.99583 6.99788C4.20589 6.99788 5.9975 8.78949 5.9975 10.9995C5.9975 8.78949 7.78911 6.99788 9.99917 6.99788C7.78911 6.99788 5.9975 5.20628 5.9975 2.99622Z" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0021 15.0012C17.0021 12.2387 14.7626 9.99915 12 9.99915C14.7626 9.99915 17.0021 7.75964 17.0021 4.99707C17.0021 7.75964 19.2416 9.99915 22.0042 9.99915C19.2416 9.99915 17.0021 12.2387 17.0021 15.0012Z" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.0021 15.0012V16.0016" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.0021 4.99706V3.99664" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.99917 21.0037V22.0041" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.99917 14.0008V13.0004" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.9975 10.9996V12" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.9975 1.99585V2.99627" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99917 13.5006C9.99917 15.7107 8.20756 17.5023 5.99751 17.5023C8.20756 17.5023 9.99917 19.2939 9.99917 21.5039C9.99917 19.2939 11.7908 17.5023 14.0008 17.5023C11.7908 17.5023 9.99917 15.7107 9.99917 13.5006Z" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Везунчики этого дня
        </div>
        <div class="fortune-items">
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin pink">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin purple">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin green">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin blue">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin pink">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin purple">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin green">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin blue">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin pink">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin purple">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin green">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin blue">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin pink">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin purple">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin green">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
          <div class="player">
            <div class="player-user">
              <div class="player-user_avatar">
                <img src="@/assets/images/av1.png" alt="">
              </div>
              <div class="player-user_info">
                <strong>MonnArt</strong>
                <span>$ 119,87</span>
              </div>
            </div>
            <div class="player-rate">X 10.20</div>
            <div class="player-prize">
              <div class="prize-skin blue">
                <div class="prize-skin_img">
                  <img src="@/assets/images/skin-1.png" alt="">
                </div>
                <div class="prize-skin_shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
</script>
<style scoped lang="scss">
.top-players {
  padding: 15px 12px;
  .content {
    display: flex;
    overflow: hidden;
    @media (max-width: 1250px) {
      flex-wrap: wrap;
    }
    .left-content {
      flex-grow: 1;
      overflow: hidden;
      margin-right: 25px;
      @media (max-width: 1250px) {
        margin-right: 0;
      }
      .head {
        padding: 24px 0;
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        padding-top: 18px;
        svg {
          margin-right: 12px;
        }
      }
      .head-information {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 768px) {
          flex-wrap: wrap;
        }
        span {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          @media (max-width: 768px) {
            width: 100%;
            margin-bottom: 5px;
          }
        }
        .timer {
          display: flex;
          align-items: center;
          .timer-label {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #576CB0;
            margin-right: 16px;
          }
          .timer-value {
            font-family: 'DS-Digital';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 100%;
            padding: 5px 7px;
            background: #232C4B;
            border-radius: 3px;
          }
        }
      }
      .players-list {
        margin-bottom: 40px;
        padding-top: 29px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 28px;
        @media (max-width: 992px) {
          grid-gap: 16px;
          padding-top: 16px;
        }
        @media (max-width: 650px) {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .player {
          overflow: hidden;
          background: rgba(69, 84, 137, 0.1);
          padding: 24px 19px;
          border-radius: 16px;
          padding-top: 30px;
          padding-bottom: 19px;
          .player-user {
            .player-user_avatar {
              margin: 0 auto;
              width: 100px;
              height: 100px;
              border: 2px solid #ECD350;
              box-shadow: 0px 0px 30px 10px rgba(236, 211, 80, 0.4);
              border-radius: 100%;
              img {
                width: 100%;
                height: 100%;
              }

              position: relative;
              .player-user_place {
                position: absolute;
                background: rgba(35, 44, 75, 0.5);
                backdrop-filter: blur(2.5px);
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 16px;
                line-height: 100%;
                border-radius: 100%;
                left: calc(50% - 18px);
                bottom: -15px;
                .player-user_place-img {
                  position: absolute;
                  width: 50px;
                  height: 50px;
                  left: calc(50% - 25px);
                }
              }
            }
            .player-user_nickname {
              font-weight: 700;
              font-size: 16px;
              line-height: 100%;
              margin-top: 38px;
              width: 100%;
              text-align: center;
              margin-bottom: 16px;
            }
            .player-user_win {
              width: 150px;
              border-radius: 8px;
              background: rgba(69, 84, 137, 0.1);
              padding: 8px;
              margin: 0 auto;
              margin-bottom: 39px;
              strong,span {
                display: block;
                white-space: normal;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 100%;
                text-align: center;
              }
              strong {
                font-weight: 700;
                font-size: 14px;
                line-height: 100%;
                margin-bottom: 8px;
                color: #EAC159;
              }
              span {
                font-weight: 600;
                font-size: 12px;
                line-height: 100%;
                color: #576CB0;
              }
            }
          }
          .player-skin {
            width: 100%;
            position: relative;
            .skin-img {
              position: absolute;
              right: 0px;
              bottom: 0px;
              width: 120px;
              height: 90px;
              @media (max-width: 992px) {
                width: 80px;
                height: auto;
                right: -10px;
              }
            }
            .quality {
              font-weight: 700;
              font-size: 10px;
              line-height: 18px;
              color: #576CB0;
              display: block;
              margin-bottom: 4px;
            }
            .name {
              margin-bottom: 14px;
              strong,span {
                width: 100%;
                display: block;
                font-weight: 600;
                font-size: 14px;
                line-height: 21px;
              }
              span {
                color: rgba(87, 108, 176, 1)
              }
            }
            .price {
              font-weight: 700;
              font-size: 18px;
              margin-top: 14px;
              line-height: 21px;
              color: #EAC159;
            }
            .shadow {
              position: absolute;
              width: 180px;
              height: 180px;
              border-radius: 100%;
              background: rgba(255, 82, 96, 0.1);
              filter: blur(35px);
              right: -90px;
              bottom: -120px;
            }
            &.purple {
              .shadow {
                background: rgba(169, 82, 255, 0.1);
              }
            }
            &.green {
              .shadow {
                background: rgba(74, 186, 98, 0.1);
              }
            }
          }
          @media (max-width: 650px) {
            padding: 16px;
            width: calc(50% - 8px);
            &:first-child {
              width: 100%;
            }
          }
          @media (max-width: 450px) {
            width: 100%;
          }
        }
      }
      .table {
        flex-grow: 1;
        margin-right: 12px;
        @media (max-width: 1024px) {
          margin-right: 0;
        }
        .place {
          width: 15%;
        }
        .referral {
          width: 35%;
        }
        .coef {
          width: 35%;
        }
        .prize {
          width: 15%;
        }
        .coef {
          .coef-block {
            font-weight: 600;
            width: fit-content;
            font-size: 14px;
            line-height: 21px;
            padding: 8px 17px;
            border-radius: 8px;
            background: rgba(69, 84, 137, 0.1);
          }
        }
        .bank {
          text-align: right;
          width: 15%;
        }
        .table-head {
          .prize {
            padding-left: 15px;
          }
          display: flex;
          padding-bottom: 21px;
          padding-left: 15px;
          padding-right: 44px;
          align-items: center;
          justify-content: space-between;
          & > div {
            font-weight: 600;
            font-size: 14px;
            line-height: 100%;
            color: #576CB0;
          }
          @media (max-width: 600px) {
            padding-right: 16px;
            padding-left: 0;
            .coef {
              margin-right: 0;
              justify-content: flex-end;
              display: flex;
              text-align: right;
              white-space: nowrap;
              width: 40%;
            }
            .prize {
              width: 30%;
              text-align: left;
              justify-content: flex-start;
              padding-left: 0;
            }
            .bank {
              width: 50%;
            }
            & > div {
              font-size: 9px;
            }
            .referral {
              width: 20%;
            }
            .coef {
              text-align: left;
              justify-content: flex-start;
              width: 40%;
            }
            .prize {
              width: 20%;

            }
            .bank {
              width: 20%;
            }
          }
        }
        .table-items {
          .table-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 16px;
            background: rgba(69, 84, 137, 0.1);
            padding: 9px 20px;
            padding-right: 44px;
            .place {
              font-weight: 600;
              font-size: 14px;
              line-height: 100%;
              color: #576CB0;
            }
            .referral {
              .user {
                display: flex;
                align-items: center;
                .avatar {
                  width: 40px;
                  height: 40px;
                  border-radius: 100%;
                  margin-right: 16px;
                }
                .nickname {
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 100%;
                }
              }
            }
            .prize {
              .prize-skin {
                position: relative;
                width: 70px;
                .prize-skin_shadow {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &::after {
                    content: "";
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: rgba(236, 211, 80, 0.5);
                    filter: blur(15px);
                  }
                }
                .prize-skin_img {
                  width: 70px;
                  height: 52px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    max-width: 100%;
                    max-height: 100%;
                  }
                }
                &.yellow {
                  .prize-skin_shadow {
                    &::after {
                      background: rgba(236, 211, 80, 0.5);
                      filter: blur(15px);
                    }
                  }
                }
                &.purple {
                  .prize-skin_shadow {
                    &::after {
                      background: rgba(236, 80, 192, 0.5);
                      filter: blur(15px);
                    }
                  }
                }
                &.green {
                  .prize-skin_shadow {
                    &::after {
                      background: rgba(74, 186, 98, 0.5);
                      filter: blur(15px);
                    }
                  }
                }
                &.blue {
                  .prize-skin_shadow {
                    &::after {
                      background: rgba(78, 112, 233, 0.5);
                      filter: blur(15px);
                    }
                  }

                }
                &.pink {
                  .prize-skin_shadow {
                    &::after {
                      background: rgba(236, 80, 80, 0.5);
                      filter: blur(15px);
                    }
                  }
                }
              }
            }
            .bank {
              font-weight: 600;
              font-size: 14px;
              line-height: 100%;
              color: #EAC159
            }
            @media (max-width: 600px) {
              padding: 9px 10px;
              .place {
                width: 30px;
                min-width: 30px;
                font-size: 10px;
              }
              .referral {
                .nickname {
                  display: none;
                }
              }
              .coef {
                width: 40%;
                margin-right: 0;
                justify-content: flex-end;
                display: flex;
                font-size: 10px;
                .coef-block {
                  font-size: 10px;
                  white-space: nowrap;
                  padding: 5px 8px;
                }
              }
              .prize {
                width: 20%;
                margin-top: 10px;
                font-size: 10px;
              }
              .bank {
                margin-top: 10px;
                width: 50%;
                font-size: 10px;
              }
              .referral {
                width: 20%;
              }
              .coef {
                justify-content: flex-start;
                .coef-block {
                  justify-content: flex-start;
                }
                width: 40%;
              }
              .prize {
                width: 20%;
                .prize-skin {
                  width: 50px;
                  .prize-skin_img {
                    width: 50px;

                  }
                }
              }
              .bank {
                width: 20%;
              }
            }
          }
          .table-item + .table-item {
            margin-top: 12px;
          }
        }
      }
    }
    .fortune-block {
      width: 504px;
      min-width: 504px;
      @media (max-width: 1360px) {
        width: 450px;
        min-width: 450px;
      }
      @media (max-width: 1250px) {
        width: 100%;
        min-width: 100%;
      }
      .fortune-head {
        display: flex;
        align-items: center;
        padding: 24px 0;
        svg {
          margin-right: 12px;
        }
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
      }
      .fortune-items {
        background: rgba(69, 84, 137, 0.1);
        border-radius: 16px;
        padding: 24px;
        @media (max-width: 600px) {
          padding: 16px;
        }
        .player {
          justify-content: space-between;
          display: flex;
          align-items: center;
          border-radius: 16px;
          background: rgba(69, 84, 137, 0.1);
          padding: 10px 24px;
          @media (max-width: 600px) {
            padding: 8px 15px;
          }
          .player-user {
            display: flex;
            align-items: center;
            .player-user_avatar {
              margin-right: 16px;
              width: 40px;
              height: 40px;
              border-radius: 100%;
              img {
                width: 100%;
                height: 100%;
                border-radius: 100%;
              }
            }
            .player-user_info {
              strong,span {
                width: 100%;
                display: block;
              }
              strong {
                font-weight: 600;
                font-size: 14px;
                line-height: 100%;
                margin-bottom: 8px;
              }
              span {
                font-weight: 600;
                font-size: 12px;
                line-height: 100%;
                color: #EAC159;
              }
            }
          }
          .player-rate {
            padding: 8px 16.5px;
            background: rgba(69, 84, 137, 0.1);
            border-radius: 8px;
            overflow: hidden;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            @media (max-width: 600px) {
              display: none;
            }
          }
          .player-prize {
            .prize-skin {
              position: relative;
              width: 60px;
              height: 45px;
              .prize-skin_img {
                width: 60px;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                  max-width: 100%;
                  max-height: 100%;
                }
              }
              .prize-skin_shadow {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                &::after {
                  content: "";
                  display: block;
                  width: 40px;
                  height: 40px;
                  background: rgba(236, 211, 80, 0.15);
                  filter: blur(11px);
                }
              }

              &.pink {
                .prize-skin_shadow {
                  &::after {
                    background: rgba(220, 82, 255, 0.15);
                    filter: blur(11px);
                  }
                }
              }
              &.blue  {
                .prize-skin_shadow {
                  &::after {
                    background: rgba(78, 112, 233, 0.15);
                    filter: blur(11px);
                  }
                }
              }

              &.green  {
                .prize-skin_shadow {
                  &::after {
                    background: rgba(74, 186, 98, 0.15);
                    filter: blur(11px);
                  }
                }
              }

              &.purple  {
                .prize-skin_shadow {
                  &::after {
                    background: rgba(236, 80, 192, 0.15);
                    filter: blur(11px);
                  }
                }
              }
            }
          }
        }
        .player + .player {
          margin-top: 16px;
        }
      }
    }
  }
}
</style>