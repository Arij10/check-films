import React from 'react';
import Rating from './Rating';
import {InputGroup , FormControl} from 'react-bootstrap';


function Filter({filter}) {
    console.log('hey',filter)
    return (
        <div className='filter'>
            <Rating/>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
            <FormControl
            placeholder="Search Movies By Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
        </div>
    )
}

export default Filter
