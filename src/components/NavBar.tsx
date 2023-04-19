import { Center, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gc.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
	const logoTitle = "Gamer Spot";
	return (
		<>
			<Center h="100px" color="white">
				<Image src={logo} boxSize="60px" />
				<Text fontSize={"2xl"} color="#d35d13">
					{logoTitle}
				</Text>
			</Center>
			<HStack padding="10px">
				<SearchInput onSearch={onSearch} />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}

export default NavBar;
