import axios from "axios";
import { useState } from "react";

const UseFetch = () => {
    const [superHeroes, setsuperHeroes] = useState([]);

    const getSuperHeroes = async (e) => {
        if (e.target.value.length >= 3) {
            const { data } = await axios.get(`https://superheroapi.com/api.php/10225623741490454/search/${e.target.value}`);
            const { results } = data;
            if (results) {
                setsuperHeroes(results)
            }
        }
    }
    return {
        state: superHeroes,
        getSuperHeroes
    }
}

export default UseFetch
