<template>
  <div class="VMainBar">
    <div class="MainBar__home">
      <img class="MainBar__icon" src="@/assets/images/icons/home-active.png" />
      <div>ホーム</div>
    </div>
    <div class="MainBar__quest">
      <img
        class="MainBar__icon"
        src="@/assets/images/icons/quest-inactive.png"
      />
      <div>クエスト</div>
    </div>
    <div class="MainBar__diplomacy">
      <img
        class="MainBar__icon"
        src="@/assets/images/icons/diplomacy-inactive.png"
      />
      <div>広場</div>
    </div>
  </div>
</template>

<style scoped>
.VMainBar {
  min-width: 366px;
  max-height: 78px;
  border-width: 20ex 1.25ex 0.5ex;
  border-radius: 100px;
  border-color: black;
  box-shadow: 0px 4px black;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 40px);
  max-width: 100%;
  display: flex;

  gap: 8px;

  display: flex;
  padding: 12px 20px;
  justify-content: space-around;
  align-items: flex-start;
  gap: 8px;
}

.MainBar__home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MainBar__quest {
  color: #ffda98;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MainBar__diplomacy {
  color: #ffda98;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MainBar__icon {
  color: var(--thema-yellow, #ffa800);
  text-align: right;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 30px;
  height: 30px;
}
</style>
