import ActionTypes from '../constants/action_types';


export function inviteReducer(state={},action){

    switch(action.type) {
        case ActionTypes.GETINVITEREQUESTED:
            return Object.assign({},state,{
                inProgress:true,
                error:'',
                success:''
            });
            
            
            
            
        default:
            return state;
    
    
    
    
    
    
    
    
    
    }
    



}