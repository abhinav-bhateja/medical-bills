import React from "react";
import {Box, Circle, Divider, HStack, Text} from "@chakra-ui/react";

export default function ProgressSteps() {
    return (
        <HStack spacing={0} px={{base: '20', lg: '10'}} py={{base: '4', lg: '10'}} justifyContent="center"
                fontWeight="medium" fontSize="18px">
            <Box pos="relative">
                <Circle bg="brand" color="white" border="solid 2.5px #B03390" w="36px" h="36px">
                    1
                </Circle>
                <Text pos="absolute" pt={1} fontWeight="medium" sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: "50%",
                    transform: "translate(-50%)",
                    whiteSpace: "nowrap"
                }}>
                    Provider
                </Text>
            </Box>
            <Divider h="2px" opacity={1} bg="brand"/>
            <Box pos="relative">
                <Circle bg="transparent" color="brand" border="solid 2.5px #B03390" w="36px" h="36px">
                    2
                </Circle>
                <Text pos="absolute" pt={1} sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: "50%",
                    transform: "translate(-50%)",
                    whiteSpace: "nowrap"
                }}>
                    Cost
                </Text>
            </Box>
        </HStack>
    )
}