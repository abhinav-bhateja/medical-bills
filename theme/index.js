import {extendTheme} from '@chakra-ui/react'
import {Heading} from "./components/heading";
import {Text} from "./components/text";
import {Button} from "./components/button";


const theme = extendTheme({
    colors: {
        brand: "#B03390"
    },
    fonts: {
        heading: 'Graphik, sans-serif',
        body: 'Graphik, sans-serif',
    },
    components: {
        Heading,
        Text,
        Button
    }
})

export default theme