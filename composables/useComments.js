import { ref } from "vue";

export const useComments = () => {

    const API = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    const comments = ref([]);
    
    const deleteComment = (commentId) => {
        const index = comments.value.findIndex(comment => comment.id === commentId);
        if (index !== -1) {
            comments.value.splice(index, 1);
        }
    };
    const fetchComments = async () =>{
        comments.value = await $fetch(API);
    }

    return {
        fetchComments,
        deleteComment,
        comments,
    }

};