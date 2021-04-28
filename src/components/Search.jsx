import { SearchIcon } from '@primer/octicons-react'
import React from 'react'
import { Form } from 'react-bootstrap'
import UseFetch from '../hooks/UseFetch'
const UseSearch = () => {
    const { state, getSuperHeroes } = UseFetch()
    console.log(getSuperHeroes);
    return (
        <>
            <Form.Group>
                <Form.Control type="text" onKeyUp={getSuperHeroes} placeholder="Buscador de Héroes" required />
            </Form.Group>
        </>
    )
}

export default UseSearch
