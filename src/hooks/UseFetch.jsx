import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = () => {
    const [superHeroes, setsuperHeroes] = useState([]);

    useEffect((e) => {
        axios.get(`https://superheroapi.com/api.php/10225623741490454/search/${e.target.value}`)
            .then(
                ({ data }) => {
                    setsuperHeroes(data)
                }
            )
            .catch(err => console.error(err))
    }, [])
    return {
        state: superHeroes,
    }
}

export default UseFetch
