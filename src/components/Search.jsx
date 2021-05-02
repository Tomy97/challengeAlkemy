import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
const Search = ({ getSuperHeroes }) => {

    return (
        <Form.Group>
            <InputGroup>
                <Form.Control type="text" onKeyUp={getSuperHeroes} placeholder="Buscador de Héroes" required />
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <i className="fas fa-search"></i>
                    </InputGroup.Text>
                </InputGroup.Prepend>
            </InputGroup>
        </Form.Group>
    )
}

export default Search
