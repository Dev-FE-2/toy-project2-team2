import { Input } from "@/components/common";
import Modal from "@/components/common/Modal";
import TextArea from "@/components/common/TextArea";
import React, { useState } from "react";

const HomePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			MyPage
			<button onClick={() => setIsModalOpen(true)}>모달 열기</button>
			<Modal
				isOpen={isModalOpen}
				title="정정 신청"
				onClose={() => setIsModalOpen(false)}
			>
				<p>여기에 원하는 내용을 추가</p>
			</Modal>
			<Input
				label="Input label"
				placeholder="placeholder"
				onChange={(e) => console.log(e.target.value)}
				type="text"
			/>
			<TextArea label="Description" placeholder="Enter your description here" />
			<Input
				label="Input label"
				placeholder="placeholder"
				onChange={(e) => console.log(e.target.value)}
				type="text"
				error="errror message~~"
			/>
			<Input
				label="Input label"
				placeholder="placeholder"
				value="input label readonly"
				readOnly
				onChange={(e) => console.log(e.target.value)}
				type="text"
			/>
			<TextArea
				label="Description"
				placeholder="This field is read-only"
				readOnly
				value="This is a read-only field"
			/>
		</div>
	);
};

export default HomePage;
