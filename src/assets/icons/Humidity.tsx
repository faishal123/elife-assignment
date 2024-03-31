import { IconPropType } from "@/constants/types/common";

const Humidity: React.FC<IconPropType> = ({
	width = 24,
	height = 24,
	color = "#000",
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 512 512"
		fill={color}
	>
		<title>{"ionicons-v5-r"}</title>
		<path d="M256 43.91s-144 158.3-144 270.3c0 88.36 55.64 144 144 144s144-55.64 144-144c0-112-144-270.3-144-270.3Zm16 362.3v-24a60.07 60.07 0 0 0 60-60h24a84.09 84.09 0 0 1-84 84Z" />
	</svg>
);
export default Humidity;
