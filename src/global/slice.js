import { createSlice } from "@reduxjs/toolkit"
import data from "../data"


const initialState = {
    datas: data,
    isDark: true,
    navState: 'all',
    filteredDatas: data
}

const slice = createSlice({
    name: 'Browser Extension',
    initialState,
    reducers: {
        setMode: (state,{payload})=>{
            state.isDark = !state.isDark
        },
        setNavState: (state,{payload})=>{
            state.navState = payload
        },
        setDatas: (state,{payload})=>{
            state.datas = payload
        },
        setfilteredDatas: (state,{payload})=>{
            state.filteredDatas = payload
        }
    }
})

export const { setMode, setNavState, setDatas, setfilteredDatas } = slice.actions

export default slice.reducer