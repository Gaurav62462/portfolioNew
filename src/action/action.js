import types  from '../types';

export const addNewItem = (form) => {
    return {
    type : types.ADD_ITEM,
    form
    };
}