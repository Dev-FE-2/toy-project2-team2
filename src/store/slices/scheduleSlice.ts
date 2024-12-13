import { getScheduleData } from "@/services";
import { RootState, ScheduleData, ScheduleState } from "@/types";
import { convertDateToLocaleString } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ScheduleState = {
	schedules: [],
	currentDate: convertDateToLocaleString(new Date()),
	loading: false,
	error: null,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		upsertSchedule: (state, action: PayloadAction<ScheduleData>) => {
			const newSchedule = action.payload;
			const index = state.schedules.findIndex(
				(schedule) => schedule.schedule_id === newSchedule.schedule_id,
			);

			if (index !== -1) {
				// 기존 일정 업데이트
				state.schedules[index] = { ...state.schedules[index], ...newSchedule };
			} else {
				// 새 일정 추가
				state.schedules.push(newSchedule);
			}
		},
		deleteSchedule: (state, action: PayloadAction<string>) => {
			state.schedules = state.schedules.filter(
				(schedule) => schedule.schedule_id !== action.payload,
			);
		},
		setCurrentDate: (state, action: PayloadAction<string>) => {
			state.currentDate = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSchedules.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSchedules.fulfilled, (state, action) => {
				action.payload.forEach((newSchedule) => {
					const index = state.schedules.findIndex(
						(schedule) => schedule.schedule_id === newSchedule.schedule_id,
					);

					if (index !== -1) {
						// 기존 일정 업데이트
						state.schedules[index] = {
							...state.schedules[index],
							...newSchedule,
						};
					} else {
						// 새 일정 추가
						state.schedules.push(newSchedule);
					}
				});

				state.loading = false;
			})
			.addCase(fetchSchedules.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to fetch schedules";
			});
	},
});

export const fetchSchedules = createAsyncThunk(
	"schedule/fetchSchedules",
	async (
		{
			startDate,
			endDate,
		}: {
			startDate: Date;
			endDate?: Date;
		},
		thunkAPI,
	) => {
		const state = thunkAPI.getState() as RootState;
		const uid = state.loginAuth.uid;

		if (!uid) {
			throw new Error("User ID is not available in the state");
		}

		const data = await getScheduleData(uid, startDate, endDate);
		return data;
	},
);

export const { upsertSchedule, deleteSchedule, setCurrentDate } =
	scheduleSlice.actions;

// Selectors
export const selectSchedules = (state: RootState) => state.schedule.schedules;
export const selectCurrentDateString = (state: RootState) =>
	state.schedule.currentDate;

export default scheduleSlice.reducer;
