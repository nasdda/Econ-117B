import axios from 'axios'

const database = axios.create({
    baseURL: "https://econ117b-58a1d.firebaseio.com/",
})

export default database