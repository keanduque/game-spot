import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
};

const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: "#ffeadf",
			100: "#ffc6b2",
			200: "#faa284",
			300: "#f77d55",
			400: "#f35a25",
			500: "#da400c",
			600: "#aa3108",
			700: "#7a2305",
			800: "#4c1200",
			900: "#1f0300",
		},
	},
});
export default theme;

/* 
// dark black
{
	50: "#f9f9f9",
	100: "#ededed",
	200: "#d3d3d3",
	300: "#b3b3b3",
	400: "#a0a0a0",
	500: "#898989",
	600: "#6c6c6c",
	700: "#202020",
	800: "121212",
	900: "#111",
},

//orange https://chakra-ui.com/docs/styled-system/theme
{
	50: "#FFFAF0",
	100: "#FEEBC8",
	200: "#FBD38D",
	300: "#F6AD55",
	400: "#ED8936",
	500: "#DD6B20",
	600: "#C05621",
	700: "#9C4221",
	800: "#7B341E",
	900: "#652B19",
}

// https://smart-swatch.netlify.app/#f46433
{
	50: "#ffeadf",
	100: "#ffc6b2",
	200: "#faa284",
	300: "#f77d55",
	400: "#f35a25",
	500: "#da400c",
	600: "#aa3108",
	700: "#7a2305",
	800: "#4c1200",
	900: "#1f0300",
},
 */
