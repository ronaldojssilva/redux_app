export const incrementAction = (total) => {
    //console.log(value);
    return{
        type: 'INCREMENT',
        total
    }
}

export const decrementAction = (total) => {
    //console.log(value);
    return{
        type: 'DECREMENT',
        total
    }
}