import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLOR, Images, Styles, LAYOUT } from '../../../constants'
import { Text, Stack, Button, Box, Image, ScrollView, Checkbox } from 'native-base'

const DescriptionScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const _handleEvent = () => {
        navigation.navigate("PerfilScreen", { key: "Contrato" })
    }

    return (
        <Stack
            flex={1}
            bg={"#fff"}
            p={7}
            pt={12}
        >
            <ScrollView showsVerticalScrollIndicator={false} >
                <Box zIndex={10} marginTop={2}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image size="xs" source={Images.ExitImage} resizeMode="contain" />
                    </TouchableOpacity>
                </Box>
                <Text fontSize="4xl" textAlign="center" bold color="black">
                    Diferencias entre depositos
                </Text>
                <Stack alignItems="center" borderRadius={16} p={4} pb={10} mb={2} mt={5} space={3} bg={COLOR.base}>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        Basic
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Acceso a los\ncanales de\nDiscord\n&"}
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Asesoramiento\ndel equipo de\nAtomic task"}
                    </Text>
                </Stack>
                <Stack alignItems="center" borderRadius={16} p={4} pb={10} mb={2} mt={5} space={3} bg={COLOR.base}>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        Standard
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Apoyo psicologico durante un mes"}
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Participar en las pruebas beta"}
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Acceso a la newsletter"}
                    </Text>
                </Stack>
                <Stack alignItems="center" borderRadius={16} p={4} pb={10} mb={2} mt={5} space={3} bg={COLOR.base}>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        Teams
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Apoyo psicologico durante 3 meses"}
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Asesoramiento del equipo de Atomic task"}
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="white">
                        {"Seguimiento telefónico"}
                    </Text>
                </Stack>

            </ScrollView>
        </Stack>
    )
}

export default DescriptionScreen;