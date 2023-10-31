import { COLOR } from '../../../constants'
import React, { useState } from 'react'
import { Text, Stack, Button, Box, Input, Spinner } from 'native-base'

const VerificationScreen = ({ navigation }) => {
    const _saveData = navigation.state.params;
    const [verification, setVerifyCode] = useState();
    const [loading, setLoading] = useState(false)

    const SaveHandle = async () => {
        // if (verification) {
        setLoading(true)
        navigation.navigate("DepositoScreen", _saveData);
        setLoading(false)
        // } else {
        //     return Toast.show({ title: 'por favor ingrese el meta nombre!', placement: 'bottom', status: 'error', w: 400 })
        // }
        return;
    }

    return (
        <Box flex={1} bg={"#fff"} pt={12}>
            <Text fontSize={35} mt={10} textAlign="center" bold color={COLOR.black}>{"¿Tienes codigo\ndescuento?"}</Text>
            <Stack flex={1} justifyContent="center">

                <Stack p={7} space={5}>
                    <Stack space={3}>
                        <Input
                            value={verification}
                            onChangeText={(e) => setVerifyCode(e)}
                            h={50}
                            borderRadius={15}
                            borderColor="black"
                            _focus={{
                                borderColor: "black"
                            }}
                            textAlign="center"
                        />
                    </Stack>
                </Stack>

            </Stack>
            <Button disabled={loading} border={1} borderColor="black" mx={7} mb={5} _text={{ fontWeight: "bold", color: "black" }} borderRadius={16} bg={"#FFBD12"} variant="ghost">
                VALIDAR
            </Button>
            <Button disabled={loading} mx={7} mb={32} _text={{ fontWeight: "bold", color: "white" }} onPress={SaveHandle} borderRadius={16} bg={"black"} variant="ghost">
                {
                    loading ?
                        <Spinner size="sm" />
                        : "SIGUIENTE"
                }
            </Button>
        </Box>
    )
}

export default VerificationScreen;