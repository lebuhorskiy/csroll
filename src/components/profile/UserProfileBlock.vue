<template>
  <div class="user-profile-block">
    <div class="logout">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M7 12H21M21 12L18 9M21 12L18 15" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
     <div class="avatar">
       <img src="@/assets/images/av1.png" alt="">
       <div class="lvl">5 LVL</div>
     </div>
    <div class="nickname">osvaldxx</div>

    <div class="progress">
      <div class="between">
        <div class="from">5 LVL</div>
        <div class="to">6 LVL</div>
      </div>
      <div class="progress-line">
        <div class="progress-line_fill"></div>
      </div>

      <div class="progress-indicators">
        $ 1 000   <em>/</em>   $ 2 000
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss">
.user-profile-block {
  width: 280px;
  min-width: 280px;
  background: rgba(69, 84, 137, 0.1);
  border-radius: 16px;
  padding: 24px 32px;
  padding-top: 32px;
  position: relative;
  .logout {
    position: absolute;
    right: 24px;
    top: 24px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 2px solid #EAC159;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
    .lvl {
      position: absolute;
      bottom: -5px;
      width: 79px;
      background: url(@/assets/images/lvl-bg-profile.png);
      background-size: 100% 100%;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      left: calc(50% - 39.5px);
      font-size: 14px;
      line-height: 21px;
      backdrop-filter: blur(5px);
      border-radius: 8px;
    }
  }
  .nickname {
    margin-top: 23px;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 15px;
  }
  .progress {
    width: 100%;
    .between {
      display: flex;
      margin-bottom: 8px;
      justify-content: space-between;
      .from,.to {
        background: rgba(234, 193, 89, 0.1);
        border: 1px solid #EAC159;
        border-radius: 8px;
        padding: 4px 8px;
        font-weight: 700;
        font-size: 10px;
        line-height: 15px;
      }
    }
    .progress-line {
      height: 10px;
      width: 100%;
      background: rgba(69, 84, 137, 0.2);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 27px;
      .progress-line_fill {
        width: 40%;
        height: 100%;
        background: #EAC159;
        border-radius: 6px;
      }
    }
    .progress-indicators {
      font-weight: 600;
      font-size: 15px;
      line-height: 100%;
      display: flex;
      justify-content: center;
      em {
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 100%;
        margin: 0 10px;
        color: rgba(69, 84, 137, 1)
      }
    }
  }
}
</style>