import configureStore from './store/configureStore';
import { bugAdded,bugRemoved, bugResolved, getUnresolvedBugs } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();
// const unsubscribe = store.subscribe(()=>{
//     console.log('State changed', store.getState());
// });

store.dispatch(bugAdded({description:'Bug 1'}));
store.dispatch(bugAdded({description:'Bug 2'}));
store.dispatch(bugAdded({description:'Bug 3'}));
store.dispatch(projectAdded({name:'Project Added'}));


// // unsubscribe();

store.dispatch(bugResolved({id:2}));
store.dispatch(bugRemoved({id:1}));

const unResolved = getUnresolvedBugs(store.getState());
console.log(unResolved);

console.log(store.getState());