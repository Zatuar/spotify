import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
    vins: [],
    name: 'toto',
    vendeurs: []
}

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers:{
        updateVins: (state, action) => {
            state.vins = action.payload
        },
        updateVendeurs: (state, action) => {
            state.vendeurs = action.paylad
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const {updateVins, updateVendeurs, setName} = landingSlice.actions
export const selectSelf = state => state[landingSlice.name]
export const selectVins = createSelector(selectSelf, state => state.vins)
export const selectName = createSelector(selectSelf, state => state.name)

export default landingSlice.reducer