import { IconPropType } from "@/constants/types/common";
const ErrorOutline: React.FC<IconPropType> = ({
	width = 20,
	height = 20,
	color = "#000",
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 24 24"
	>
		<path
			fill={color}
			fillRule="evenodd"
			d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-9.25 4.243c0-.723.55-1.243 1.243-1.243.708 0 1.257.52 1.257 1.243 0 .722-.55 1.257-1.257 1.257a1.228 1.228 0 0 1-1.243-1.257zM11.322 6a.5.5 0 0 0-.5.522l.307 7a.5.5 0 0 0 .5.478h.742a.5.5 0 0 0 .5-.478l.306-7a.5.5 0 0 0-.5-.522h-1.355z"
			clipRule="evenodd"
		/>
	</svg>
);
export default ErrorOutline;
