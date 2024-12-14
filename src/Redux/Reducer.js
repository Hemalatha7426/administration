import { INCREMENT } from "./Action"

const initial={count:0}
const Reducer=(state=initial,action)=>{
    if(action.type==INCREMENT)
    {
    return {state:state.count+1}
    }
    else{
        return state;
    }
}

export default Reducer