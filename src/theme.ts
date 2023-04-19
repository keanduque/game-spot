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



	another : https://smart-swatch.netlify.app/#ED8936
	50: "#ffefde",
	100: "#fdd5b4",
	200: "#f7ba88",
	300: "#f19f5a",
	400: "#ec832c",
	500: "#d36a13",
	600: "#a5520d",
	700: "#763a07",
	800: "#482200",
	900: "#1d0a00",
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
