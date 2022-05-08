import React from "react";
import {Flex, Box, FormControl, FormLabel, HStack, useRadio, useRadioGroup} from "@chakra-ui/react";

export default function InsuranceButton() {
    const options = ['Yes', 'No']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'insurance',
        defaultValue: 'Yes',
        onChange: console.log,
    })
    const group = getRootProps()

    return (
        <FormControl>
            <FormLabel fontWeight="normal">Did you have insurance? <i>(required)</i></FormLabel>
            <HStack spacing={0} {...group} >
                {options.map((value => {
                    const radio = getRadioProps({value})
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                }))}
            </HStack>
        </FormControl>
    )
};

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label' w="100%">
            <input {...input} />
            <Flex
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                bg="transparent"
                color="#202020"
                borderColor="#202020"
                _checked={{
                    bg: '#202020',
                    color: 'white'
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={10}
                py={2}
                transition="0.1s ease-in-out"
                borderLeftRadius={props.children === "Yes" ? "sm" : 0}
                borderRightRadius={props.children === "Yes" ? 0 : "sm"}
                w="100%"
                justify="center"
                fontWeight="normal"
                sx={{
                    _focus: {}
                }}
            >
                {props.children}
            </Flex>
        </Box>
    )
}