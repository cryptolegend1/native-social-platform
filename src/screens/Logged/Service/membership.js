import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLOR, Styles } from '../../../constants'
import { Text, Stack } from 'native-base'

const HomeCardDetail = ({ navigation }) => {
    const { user } = useSelector(store => store.auth)
    
    const NextPage = (amount) => {
        let Info = {
            user: user.email,
            fullName: "Psychology",
            amount
        }
        navigation.navigate("PaymentScreen", Info)
    }

    return (
        <Stack
            flex={1}
            bg={"white"}
            p={7}
            pb={12}
            pt={12}
        >
            <Text fontSize="3xl" pos="absolute" color="black" bold alignSelf="center" top={16}>Planes de Psicologia</Text>
            <Stack flex={1} justifyContent="center" mt={10}>
                <TouchableOpacity onPress={() => NextPage(1500)}>
                    <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.white}>
                        <Text style={Styles.WelcomeText}>15&euro;</Text>
                        <Text color={COLOR.black}>1 mes</Text>
                    </Stack>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NextPage(4000)}>
                    <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.white}>
                        <Text style={Styles.WelcomeText}>40&euro;</Text>
                        <Text color={COLOR.black}>3 meses</Text>
                    </Stack>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => NextPage(11000)}>
                    <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.white}>
                        <Text style={Styles.WelcomeText}>110&euro;</Text>
                        <Text color={COLOR.black}>1 año</Text>
                    </Stack>
                </TouchableOpacity>
            </Stack>
            <Stack bg="black" alignItems="center" p={5}>
                <Text color="white" fontSize="lg" fontWeight={400}>Las consultas deben estar</Text>
                <Text color="white" fontSize="lg" fontWeight={400}>relacionadas con  las tareas</Text>
            </Stack>
        </Stack>
    )
}

export default HomeCardDetail;