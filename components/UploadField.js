import React from "react";
import {Box, Button, Container, Flex, FormControl, FormLabel, Heading} from "@chakra-ui/react";

export default function UploadField() {
    return (
        <FormControl>
            <FormLabel fontWeight="normal">Upload invoice <i>(required)</i></FormLabel>
            <Flex justify="center" align="center"  border="1px dashed #595959" py={12} borderRadius="md">
                <Button variant="add">
                    Add Images
                </Button>
            </Flex>
        </FormControl>
    )
};