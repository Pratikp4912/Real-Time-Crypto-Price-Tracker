import { createSlice } from '@reduxjs/toolkit';
import sampleData from './sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateCrypto: (state, action) => {
      action.payload.forEach(update => {
        const index = state.findIndex(asset => asset.id === update.id);
        if (index !== -1) {
          state[index] = { ...state[index], ...update };
        }
      });
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
