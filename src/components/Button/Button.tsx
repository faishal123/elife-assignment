import { HTMLProps } from "react";

interface ButtonPropTypes extends HTMLProps<HTMLButtonElement> {
	customClassName?: string;
	variant?: "white" | "black";
	dataTestId?: string;
}

const Button: React.FC<ButtonPropTypes> = ({
	children,
	onClick,
	customClassName,
	variant = "white",
	dataTestId,
}) => {
	const colorByVariant: Record<string, string> = {
		white: "[#e6e6e6]",
		black: "gray-800",
	};

	const hoverBackgroundByVariant: Record<string, string> = {
		white: "rgba(230,230,230,.1)",
		black: "rgba(0,0,0,.1)",
	};

	const currentColor = colorByVariant[variant];
	return (
		<button
			data-testid={dataTestId}
			className={`${
				customClassName || ""
			} px-4 py-2 rounded-md font-${currentColor} border border-${currentColor} transition-all hover:bg-[${
				hoverBackgroundByVariant[variant]
			}]`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
