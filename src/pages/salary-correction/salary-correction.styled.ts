import styled from "styled-components";
export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
`;

export const Dropdown = styled.select`
	padding: 8px 12px;
	font-size: 16px;
	border: 1px solid #ddd;
	border-radius: 4px;
`;

export const CardContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
`;

export const Card = styled.div`
	width: 300px;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 10px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	text-align: center;
	background-color: #fff;
`;

export const Month = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 8px;
`;

export const Status = styled.span`
	display: inline-block;
	padding: 5px 10px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	border-radius: 20px;
	background-color: ${(props) => props.color || "gray"};
	margin-bottom: 8px;
`;

export const Amount = styled.div`
	font-size: 16px;
	font-weight: normal;
	color: #333;
`;
