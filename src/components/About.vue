<template>
  <div>
    <ul id="myNewItems">
        <li v-for="el in list" :key="el.id">
            {{el.name}} - {{el.description}}
        </li>
    </ul>
  </div>
</template>


<script lang="ts">

import Vue from 'vue';
import _ from 'lodash';


export default Vue.extend({
    name: 'About',
    props: {
        action: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        list: [{
            name: 'Example 1',
            description: 'A description.',
        }, {
            name: 'Example 2',
            description: 'A better description.',
        }],
        errors: [],
    }),
    // Example Fetching Database data after components mounts.
    //
    // mounted() {
    //     this.getList();
    // },
    // methods: {
    //     getList() {
    //         const self = this;
    //         const temp = fetch(this.action).then( (res) => {
    //             if (res.ok) {
    //                 res.json().then( (p) => {
    //                     _.each(p, (project) => {
    //                         self.list.push(project);
    //                     });
    //                 });
    //             } else {
    //                 res.json().then( (e) => {
    //                     _.each(e, (error) => {
    //                         self.errors.push(error);
    //                     });
    //                 });
    //             }
    //         });
    //     },
    // },
});

</script>

<style scoped lang="css">
.myProject {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
}
</style>