import configureStore from './store/configureStore';
import { bugAdded,bugRemoved, bugResolved, getUnresolvedBugs,bugAssignToUser, getBugsAssignedTouser } from './store/bugs';
import { projectAdded } from './store/projects';
import { addUsers } from './store/users';

const store = configureStore();
// const unsubscribe = store.subscribe(()=>{
//     console.log('State changed', store.getState());
// });

// store.dispatch((dispatch,getState)=> {
//     //call an api
//     //if resolve, dispatch
//     dispatch({type:'bugReceived', bugs: [1,2,3,4]});
//     console.log(getState)
//     //if reject log error
// })

store.dispatch({
    type: "error",
    payload: {message:"An error occured"}
});

// store.dispatch(addUsers({name:'User 1'}));
// store.dispatch(addUsers({name:'User 2'}));
// store.dispatch(bugAdded({description:'Bug 1'}));
// store.dispatch(bugAdded({description:'Bug 2'}));
// store.dispatch(bugAdded({description:'Bug 3'}));
// store.dispatch(bugAssignToUser({bugId:1, userId:1}));
// store.dispatch(projectAdded({name:'Project 1'}));


// // // unsubscribe();

// store.dispatch(bugResolved({id:2}));
// // store.dispatch(bugRemoved({id:1}));

// const unResolved = getUnresolvedBugs(store.getState());
// const bugs = getBugsAssignedTouser(1)(store.getState());
// console.log(bugs);

console.log(store.getState());