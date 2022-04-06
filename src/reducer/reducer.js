import types from '../types';

const initialState = {
     alldata : []
};

export default ( state = initialState, action) => {
 
    switch(action.type){
    case types.ADD_ITEM:
        let add = [...state.alldata] 
    }
}
