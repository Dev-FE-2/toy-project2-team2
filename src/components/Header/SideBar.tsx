import {
	MobileNavigation,
	MobileNavCon,
	MobileNavHeader,
	CloseBtn,
	MobileNavTitle,
} from "./Header.styled";
import CloseIcon from "@/assets/img/close_icon.svg?react";
import Profile from "./Profile";
import Navigator from "./Navigator";
import { getColor } from "@/styles/theme";
import { useTheme as useStyledTheme } from "styled-components";

const SideBar = ({
	isOpen,
	onClick,
}: {
	isOpen: boolean;
	onClick: (isOpen: boolean) => void;
}) => {
	const theme = useStyledTheme();
	return (
		<MobileNavigation className={isOpen ? "open" : ""}>
			<MobileNavCon>
				<MobileNavHeader>
					<MobileNavTitle>메뉴</MobileNavTitle>
					<CloseBtn>
						<CloseIcon
							onClick={() => onClick(false)}
							width="16"
							height="16"
							fill={getColor("blacks")({ theme })}
						/>
					</CloseBtn>
				</MobileNavHeader>

				<Profile />

				<Navigator />
			</MobileNavCon>
		</MobileNavigation>
	);
};

export default SideBar;
