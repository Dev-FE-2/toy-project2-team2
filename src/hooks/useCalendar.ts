import { useContext } from "react";
import CalendarContext from "@/contexts/CalendarContext";
import { CalendarContextProps } from "@/types";

const useCalendar = (): CalendarContextProps => {
	const context = useContext(CalendarContext);
	if (!context) {
		throw new Error("useCalendar must be used within a CalendarProvider");
	}

	return context;
};

export default useCalendar;
