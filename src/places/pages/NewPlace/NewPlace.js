import React from 'react';

import Input from '../../../shared/components/FormElements/input/Input.js';
import './NewPlace.css';

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input element="input" type="text" label="Title" />
        </form>
    )

}

export default NewPlace;