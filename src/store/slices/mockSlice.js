import { createSlice } from '@reduxjs/toolkit';
import Faker from 'faker';

const mockSlice = createSlice({
	name: 'mock',
	initialState: {
		users: []
	},
	reducers: {
		getMockUsers: {
			reducer: (state, action) => {
				state.users = action.payload;
			},
			prepare: () => {
				const fakeApiResponse = [];
				for (let i = 0; i < 100; i++) {
					const company = Faker.helpers.userCard();
					company.id = Faker.random.uuid();
					fakeApiResponse.push(company);
				}
				return { payload: fakeApiResponse }
			}
		}
	},
	extraReducers: {}
})

export const { getMockUsers } = mockSlice.actions;
export default mockSlice.reducer;