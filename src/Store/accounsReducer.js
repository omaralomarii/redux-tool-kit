import { createSlice } from "@reduxjs/toolkit";
const initState = {
    accounts: [
      {
        id: 1,
        customerName: "Rama Jaradat",
        accountNumber: "123333",
        accountType: "Savings accounts",
      },
      {
        id: 2,
        customerName: "Abdullah Hussein",
        accountNumber: "987111",
        accountType: "Student accounts",
      },
      {
        id: 3,
        customerName: "Ibrahim Taqideen",
        accountNumber: "934211",
        accountType: "Student accounts",
      },
      {
        id: 4,
        customerName: "Malek Al-Desougi",
        accountNumber: "931121",
        accountType: "Student accounts",
      },
    ],
  };

const accountsSlice = createSlice({
    name: 'accounts' ,
    initialState:initState,
    reducers: {
        ADD_ACCOUNT : (state,action) => {
            const length = state.accounts.length;
            const lastId = state.accounts[length-1].id;
            console.log(action.payload);
            state.accounts.push({
                id: lastId+1,
                ...action.payload,
              })
        } ,
        DELETE_ACCOUNT : (state , action) => {
            state.accounts = state.accounts.filter(acc=>acc.id!=action.payload)
        }
    },
})

export const {ADD_ACCOUNT , DELETE_ACCOUNT} =accountsSlice.actions;
export default accountsSlice.reducer;
