import { getScheduleData } from "@/services";
import { RootState, ScheduleData, ScheduleState } from "@/types";
import { convertDateToLocaleString } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ScheduleState = {
	schedules: {},
	currentDate: convertDateToLocaleString(new Date()),
	loading: false,
	error: null,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		addSchedule: (state, action: PayloadAction<ScheduleData>) => {
			const schedule = action.payload;
			state.schedules[schedule.schedule_id] = schedule;
		},
		updateSchedule: (
			state,
			action: PayloadAction<{
				schedule_id: string;
				updates: Partial<ScheduleData>;
			}>,
		) => {
			const { schedule_id, updates } = action.payload;
			if (state.schedules[schedule_id]) {
				state.schedules[schedule_id] = {
					...state.schedules[schedule_id],
					...updates,
				};
			}
		},
		deleteSchedule: (state, action: PayloadAction<string>) => {
			delete state.schedules[action.payload];
		},
		setSchedules: (state, action: PayloadAction<ScheduleData[]>) => {
			const schedules = action.payload.reduce<Record<string, ScheduleData>>(
				(acc, schedule) => {
					acc[schedule.schedule_id] = schedule;
					return acc;
				},
				{},
			);
			state.schedules = schedules;
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
				action.payload.forEach((schedule) => {
					state.schedules[schedule.schedule_id] = schedule;
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
