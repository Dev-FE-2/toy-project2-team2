import { createContext } from "react";

export interface CalendarContextProps {
	currentDate: Date;
	onPrevMonth: () => void;
	onNextMonth: () => void;
}

const CalendarContext = createContext<CalendarContextProps>({
	currentDate: new Date(),
	onPrevMonth: () => {},
	onNextMonth: () => {},
});

export default CalendarContext;
