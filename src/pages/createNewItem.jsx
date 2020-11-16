import React from 'react'
import Input from '../components/shared/form-components/input'

import './createNewItem.scss'

const CreateNewItem=()=>
{
return <div className='container'>
    <div className='row'>
        <Input element='input' id='title' type='text' placeholder='Title' onInput={}/>
    </div>
</div>
}
export default CreateNewItem;