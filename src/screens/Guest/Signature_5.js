import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { COLOR, Images, Styles } from '../../constants'
import { Text, Stack, Button, Icon, Image } from 'native-base'

const Signature_4 = ({ navigation }) => {
    return (
        <Stack
            flex={1}
            bg={COLOR.grey}
            p={7}
        >
            <Stack
                justifyContent="center"
                flex={1}
            >
                <Text style={Styles.GuestText} color={COLOR.white}>Sino haces</Text>
                <Text style={Styles.GuestText} color={COLOR.white}>esa tarea</Text>
                <Text style={Styles.GuestText} color={COLOR.white}>perderas el</Text>
                <Text style={Styles.GuestText} color={"#FF6060"}>deposito</Text>
                <Image source={Images.PigWallet} alignSelf="center" />
                <Text style={Styles.GuestText} color={COLOR.white}>Simple</Text>
                <Text style={Styles.GuestText} color={COLOR.white}>¿verdad?</Text>
            </Stack>
            <Button pr={7} mb={8} _text={{ ...Styles.WelcomeButton, color: "black" }} w={"70%"} variant="ghost" borderRadius={16} onPress={() => navigation.navigate("SignInScreen")} bg={COLOR.white} alignSelf="center">Siguiente <Icon style={{ position: "absolute", right: -30 }} color={COLOR.black} as={<Entypo name="chevron-right" />} /></Button>
        </Stack>
    )
}

export default Signature_4;