<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import { useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI';
import { faker } from '@faker-js/faker';

const route = useRoute()

const {fetchEmployee, currentEmployee} = useAPI()

onMounted(async () => {
    await fetchEmployee(route.params.id)
})

onUnmounted(() => {
    currentEmployee.value = null
})
</script>

<template>
    <!-- {{route.params.id}} -->
    <main>
        <div v-if="currentEmployee" class ="flex flex-col items-center justify-center gap-6">
            <h1 class="text-6x1 font-bold p-5">{{ currentEmployee.firstName }} {{ currentEmployee.lastName }}</h1>
            <h1 class="text-3x1 p-5">{{ currentEmployee.title }} </h1>
            <h1 class="text-2x1 p-5">{{ currentEmployee.userName }} @southtexascollege.edu</h1>
            <h1 class="text-2x1 p-5">{{ currentEmployee.quote }}</h1>

            <img class="p-8" :src="faker.image.urlLoremFlickr({category: 'cat'})" />
        </div>
    </main>

</template>