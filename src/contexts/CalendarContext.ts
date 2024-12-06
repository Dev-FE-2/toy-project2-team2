import { createContext } from "react";
import { CalendarContextProps } from "@/types";

const CalendarContext = createContext<CalendarContextProps>({
	currentDate: new Date(),
	onPrevMonth: () => {},
	onNextMonth: () => {},
});

export default CalendarContext;
