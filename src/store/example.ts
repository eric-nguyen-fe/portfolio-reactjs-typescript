import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'services/types';

interface ExampleState {
  indexTabSetting: number;
  prefix: number;
  value: number;
  idSideBar: number;
  heightCalendar: number;
  allUser: User[];
  invitee: User;
  isShowSideBar: boolean;
  viewActive: string;
  isChat: boolean;
  count: number
  homePage?: string
}

const initialState: ExampleState = {
  indexTabSetting: 0,
  prefix: 84,
  value: 0,
  idSideBar: 0,
  heightCalendar: 0,
  allUser: [],
  invitee: {
    id_user: undefined,
    indexRow: 5,
    user_name: undefined,
    email: undefined,
    _password: undefined,
    image_url: undefined,
    persionalities: [],
    select_types: [],
    departments: [],
    data_booking: [],
  },
  isShowSideBar: false,
  viewActive: 'week',
  isChat: false,
  count: 0,
  homePage: ''
};
// eslint-disable-next-line max-len
/* export const incrementAsync = createAsyncThunk('exampleReducer/example', async (amount: OptionsChild) => amount); */

export const exampleSlice = createSlice({
  name: 'exampleReducer',
  initialState,
  reducers: {
    incrementByAmount($state, action: PayloadAction<number>) {
      $state.value = action.payload;
    },

  },
  // extraReducers(builder) {
  //   builder.addCase(incrementAsync.fulfilled, ($state, action) => {
  //     $state.language = action.payload;
  //   });
  // },
});

export const {
  incrementByAmount,
} = exampleSlice.actions;

export default exampleSlice.reducer;
