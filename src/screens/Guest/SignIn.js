import { useDispatch } from 'react-redux'
import { Feather, Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth, COLOR, Styles } from '../../constants'
import { History, setUserInfo } from '../../redux/actions/authActions'
import React, { useEffect, useState } from 'react'
import { Input, Icon, Text, useToast, Spinner, Stack, Button, HStack, ScrollView } from 'native-base'

const SignInScreen = ({ navigation }) => {

    const Toast = useToast()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSignIn = () => {
        if (email == '') {
            return Toast.show({ title: 'Email is required!', placement: 'bottom', status: 'error', w: 400 })
        }
        if (password == '') {
            return Toast.show({ title: 'Password is required!', placement: 'bottom', status: 'error', w: 400 })
        }
        setLoading(true);

        auth.signInWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                var user = userCredential.user;

                dispatch(setUserInfo(user));
                setLoading(false);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setLoading(false);
                return Toast.show({ title: errorMessage, placement: 'bottom', status: 'error', w: 400 })
            });

    }

    useEffect(() => {
        dispatch(History(0));
    }, [])

    return (
        <Stack
            flex={1}
            p={7}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack
                    space={16}
                    mt={20}
                    flex={1}
                >
                    <Stack space={6}>
                        <Text style={Styles.WelcomeText}>Login</Text>
                        <Input
                            onChangeText={setEmail}
                            _light={Styles.LoginInput}
                            _focus={Styles.LoginInput}
                            placeholder={"Email address"}
                            InputLeftElement={
                                <Icon
                                    as={<Feather name="user" />}
                                    size="sm"
                                    ml={4}
                                    _light={{
                                        color: "black",
                                    }}
                                    _dark={{
                                        color: "gray.300",
                                    }}
                                />
                            }
                        />
                        <Input
                            onChangeText={setPassword}
                            _light={Styles.LoginInput}
                            _focus={Styles.LoginInput}
                            type="password"
                            placeholder={"**********"}
                            InputLeftElement={
                                <Icon
                                    as={<Feather name="lock" />}
                                    size="sm"
                                    ml={4}
                                    _light={{
                                        color: "black",
                                    }}
                                    _dark={{
                                        color: "gray.300",
                                    }}
                                />
                            }
                        />
                    </Stack>
                    <Stack>
                        <Button pr={7} mt={7} h={50} _text={{ ...Styles.WelcomeButton, color: "black" }} colorScheme="warning" variant="ghost" w={"100%"} borderRadius={16} onPress={() => navigation.navigate("RegisterDashScreen")} bg={"#F2C94C"} alignSelf=" center">Register <Icon style={{ position: "absolute", right: -30 }} color={COLOR.black} as={<Entypo name="chevron-right" />} /></Button>
                        <Button pr={7} mt={7} h={50} disabled={loading} w={"100%"} variant="ghost" borderRadius={16} onPress={handleSignIn} bg={COLOR.base} alignSelf="center">
                            {
                                loading ?
                                    <Spinner size="sm" /> :
                                    <HStack alignItems="center" justifyContent="center">
                                        <Text style={{ ...Styles.WelcomeButton, color: "white" }}>
                                            Login
                                        </Text>
                                        < Icon style={{ position: "absolute", right: -30 }} color={COLOR.white} as={<Entypo name="chevron-right" />} />
                                    </HStack>
                            }
                        </Button>
                    </Stack>
                    <Stack>
                        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassScreen")}>
                            <Text textAlign="center" bold color="black" fontSize="2xl">¿Has olvidado la contraseña?</Text>
                        </TouchableOpacity>
                    </Stack>
                </Stack>
            </ScrollView>
        </Stack >
    )
}

export default SignInScreen