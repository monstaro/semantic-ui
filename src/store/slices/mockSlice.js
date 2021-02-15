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
					const user = Faker.helpers.userCard();
					user.id = Faker.random.uuid();
					let oneMonthAgo = new Date();
					oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
					const start = new Date(oneMonthAgo.toUTCString());
					let endOfDay = new Date();
					endOfDay.setHours(23, 59, 59, 99);
					const end = new Date(endOfDay.toUTCString());
					user.createdAt = Faker.date.between(start, end);
					fakeApiResponse.push(user);
				}
				return { payload: fakeApiResponse }
			}
		}
	},
	extraReducers: {}
})

export const { getMockUsers } = mockSlice.actions;
export default mockSlice.reducer;