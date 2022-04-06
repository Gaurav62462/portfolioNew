import React, { useState } from 'react';

const AddItem = () => {
    const[item , setitem] = useState('');

    return(
        <div className='container'>
            <div className='row'>
                <form>
                    <label>Add Item</label>
                    <input type='text' name='item' className='form-control' value={item} onChange={e => setitem(e.target.value)} />
                    <button type='button' className='btn btn-success' name='click'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddItem;