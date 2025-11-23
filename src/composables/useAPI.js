import axios from 'axios'
import { get } from 'firebase/database'
import { ref } from 'vue'

const instance = axios.create({
    baseURL: 'http://node-app-4kih.onrender.com/',
})

const employees = ref([])
const loading = ref(false)

export default function useAPI() {

    const getEmployees = async () => {
        loading.value = true
        if (employees.value.length === 0) {
            const response = await instance.get('api/employees/fetch')
            employees.value = response.data
        }

        loading.value = false
    }

    return {instance, employees, getEmployees, loading}
}