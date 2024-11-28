import { Button } from "@/components/common";
import Modal from "@/components/common/Modal";
import React, { useState } from "react";

const HomePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			HOME
			<Button onClick={() => setIsModalOpen(true)}>모달 열기</Button>
			<Modal
				isOpen={isModalOpen}
				title="정정 신청"
				onClose={() => setIsModalOpen(false)}
			>
				<p>여기에 원하는 내용을 추가</p>
			</Modal>
		</div>
	);
};

export default HomePage;
