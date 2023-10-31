import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLOR, Images, Styles } from '../../../constants'
import { Text, Stack, Box, Image } from 'native-base'

const HomeCardDetail = ({ navigation }) => {
    const [cardInfo, setCardInfo] = useState(navigation.state.params);

    const NextPage = (amount) => {
        navigation.navigate("PaymentScreen", { ...cardInfo, amount })
    }

    return (
        <Stack
            flex={1}
            bg={COLOR.base}
            p={7}
            justifyContent="center"
            pt={12}
        >
            <Box pos="absolute" zIndex={10} top={16} left={7}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.ExitImage} size="xs" resizeMode="contain" />
                </TouchableOpacity>
            </Box>
            <Text fontSize="3xl" pos="absolute" color="white" bold alignSelf="center" top={16}>DEPOSITOS</Text>
            <TouchableOpacity onPress={() => NextPage(2500)}>
                <Stack alignItems="center" style={Styles.PaymentBlog} mt={12} shadow={6} bg={COLOR.yellow}>
                    <Text style={Styles.WelcomeText}>25&euro;</Text>
                    <Text color={COLOR.black}>Basic</Text>
                </Stack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NextPage(5000)}>
                <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.white}>
                    <Text style={Styles.WelcomeText}>50&euro;</Text>
                    <Text color={COLOR.black}>Standard</Text>
                </Stack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NextPage(10000)}>
                <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.yellow}>
                    <Text style={Styles.WelcomeText}>100&euro;</Text>
                    <Text color={COLOR.black}>Work-Team</Text>
                </Stack>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("DescriptionScreen")}>
                <Text mt={16} textAlign="center" color="white" fontSize="xl">{"En que se diferencian los\ndepositos"}</Text>
            </TouchableOpacity>
        </Stack>
    )
}

export default HomeCardDetail;