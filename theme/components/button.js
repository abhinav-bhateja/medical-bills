import {lighten, darken} from "@chakra-ui/theme-tools"

export const Button = {
    variants: {
        next: {
            w: "100%",
            bg: "brand",
            color: "white",
            fontWeight: "medium",
            borderRadius: "3xl",
            _hover: {
                bg: darken("brand", 10)
            },
            _focus: {
                boxShadow: "0 0 0 3px brand"
            }
        },
        add: {
            bg: "#595959",
            color: "white",
            fontWeight: "normal",
            _hover: {
                bg: lighten("#595959", 10)
            },
            _focus: {
                boxShadow: "0 0 0 3px brand"
            }
        }
    }
}