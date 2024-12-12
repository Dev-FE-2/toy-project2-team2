export interface UpdateButtonProps {
	$isEditing: boolean;
	onClick: {
		handleInput: () => void;
		cancelEditing: () => void;
	};
}
