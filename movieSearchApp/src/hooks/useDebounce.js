function useDebounce(callback,delay=1000){
    //it takes a callback and returns a modified callback, that executes after a delay
    let timerId;
    return (...args)=>{
        clearTimeout(timerId);
       timerId= setTimeout(()=>{
            callback(...args)
        },delay)
    }
}
export default useDebounce;