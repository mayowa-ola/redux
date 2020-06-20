// USING REDUX MANUALLY
// import {createStore} from 'redux';
// import {devToolsEnhancer} from 'redux-devtools-extension'
// import reducer from './bugs';


// export default function configureStore(){
//     const store = createStore(reducer, devToolsEnhancer({trace:true}));
//     return store
// };

//USiNG REDUX TOOL KIT

import {configureStore} from '@reduxjs/toolkit';
// import reducer from './bugs';
import reducer from './projects';

export default function() {
   return configureStore({reducer});
}
