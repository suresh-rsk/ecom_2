import './FashionPage.css'
import { useReducer } from 'react';

const initialState={
    count1:0,
    count2:100
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment-1':
            return {...state,count1:state.count1+action.value}
        case 'decrement-1':
            return {...state,count1:state.count1-action.value}
        case 'increment-2':
            return {...state,count2:state.count2+action.value}
        case 'decrement-2':
            return {...state,count2:state.count2-action.value}
        case 'reset':
            return initialState
        default:
            return state;
    }
}

const FashionPage=()=>{
    
    const [count,dispatch]=useReducer(reducer,initialState)
   
    return(

        <div className="fashionpage">
            <h1>First Count: {count.count1}</h1>
            <h1>Second Count: {count.count2}</h1>
            <button onClick={()=>dispatch({type:'increment-1',value:5})}>increment1</button>
            <button onClick={()=>dispatch({type:'decrement-1',value:5})}>deccrement1</button>
            <button onClick={()=>dispatch({type:'increment-2',value:10})}>increment1</button>
            <button onClick={()=>dispatch({type:'decrement-2',value:10})}>deccrement1</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>

        </div>
    )
}

export default FashionPage;