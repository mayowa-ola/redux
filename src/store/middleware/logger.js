const logger = params => store => next => action => {
    // console.log('Logging', params);
    // console.log('store', store);
    // console.log('next', next);
    // console.log('action', action);
    next(action);
}

export default logger;