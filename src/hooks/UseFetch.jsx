import { useState } from "react";

const UseFetch = () => {
    const [superHeroes, setsuperHeroes] = useState([]);

    const getSuperHeroes = (e, superHeroes) => {
        if (e.target.value > 3) {
            fetch("https://superheroapi.com/api.php/10225623741490454/search/" + e.target.value)
                .then((res) => res.json())
                .then(
                    (result) => {
                        const superHeroes = result.results;
                        this.setsuperHeroes(superHeroes)
                        console.log(superHeroes);
                    },

                    (error) => {
                        this.setstate({
                            isLoaded: true,
                            error
                        });
                    }
                );
        }
    }
    console.log(getSuperHeroes);
    return {
        state: superHeroes,
        getSuperHeroes
    }
}

export default UseFetch
