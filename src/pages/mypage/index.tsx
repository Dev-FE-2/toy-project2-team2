import { Button, Input } from "@/components/common";
import Modal from "@/components/common/Modal";
import TextArea from "@/components/common/TextArea";
import CustomSelect from "@/components/common/Select";
import { useState } from "react";

const MyPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<CustomSelect
				label="selectbox"
				options={[
					{ value: "지급 내역", label: "지급 내역" },
					{ value: "공제 내역", label: "공제 내역" },
					{ value: "근무 시간", label: "근무 시간" },
					{ value: "기타", label: "기타" },
				]}
			/>

			<Button onClick={() => setIsModalOpen(true)}>모달 열기</Button>
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

export default MyPage;
