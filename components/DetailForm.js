import React from "react";
import {Box, Button, Container, Flex, Heading, VStack} from "@chakra-ui/react";
import ProgressSteps from "./ProgressSteps";
import FInput from "./FInput";
import {Formiz} from "@formiz/core";
import InsuranceButton from "./InsuranceButton";
import UploadField from "./UploadField";

export default function DetailForm() {
    return (
        <Box as="section">
            <Container as={Flex} flexDirection="column" justifyContent="center" py={{base: '4', lg: '10'}}>
                <Heading variant="head">Medical bill details</Heading>
                <ProgressSteps/>
                <Formiz>
                    <VStack spacing={6}  mt={{base: "30px", lg: "0"}}>
                        <FInput name="condition"/>
                        <InsuranceButton/>
                        <UploadField />
                        <Button variant="next">
                            Continue
                        </Button>
                    </VStack>
                </Formiz>
            </Container>
        </Box>
    )
};