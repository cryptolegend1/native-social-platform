import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { COLOR, Styles } from '../../constants'
import { Text, Stack, Button, Icon } from 'native-base'

const Signature = ({ navigation }) => {
    return (
        <Stack
            flex={1}
            bg={COLOR.white}
            p={5}
        >
            <Stack justifyContent="center" flex={1}>
                <Text style={{ ...Styles.WelcomeText, textAlign: "center", fontSize: 33 }}>Cual es mayor incentivo para ser mas productivo?</Text>
                <Text style={{ ...Styles.WelcomeText, textAlign: "center", fontSize: 33 }}>La incertidumbre y perder lo actual</Text>
            </Stack>
            <Button mb={32} pr={7} onPress={() => navigation.navigate("Signature2Screen")} borderRadius={16} _text={Styles.WelcomeButton} w={"70%"} bg={COLOR.base} alignSelf="center">Siguiente <Icon style={{ position: "absolute", right: -30 }} color={COLOR.white} as={<Entypo name="chevron-right" />} /></Button>
        </Stack>
    )
}

export default Signature;