import { useState } from "react";

const UseFetch = () => {
    let [superHeroes, setsuperHeroes] = useState([]);

    const getSuperHeroes = (e) => {
        if (e.target.value.length >= 3) {
            fetch("https://superheroapi.com/api.php/10225623741490454/search/" + e.target.value)
                .then((res) => res.json())
                .then(
                    (result) => {
                        const apiResponse = result.results;
                        if (apiResponse) {
                            setsuperHeroes(apiResponse)
                        }
                    },
                    (error) => {
                        console.log(error)
                    }
                );
        }
    }
    return {
        state: superHeroes,
        getSuperHeroes
    }
}

export default UseFetch
