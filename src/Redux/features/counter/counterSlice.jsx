import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValue: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    AddProduct: (state, action) => {
      // state.counterValue = 1

      let exist = 0;
      for(let i = 0 ; i < state.cartValue.length ; i++){
        if(state.cartValue[i].id == action.payload.id){
            exist++;
        }
      }
      if (exist == 0) {
        const {id , title , image , price} = action.payload;
        state.cartValue.push({id : id , title : title , image : image , price : price , qty : 1})
    } else {
        state.cartValue;
      }
    },
    decrementProduct: (state, action) => {
        if(action.payload.qty > 1){
            state.cartValue.map(item => {
                if(item.id == action.payload.id) {
                    item.qty -= 1
                }
            });
        }else{
            state.cartValue = state.cartValue.filter((arrow) => arrow.id !== action.payload.id);
        }
    },
    incrementProduct : (state , action) => {
        state.cartValue.map(item => {
            if(item.id == action.payload.id) {
                item.qty += 1
            }
        });
    },
    RemoveProduct : (state , action) => {
        state.cartValue = state.cartValue.filter((arrow) => arrow.id !== action.payload.id);
    }
  },
});

export default counterSlice.reducer;
export const { AddProduct,incrementProduct, decrementProduct ,RemoveProduct } = counterSlice.actions;
