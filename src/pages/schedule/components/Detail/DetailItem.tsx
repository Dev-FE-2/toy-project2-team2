import type { DetailItemProps } from "../../types/schedule";
import {
	ItemBox,
	Color,
	ItemInfo,
	ItemTitle,
	ItemContent,
	DeleteBtn,
} from "./detail.styled";
import DeleteIcon from "@/assets/img/close_icon.svg?react";

const DetailItem = ({
	detailData,
	onClickItem,
	onClickDelete,
}: DetailItemProps) => {
	return (
		<ItemBox onClick={() => onClickItem(detailData)}>
			<Color $color={detailData.color} />
			<ItemInfo>
				<ItemTitle>{detailData.title}</ItemTitle>
				<ItemContent>{detailData.content}</ItemContent>
			</ItemInfo>
			<DeleteBtn onClick={(e) => onClickDelete(e, detailData.schedule_id)}>
				<DeleteIcon width="12" height="12" fill="#000" />
			</DeleteBtn>
		</ItemBox>
	);
};

export default DetailItem;
