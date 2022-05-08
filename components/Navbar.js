import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    IconButton,
    useBreakpointValue,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody, CloseButton, VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'

export const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box as="section">
            <Box as="nav" boxShadow="0 4px 10px 0 #0000001A">
                <Container maxW={{ base: 'full', lg: '1150px' }} py={{ base: '4', lg: '5' }}>
                    <HStack justify="space-between">
                        <Heading variant="logo">Logo</Heading>
                        {isDesktop ? (
                            <Flex justify="space-between">
                                <HStack spacing="2" w="">
                                    <Button variant="ghost">Home</Button>
                                    <Button variant="ghost">Explore medical bills</Button>
                                    <Button variant="ghost">My account</Button>
                                </HStack>
                            </Flex>
                        ) : (
                            <>
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" />}
                                    aria-label="Open Menu"
                                    ref={btnRef}
                                    onClick={onOpen}
                                />
                                <Drawer
                                    isOpen={isOpen}
                                    placement='right'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                    size="full"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerHeader as={Flex} justify="space-between" align="center">
                                            <Heading variant="logo">Logo</Heading>
                                            <CloseButton onClick={onClose} />
                                        </DrawerHeader>
                                        <DrawerBody fontWeight="semibold">
                                            <Flex py={4} px={2} color="#292929" borderBottom="1px solid #CCCCCC">
                                                Home
                                            </Flex>
                                            <Flex py={4} px={2} color="#292929" borderBottom="1px solid #CCCCCC">
                                                Explore Medical Bills
                                            </Flex>
                                            <Flex py={4} px={2} color="#292929" borderBottom="1px solid #CCCCCC">
                                                My account
                                            </Flex>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </>
                        )}
                    </HStack>
                </Container>
            </Box>
        </Box>
    )
}

export default Navbar;