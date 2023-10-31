import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { COLOR, Styles } from '../../constants'
import { Text, Stack, Button, Icon, ScrollView } from 'native-base'

const Signature_4 = ({ navigation }) => {
    return (
        <Stack
            flex={1}
            bg={COLOR.white}
            p={10}
        >
            <Stack
                flex={1}
                justifyContent="center"
                mt={5}
            >
                <Text style={Styles.WelcomeText}>Elige un deposito</Text>
                <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.yellow}>
                    <Text style={Styles.WelcomeText}>25&euro;</Text>
                    <Text color={COLOR.black} bold>Basic</Text>
                </Stack>
                <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.white}>
                    <Text style={Styles.WelcomeText}>50&euro;</Text>
                    <Text color={COLOR.black} bold>Standard</Text>
                </Stack>
                <Stack alignItems="center" style={Styles.PaymentBlog} shadow={6} bg={COLOR.yellow}>
                    <Text style={Styles.WelcomeText}>100&euro;</Text>
                    <Text color={COLOR.black} bold>Work-Team</Text>
                </Stack>
                <Button pr={7} mt={10} onPress={() => navigation.navigate("Signature5Screen")} borderRadius={16} _text={Styles.WelcomeButton} w={"70%"} bg={COLOR.base} alignSelf="center">Siguiente <Icon style={{ position: "absolute", right: -30 }} color={COLOR.white} as={<Entypo name="chevron-right" />} /></Button>
            </Stack>
        </Stack>
    )
}

export default Signature_4;