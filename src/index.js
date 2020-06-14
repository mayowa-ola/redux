import store from './store';
import { bugAdded,bugRemoved, bugResolved } from './actions';


// const unsubscribe = store.subscribe(()=>{
//     console.log('State changed', store.getState());
// });

// store.dispatch(bugAdded('Bug 1'));

// // unsubscribe();

// store.dispatch(bugResolved(1));

console.log(store.getState());