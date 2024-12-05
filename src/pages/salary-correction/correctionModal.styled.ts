import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const ListContainer = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	border-bottom: 1px solid #e5e5e5;
	border-radius: 8px;
	overflow: scroll;
	height: 250px;
	width: 400px;
	overflow-x: hidden;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 16px;
	border-bottom: 1px solid #e5e5e5;

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: #f9f9f9;
	}
`;

export const Month = styled.div`
	font-size: 18px;
	font-weight: 600;
	padding-left: 30px;
	cursor: pointer;
`;

export const Salary = styled.div`
	font-size: 18px;
	font-weight: 500;
	color: #666;
	padding-right: 10px;
	cursor: pointer;
`;
