<template>
  <div class="wrapper">
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
      <Field
        name="name"
        type="text"
        placeholder="ФИО"
        class="field"
        :class="{ 'is-invalid': errors.name }"
      />
      <ErrorMessage name="name" class="error" />
      <Field
        name="phone"
        type="phone"
        placeholder="Телефон"
        class="field"
        :class="{ 'is-invalid': errors.phone }"
      />
      <ErrorMessage name="phone" class="error" />
      <Field
        name="email"
        type="email"
        placeholder="Email"
        class="field"
        :class="{ 'is-invalid': errors.email }"
      />
      <ErrorMessage name="email" class="error" />
      <Field name="note" type="text" placeholder="Примечание" class="field" />
      <ErrorMessage name="note" class="error" />

      <div class="agreement">
        <Field
          type="checkbox"
          name="agreement"
          value="true"
          class="checkbox"
        ></Field>
        <label>
          <a href="#" :class="{ 'is-invalid': errors.agreement }"
            >Пользовательское соглашение</a
          >
        </label>
      </div>
      <ErrorMessage name="agreement" class="error"></ErrorMessage>
      <button>
        Заполнить
        <svg
          class="feather feather-edit-2"
          fill="white"
          height="12"
          viewBox="0 0 24 24"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      </button>
    </Form>
  </div>
</template>

<script setup>

import { Field, Form, ErrorMessage, configure } from "vee-validate";

configure({
  validateOnChange: false,
});

const schema = {
  name(value) {
    const nameRule = /^([а-яa-zё]+-?[а-яa-zё]+)( [а-яa-zё]+-?[а-яa-zё]+){1,2}$/;
    if (value && nameRule.test(value.trim())) {
      return true;
    }
    return "Введите корректно ФИО";
  },
  phone(value) {
    const phoneRule = /^(\d{1,3})(\d{1,3})?(\d{1,2})?(\d{1,2})?.*/;
    if (value && phoneRule.test(value.trim())) {
      return true;
    }
    return "Введите корректный номер";
  },
  email(value) {
    const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && emailRule.test(value.trim())) {
      return true;
    }
    return "Введите корректный email";
  },
  agreement(value) {
    if (value && value.length) {
      return true;
    }
    return "Необходимо принять соглашение";
  },
};

function onSubmit(values) {
  console.log(values);
  alert(JSON.stringify(values, null, 2));
}
</script>

<style lang="scss" scoped>

.wrapper {
  width: 400px;
  padding: 10px;
  margin: 0 auto;
  background-color: #fff;

  .field {
    display: block;
    margin: 10px 0;
  }
  .error {
    display: block;
    margin: 10px 0;
    color: #f00;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
  }
  .agreement {
    display: flex;
    margin: 0 0 10px;
  }
  .checkbox {
    width: 10px;
  }
  .agreement a {
    color: #000;
  }
  button {
    display: block;
    margin-top: 15px;
    padding: 12px 36px;
    color: #fff;
    background: #ff5a7b;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  .is-invalid {
    color: #f00;
    border-color: #f00;
  }
  .agreement .is-invalid {
    color: #f00;
    border-color: #f00;
  }
}

</style>
