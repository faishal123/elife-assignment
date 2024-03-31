import BackgroundImage from "./BackgroundImage/BackgroundImage";
import WeatherHeroText from "./WeatherHeroText/WeatherHeroText";

const LeftLayout: React.FC = () => {
	return (
		<div className="max-xs:mb-5 max-l:max-w-full max-l:mb-10 relative grow shadow-2xl max-w-[calc(50%-1.25rem)] text-gray-primary rounded-2xl">
			<WeatherHeroText />
			<BackgroundImage />
		</div>
	);
};

export default LeftLayout;
