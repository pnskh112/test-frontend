<template>
  <div class="Login">
    <div class="LoginTitleWrapper">
      <div class="LoginTitle">
        <div class="LoginTitle__main">
          <v-title>ログイン</v-title>
        </div>
      </div>
    </div>

    <div class="LoginFormWrapper">
      <v-message v-if="showLoginError" class="ErrorMessage">
        <p class="ErrorMessage__text">
          メールアドレス または パスワードが間違っています
        </p>
      </v-message>
      <form @submit.prevent="onSubmit" class="LoginForm">
        <div class="LoginForm__userId">
          <label for="userId">メールアドレス</label>
          <v-text-input
            @input="(e: InputEvent) => (userId = (e.currentTarget as HTMLInputElement).value)"
            class="LoginForm__userIdInput"
            id="userId"
            type="text"
            :placeholder="'example@vie-style.com'"
          />
        </div>

        <div class="LoginForm__password">
          <label for="password">パスワード</label>
          <v-text-input
            @input="(e: InputEvent) => (password = (e.currentTarget as HTMLInputElement).value)"
            class="LoginForm__passwordInput"
            id="password"
            type="password"
            :placeholder="'パスワードを入力してください'"
          />
        </div>

        <v-button type="submit">ログイン</v-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { login } from "@/application/authApplication";
import VButton from "@/components/VButton.vue";
import VMessage from "@/components/VMessage.vue";
import VTextInput from "@/components/VTextInput.vue";
import VTitle from "@/components/VTitle.vue";
const router = useRouter();

const userId = ref<string>("");
const password = ref<string>("");

const showLoginError = ref<boolean>(false);

const onSubmit = async () => {
  try {
    await login(userId.value, password.value);
    router.push({ name: "home" });
    showLoginError.value = false;
  } catch (e: unknown) {
    console.log(e);
    showLoginError.value = true;
  }
};
</script>

<style lang="scss" scoped>
.Login {
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.LoginTitleWrapper {
  display: flex;
  align-items: center;
}

.LoginTitle {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  text-align: center;
}

.LoginTitle__main > h1 {
  margin: 0;
  font-size: 40px;
}

.ErrorMessage__text {
  font-size: 12px;
}

.LoginForm {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.LoginForm__userId,
.LoginForm__password {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  label {
    font-weight: bold;
  }
}

.LoginForm__userIdInput,
.LoginForm__passwordInput {
  min-width: 0;
  flex-grow: 1;
}

.LoginForm label {
  flex-shrink: 0;
}
</style>
