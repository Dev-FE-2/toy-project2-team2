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
		addSchedule: (state, action: PayloadAction<ScheduleData>) => {
			state.schedules.push(action.payload);
		},
		updateSchedule: (
			state,
			action: PayloadAction<{
				schedule_id: string;
				updates: Partial<ScheduleData>;
			}>,
		) => {
			const { schedule_id, updates } = action.payload;
			const schedule = state.schedules.find(
				(s) => s.schedule_id === schedule_id,
			);
			if (schedule) {
				Object.assign(schedule, updates);
			}
		},
		deleteSchedule: (state, action: PayloadAction<string>) => {
			state.schedules = state.schedules.filter(
				(s) => s.schedule_id !== action.payload,
			);
		},
		setSchedules: (state, action: PayloadAction<ScheduleData[]>) => {
			state.schedules = action.payload;
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
				state.schedules = action.payload;
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

export const {
	addSchedule,
	updateSchedule,
	deleteSchedule,
	setSchedules,
	setCurrentDate,
} = scheduleSlice.actions;

// Selectors
export const selectSchedules = (state: RootState) => state.schedule.schedules;
export const selectCurrentDateString = (state: RootState) =>
	state.schedule.currentDate;

export default scheduleSlice.reducer;
