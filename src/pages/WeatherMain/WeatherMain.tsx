import RightLayout from "./RightLayout/RightLayout";
import LeftLayout from "./LeftLayout/LeftLayout";

const WeatherMain: React.FC = () => {
	return (
		<div className={"max-xs:p-5 p-10 min-h-dvh w-full flex gap-10 max-l:block"}>
			<LeftLayout />
			<RightLayout />
		</div>
	);
};

export default WeatherMain;
