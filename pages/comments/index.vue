
<template>
  <div>
    <button @click="fetchComments">Загрузить комментарии</button>
    <div class="wrapper">
      <div class="comment-card" 
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        @delete-comment="deleteComment">
          <p>№ {{ comment.id }}</p>
          <h3>{{ comment.name }}</h3>
          <p>{{ comment.body }}</p>
          <button class="commentDelete" @click="deleteCom(comment.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script setup >

const { fetchComments, deleteComment, comments } = useComments();

function deleteCom (commentId) {
  deleteComment(commentId)
}

</script>

<style lang="scss" scoped>

button {
  padding: 10px;  
}

.wrapper {
  width: 100rw;
  display: flex;
  gap: 5px;
  margin: 0 20px;
  
  .comment-card {
    position: relative;
    margin-top: 20px;
    padding: 10px 20px 40px;
    border: 2px solid red;
    background-color: #fff;

    .commentDelete {
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  }
}

</style>
