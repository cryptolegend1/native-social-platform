import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { COLOR, Styles } from '../../constants'
import { Text, Stack, Button, Icon, Checkbox } from 'native-base'

const Signature_3 = ({ navigation }) => {
    return (
        <Stack
            flex={1}
            bg={COLOR.white}
            p={7}
        >
            <Stack
                flex={1}
                pt={12}
                justifyContent="center"
                space={16}
            >
                <Stack alignItems="flex-start" space={12}>
                    <Checkbox _text={{ fontSize: 35, fontWeight: "bold", color: COLOR.base, textAlign: "left", marginTop: -2 }} aria-label="1" size="lg" value="orange" bg={"yellow"} colorScheme="orange" isChecked={true}>
                        Ir al gimnasio
                    </Checkbox>
                    <Checkbox _text={{ fontSize: 35, fontWeight: "bold", color: COLOR.base, textAlign: "left", marginTop: -1 }} aria-label="1" size="lg" value="orange" colorScheme="orange" isChecked={false}>
                        {`Leer los libros \nde la estantería`}
                    </Checkbox>
                    <Checkbox _text={{ fontSize: 35, fontWeight: "bold", color: COLOR.base, textAlign: "left", color: "#E49621!important", marginTop: -1 }} aria-label="1" size="lg" value="orange" colorScheme="orange" isChecked={false}>
                        Añadir
                    </Checkbox>
                </Stack>
                <Text style={{ ...Styles.WelcomeText, fontSize: 38 }}>Elige una tarea que hacer</Text>
            </Stack>
            <Button pr={7} mb={7} _text={{ ...Styles.WelcomeButton }} borderRadius={16} onPress={() => navigation.navigate("Signature4Screen")} w={"70%"} bg={COLOR.base} alignSelf="center">Siguiente <Icon style={{ position: "absolute", right: -30 }} color={COLOR.white} as={<Entypo name="chevron-right" />} /></Button>
        </Stack>
    )
}

export default Signature_3;