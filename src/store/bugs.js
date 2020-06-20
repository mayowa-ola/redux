import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';

//USING CREATE SLICE APPROACH

let lastId = 0;
const slice = createSlice({
    name:"bugs",
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                resolved: false,
                description: action.payload.description,
                userId: action.payload.userId
            });
        },
        bugAssignToUser: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.bugId);
            bugs[index].userId = action.payload.userId;
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved : (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs.splice(index, 1);
        }
    }
});
export const {bugRemoved, bugAdded, bugResolved, bugAssignToUser} = slice.actions;

export default slice.reducer;

//SELECTORS
// export const getUnresolvedBugs = state => 
//     state.entities.bugs.filter(bug => !bug.resolved);

//USING CACHE SELECTOR (Memolization)
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);
export const getBugsAssignedTouser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
);


//ACTION TYPE
// const BUG_ADDED = 'Bug_Added';
// const BUG_REMOVED = 'Bug_Removed';
// const BUG_RESOLVED = 'Bug_Resolved';

//ACTION CREATORS
// export const bugAdded = description => ({   
//     type: BUG_ADDED,
//     payload: {
//         description
//     }
// });

// export const bugRemoved = id=> ({
// type:BUG_REMOVED,
// payload: {
//     id
// }
// });

// export const bugResolved = id => ({
// type:BUG_RESOLVED,
// payload: {
//     id
// }    
// });

//CREATING ACTION CREATORS USING REDUX TOOLKITS
// export const bugAdded = createAction('bugAdded');

// export const bugRemoved = createAction('bugRemoved');

// export const bugResolved = createAction('bugResolved');

// // CREATING REDUCER USING REDUX TOOL KIT
// let lastId = 0;

// export default createReducer([], {
//     [bugAdded.type]: (bugs,action) => {
//         bugs.push({
//             id: ++lastId,
//                     resolved: false,
//                     description: action.payload.description
//         })
//     },
//     [bugRemoved.type]: (bugs, action) => {
//         // bugs.filter(bug => bug.id !== action.payload.id);
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs.splice(index, 1);

//     },
//     [bugResolved.type]: (bugs, action) => {
//         // bugs.map(bug => (bug.id === action.payload.id) ? {...bug, resolved:true} : bug)
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true;
//     }
// })

//REDUCER

// let lastId = 0;
// export default function reducer(state= [], action) {
//     //using switch
//     switch(action.type) {
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     resolved: false,
//                     description: action.payload.description
//                 }
//             ]
//         case bugRemoved.type :
//             return  state.filter(bug => bug.id !== action.payload.id);

//         case bugResolved.type :
//             return  state.map(bug => (bug.id === action.payload.id) ? {...bug, resolved:true} : bug);
//         default:  
//             return state;
//     }

// }