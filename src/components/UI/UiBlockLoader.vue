<template>
  <div class="ui-block-loader">
    <div class="icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 1C8.21997 1 6.47991 1.52784 4.99987 2.51677C3.51983 3.50571 2.36628 4.91131 1.68509 6.55585C1.0039 8.20038 0.82567 10.01 1.17294 11.7558C1.5202 13.5016 2.37737 15.1053 3.63604 16.364C4.89472 17.6226 6.49836 18.4798 8.24419 18.8271C9.99002 19.1743 11.7996 18.9961 13.4442 18.3149C15.0887 17.6337 16.4943 16.4802 17.4832 15.0001C18.4722 13.5201 19 11.78 19 10" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span>Пожалуйста, подождите</span>
  </div>
</template>
<style scoped lang="scss">
.ui-block-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    margin-bottom: 24px;
    display: flex;
    animation: spin-clockwise 1s infinite linear;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  span {
    width: 100%;
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #576CB0;
  }
  height: 100%;
  background: #232C4B;
  box-shadow: 0px 0px 20px rgba(33, 41, 72, 0.6);
}

@keyframes spin-clockwise {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>