import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        list:[
            {id:1,title:'Rambo'},
            {id:2,title:'Terminator'}
        ]
    },
    reducers:{}
})

export default moviesSlice.reducer