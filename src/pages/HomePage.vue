<template>
  <div class="Home">
    <div class="HomeTitleWrapper">
      <div class="HomeTitle">
        <div class="HomeTitle__main">
          <v-title>VIE STYLE<br />王国</v-title>
        </div>
      </div>
    </div>
    <div>
      <a @click="onClickLogout">ログアウト</a>
    </div>
    <img class="kingdom" src="@/assets/images/kingdoms/kingdom-medium.png" />
  </div>
  <v-main-bar></v-main-bar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { logout } from "@/application/authApplication";
import VMainBar from "@/components/VMainBar.vue";
import VTitle from "@/components/VTitle.vue";

const router = useRouter();

const onClickLogout = async (): Promise<void> => {
  const confirm = window.confirm("ログアウトしますか？");
  if (confirm) {
    await logout()
      .then(() => {
        router.push("login");
      })
      .catch(() => {
        window.alert("エラーが発生しました。時間をおいて再度お試しください。");
      });
  }
};
</script>

<style scoped>
.Home {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
}

.HomeTitleWrapper {
  display: flex;
  align-items: center;
}

.HomeTitle {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  text-align: center;
}

.HomeTitle__main > h1 {
  margin: 0;
  font-size: 40px;
}

.kingdom {
  width: 339px;
  height: 346.5px;
  /* margin: 0 auto; */
}
</style>
