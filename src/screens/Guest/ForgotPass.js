import axios from 'axios'
import { useApi } from '../../redux/services'
import { History } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import { COLOR, ROOT, db } from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Input, Icon, Text, useToast, Spinner, Stack, HStack, IconButton } from 'native-base'

const ForgotPassScreen = ({ navigation }) => {

    const Api = useApi()
    const Toast = useToast()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)


    const sendCode = () => {
        if (email) {
            setLoading(true);
            db.collection("users").where("email", "==", email).get().then(async (querySnapshot) => {
                let tempCards = null;
                querySnapshot.forEach((doc) => {
                    tempCards = { ...doc.data(), uid: doc.id };
                });
                if (tempCards) {
                    var mailBox = {
                        to: email,
                        name: tempCards.name,
                        password: tempCards.password
                    }
                    axios.post(`${ROOT.PAYMENT_URL}forgot_password`, mailBox).then(({ data }) => {
                        if (data === "success") {
                            setLoading(false);
                            Toast.show({ title: "Please check your mailbox", placement: 'bottom', status: 'success', w: 400 });
                            return navigation.goBack();
                        } else {
                            setLoading(false);
                            return Toast.show({ title: "Network error", placement: 'bottom', status: 'warning', w: 400 });
                        }
                    })
                } else {
                    setLoading(false);
                    return Toast.show({ title: "Email does not exist!", placement: 'bottom', status: 'error', w: 400 })
                }
            });
        } else {
            return Toast.show({ title: "Please Input your email correctly!", placement: 'bottom', status: 'error', w: 400 })
        }
    }

    useEffect(() => {
        dispatch(History(0));
    }, [])

    return (
        <Stack
            flex={1}
            p={7}
            bgColor={COLOR.base}

        >
            <Text fontSize={42} mt={10} color="white" textAlign="center" bold>¿Has olvidado la contraseña?</Text>
            <Stack
                justifyContent="center"
                space={10}
                flex={1}
                mt={-15}
            >
                <Stack space={6} >
                    <Input
                        color="white"
                        bg="#262626"
                        type="email"
                        onChangeText={setEmail}
                        _light={{ borderRadius: 15, borderColor: "#272626" }}
                        _focus={{ borderRadius: 15, borderColor: "#262626" }}
                        placeholder={"Email address"}
                        InputLeftElement={
                            <Icon
                                as={<Ionicons name="mail" />}
                                size="sm"
                                ml={4}
                                _light={{
                                    color: "gray.500",
                                }}
                                _dark={{
                                    color: "gray.500",
                                }}
                            />
                        }
                    />
                </Stack>

                <HStack justifyContent="space-between" mb={32}>
                    <Text textAlign="center" bold color="white" fontSize="4xl">Send code</Text>
                    <TouchableOpacity onPress={sendCode}>
                        <IconButton
                            bgColor="#FF4B26"
                            w={12}
                            h={12}
                            borderRadius={100}
                            variant="ghost"
                            disabled={loading}
                            icon={
                                loading ? <Spinner size="sm" /> : <Icon size="sm" color="white" as={<AntDesign name="arrowright" />
                                } />}
                        />
                    </TouchableOpacity>
                </HStack>
            </Stack>
        </Stack >
    )
}

export default ForgotPassScreen