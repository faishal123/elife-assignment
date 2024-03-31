import { IconPropType } from "@/constants/types/common";
const Wind: React.FC<IconPropType> = ({
	width = 24,
	height = 24,
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
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15.764 7A3 3 0 1 1 18 12H3m5.51-7.333A2 2 0 1 1 10 8H3m8.51 11.333A2 2 0 1 0 13 16H3"
		/>
	</svg>
);
export default Wind;
