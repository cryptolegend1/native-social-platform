import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLOR, Images, Styles, LAYOUT } from '../../../constants'
import { Text, Stack, Button, Box, Image, ScrollView, Checkbox } from 'native-base'

const ContratoScreen = ({ navigation }) => {
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
                <Stack alignItems="center" style={Styles.PaymentBlog} mb={10} mt={5} space={3} shadow={6} bg={COLOR.white}>
                    <Text fontSize="4xl" textAlign="center" bold color="black">
                        Contrato
                    </Text>
                    <Text fontSize={32} textAlign="center" bold color="black">
                        {'web pagina editors gebruiken tegenwoordig\nLorem Ipsum als\nhun standaard\nmodel tekst, en\neen zoekopdracht\nnaar "lorem\nipsum" ontsluit dergelijke).'}
                    </Text>
                </Stack>
                <Checkbox _text={{ fontSize: 24, fontWeight: "bold", color: COLOR.base, textAlign: "center", marginTop: -1 }} isChecked={checked} onChange={() => setChecked(!checked)} aria-label="1" size="lg" value="orange" colorScheme="orange">
                    {`Aceptar terminos y\ncondiciones`}
                </Checkbox>
                {
                    checked && <Button onPress={_handleEvent} borderRadius={100} w="80%" variant="ghost" colorScheme="dark" _text={{ fontWeight: "bold", fontSize: 20, color: "white" }} alignSelf="center" my={8} bg={COLOR.base}>Guardar</Button>
                }
            </ScrollView>
        </Stack>
    )
}

export default ContratoScreen;