import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { COLOR, Images, Styles } from '../../constants'
import { Text, Stack, Button, Icon, Image } from 'native-base'

const Signature_2 = ({ navigation }) => {
    return (
        <Stack
            flex={1}
            bg={COLOR.green}
            p={7}
        >
            <Stack
                pt={5}
            >
                <Image source={Images.Signature} mt={36} h={300} resizeMode="contain"></Image>
                <Button pos="absolute" top={107} ml={"32%"} bgColor="00000000" px={0} w={40} _text={{ fontSize: 27, fontWeight: "bold" }}>Get Work</Button>
                <Button pos="absolute" top={180} ml={"15%"} px={0} w={'110px'} bgColor="00000000" _text={{ fontSize: 27, fontWeight: "bold" }}>Get Home</Button>
                <Text mt={5} style={Styles.SignatureText}>En 3 sencillos pasos empieza  a ser mas productivo</Text>
            </Stack>
            <Button pr={7} mt={20} _text={Styles.WelcomeButton} borderRadius={16} onPress={() => navigation.navigate("Signature3Screen")} w={"70%"} bg={COLOR.base} alignSelf="center">Siguiente <Icon style={{ position: "absolute", right: -30 }} color={COLOR.white} as={<Entypo name="chevron-right" />} /></Button>
        </Stack>
    )
}

export default Signature_2;