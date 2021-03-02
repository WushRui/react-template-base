const init={
    count:0
}

export default function(state=init,action){
    switch (action.type) {
        case 'ADD': return {count:state.count+1}
        case 'CUT':return {count:state.count-1}
        default: return {count:state}
    }
}