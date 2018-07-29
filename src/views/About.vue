<template>
    <div class="about">
        <h1>This is an about page</h1>
        <About action="http://localhost:3000/projects"></About>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '@/components/About.vue'; // @ is an alias to /src

export default Vue.extend({
    name: 'about',
    components: {
        About,
    },
});
</script>