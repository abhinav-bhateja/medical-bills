import React from "react";
import {useField} from "@formiz/core";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";

export default function FInput(props) {
    const {
        errorMessage,
        id,
        isValid,
        isSubmitted,
        setValue,
        value
    } = useField(props)

    return (
        <FormControl>
            <FormLabel htmlFor={id} fontWeight="normal">Medical condition or treatment <i>(required)</i></FormLabel>
            <Input
                id={id}
                type="text"
                value={value ?? ''} // Pass the value for the input
                onChange={e => setValue(e.target.value)} // Update the value onChange
                focusBorderColor="brand"
            />
        </FormControl>
    )
}