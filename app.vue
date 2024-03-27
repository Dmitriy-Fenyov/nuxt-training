<template>
  <div>
    <NuxtLayout>
      <nav class="wrapper">
        <NuxtLink to="/">На главную</NuxtLink>
        <NuxtLink to="todolist">Спосок дел</NuxtLink>
        <NuxtLink to="comments">Комментарии</NuxtLink>
        <NuxtLink to="form">Форма</NuxtLink>
      </nav>
      <NuxtPage />  
    </NuxtLayout>
  </div>
</template>

<style scoped>

div {
    margin: 20px 0 0 20px;
}

.wrapper {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}
.wrapper a {
  outline: none;
  text-decoration: none;
}

</style>