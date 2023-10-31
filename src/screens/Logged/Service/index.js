import { Loading } from '../../../components'
import { Images } from '../../../constants'
import { TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Stack, ScrollView, Text, Image } from 'native-base'

const ServiceScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    const LoadExchangeInfo = () => {
        setLoading(true)
        setLoading(false)
    }

    useEffect(() => {
        LoadExchangeInfo()
    }, [navigation])

    return (
        <Box flex={1} bg="#231F20" w='100%' pt={5}>
            {loading && <Loading />}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box w={10} zIndex={10} top={12} left={5}>
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        <Image size="xs" source={Images.NavBarImage} />
                    </TouchableOpacity>
                </Box>
                <Stack flex={1} px={10} >
                    <Text mb={3} color="white" fontSize="4xl" textAlign="center" bold>Servicios</Text>
                    <Stack py={5}>
                        <TouchableOpacity onPress={() => navigation.navigate("MembershipScreen")}>
                            <Image source={Images.ServiceImage} borderRadius={10} />
                        </TouchableOpacity>
                    </Stack>
                </Stack>
            </ScrollView>
        </Box>
    )
}

export default ServiceScreen