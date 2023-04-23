<template>
  <div class="wheel-statistics">
    <div class="statistics-indicators">
      <div class="statistics-indicator">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.75 15.75V12.25C29.75 11.3217 29.3813 10.4315 28.7249 9.77513C28.0685 9.11875 27.1783 8.75 26.25 8.75H8.75C7.82174 8.75 6.9315 9.11875 6.27513 9.77513C5.61875 10.4315 5.25 11.3217 5.25 12.25V22.75C5.25 23.6783 5.61875 24.5685 6.27513 25.2249C6.9315 25.8813 7.82174 26.25 8.75 26.25H12.25M15.75 15.75H33.25C35.183 15.75 36.75 17.317 36.75 19.25V29.75C36.75 31.683 35.183 33.25 33.25 33.25H15.75C13.817 33.25 12.25 31.683 12.25 29.75V19.25C12.25 17.317 13.817 15.75 15.75 15.75ZM28 24.5C28 26.433 26.433 28 24.5 28C22.567 28 21 26.433 21 24.5C21 22.567 22.567 21 24.5 21C26.433 21 28 22.567 28 24.5Z" stroke="#EAC159" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="statistics-indicator_info">
          <strong>0,00 $</strong>
          <span>Раунд #14573</span>
        </div>
      </div>
      <div class="statistics-indicator">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.791 19.1308C33.5951 19.1308 35.8698 16.8577 35.8698 14.0536C35.8698 11.2495 33.5951 8.97638 30.791 8.97638" stroke="#4E70E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M33.1259 24.6483C33.9633 24.7061 34.7958 24.8248 35.6156 25.0093C36.7545 25.2322 38.1245 25.699 38.6121 26.7209C38.9234 27.3754 38.9234 28.1374 38.6121 28.7935C38.1261 29.8153 36.7545 30.2805 35.6156 30.5148" stroke="#4E70E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.0075 19.1308C8.2034 19.1308 5.9287 16.8577 5.9287 14.0536C5.9287 11.2495 8.2034 8.97638 11.0075 8.97638" stroke="#4E70E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.67262 24.6483C7.83525 24.7061 7.00269 24.8248 6.18296 25.0093C5.044 25.2322 3.67404 25.699 3.18798 26.7209C2.87517 27.3754 2.87517 28.1374 3.18798 28.7935C3.67244 29.8153 5.044 30.2805 6.18296 30.5148" stroke="#4E70E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8911 25.7417C26.573 25.7417 31.4272 26.6015 31.4272 30.0425C31.4272 33.4818 26.6051 34.3737 20.8911 34.3737C15.2075 34.3737 10.3549 33.5139 10.3549 30.0729C10.3549 26.632 15.177 25.7417 20.8911 25.7417Z" stroke="#4E70E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8911 20.8336C17.1437 20.8336 14.1391 17.829 14.1391 14.0801C14.1391 10.3327 17.1437 7.32812 20.8911 7.32812C24.6384 7.32812 27.643 10.3327 27.643 14.0801C27.643 17.829 24.6384 20.8336 20.8911 20.8336Z" stroke="#4E70E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="statistics-indicator_info">
          <strong>0</strong>
          <span>Игроков</span>
        </div>
      </div>

      <router-link to="/wheel/histories" class="history">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L14 14M3.04999 11.0001C3.27408 8.80013 4.30025 6.75968 5.93272 5.26803C7.56519 3.77639 9.68968 2.93795 11.9009 2.9127C14.112 2.88744 16.2551 3.67713 17.9213 5.1311C19.5874 6.58507 20.6599 8.60155 20.9342 10.7958C21.2084 12.99 20.6653 15.2085 19.4083 17.0278C18.1514 18.8472 16.2686 20.1401 14.1193 20.6599C11.9699 21.1797 9.7044 20.89 7.75498 19.8461C5.80557 18.8022 4.30871 17.0772 3.54999 15.0001M3.04999 20.0001V15.0001H8.04999" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </div>
    <div class="statistics-last">
      <div class="statistics-last_title">
        Последние 100
      </div>
      <div class="statistics-counts">
        <div class="statistics-count purple">50</div>
        <div class="statistics-count green">25</div>
        <div class="statistics-count pink">20</div>
        <div class="statistics-count yellow">5</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wheel-statistics {
  display: flex;
  .statistics-indicators,.statistics-last {
    background: rgba(69, 84, 137, 0.1);
    border-radius: 16px;
  }
  .statistics-indicators {
    margin-right: 12px;
    padding: 22px 32px;
    flex: 1.2;
    display: flex;
    align-items: center;
    .statistics-indicator {
      display: flex;
      align-items: center;
      .statistics-indicator_info {
        margin-left: 12px;
        strong,span {
          display: block;
          width: 100%;
        }
        strong {
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
        }
        span {
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          color: #455489
        }
      }
    }
    .statistics-indicator + .statistics-indicator {
      margin-left: 50px;
    }
    .history {
      margin-left: auto;
      cursor: pointer;
      &:hover {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  .statistics-last {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 19px 32px;
    .statistics-last_title {
      font-weight: 600;
      font-size: 17px;
      margin-right: 24px;
      white-space: nowrap;
      line-height: 28px;
    }
    .statistics-counts {
      display: flex;
      margin-left: auto;
      .statistics-count {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 52px;
        min-width: 80px;
        background: rgba(69, 84, 137, 0.1);
        border-radius: 8px;
        &.purple {
          color: #4E70E9;
        }
        &.green {
          color: #4ABA62;
        }
        &.pink {
          color: #A430FF;
        }
        &.yellow {
          color: #EAC159;
        }
      }
      .statistics-count + .statistics-count {
        margin-left: 10px;
      }
    }
  }
}
</style>