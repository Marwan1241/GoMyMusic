export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //Remove after finished developing
   //token:"BQDZIxHP_ERJWscvOJfjmIqTn4ahOk-9Zz_7gH9MKZXfQ00jerpbsjghvORtGVvAu-SxnOi9x-iW2uCGG_sDajapEqGoyuyGFkBMxLj3zWdiS6X-dGCbEUBxAn94VjMFSsEUx68PiZmHQ_jxhb4tqpmxV3YfmRwoZxKAEzR2v0zt_NJn" ,
};


const reducer = (state, action) => {
    console.log(action);

    // Action --> type, [payload]

    switch(action.type){
        case 'SET_USER': return {
            ...state , 
            user: action.user,
        };
        
        case 'SET_TOKEN': return{
            ...state,
            token: action.token,
        };

        case 'SET_PLAYLISTS': return{
            ...state,
            playlists: action.playlists,
        };

        case 'SET_DISCOVER_WEEKLY': return{
            ...state,
            discover_weekly: action.discover_weekly,
        };

        default : return state;
    }
} 

export default reducer;