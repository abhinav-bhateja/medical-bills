import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import Head from "next/head"

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link
                    href="../asset/Graphik/GraphikRegular.otf"
                    rel="stylesheet"
                />
                <link
                    href="../asset/Graphik/GraphikMedium.otf"
                    rel="stylesheet"
                />
                <link
                    href="../asset/Graphik/GraphikSemibold.otf"
                    rel="stylesheet"
                />
                <link
                    href="../asset/Graphik/GraphikRegularItalic.otf"
                    rel="stylesheet"
                />
            </Head>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>

    )
}

export default MyApp
