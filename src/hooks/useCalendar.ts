import CalendarContext, {
	CalendarContextProps,
} from "@/context/CalendarContext";
import { useContext } from "react";

const useCalendar = (): CalendarContextProps => {
	const context = useContext(CalendarContext);
	if (!context) {
		throw new Error("useCalendar must be used within a CalendarProvider");
	}

	return context;
};

export default useCalendar;
