export const clickHelloAction = (value) => {
    //console.log(value);
    return{
        type: 'CLICK_HELLO',
        msg: value
    }
}