import { createSlice } from '@reduxjs/toolkit';
import coins from '../utils/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    coins
  },
  reducers: {
    updateCoinData: (state, action) => {
      state.coins = action.payload;
    }
  }
});

export const { updateCoinData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
