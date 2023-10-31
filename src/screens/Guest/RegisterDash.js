import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../redux/actions/authActions';
import * as GoogleSignIn from 'expo-google-sign-in';
import { TouchableOpacity } from 'react-native'
import { COLOR, db, Images, Styles } from '../../constants'
import { Box, Image, Text, Stack, Button } from 'native-base'

const SignInScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    
    const _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync()
        db.collection("users").where("email", "==", user.email).get().then(async (querySnapshot) => {
            let tempBox = [];
            querySnapshot.forEach((doc) => {
                tempBox.push(doc.data());
            });
            if (tempBox.length) {
                dispatch(setUserInfo(user));
            } else {
                await db.collection('users').doc(user.email).set({
                    email: user.email,
                    uid: user.uid,
                    password: null,
                    name: user.displayName
                });
                dispatch(setUserInfo(user));
            }
        });
    };


    const signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync()
            const { type, user } = await GoogleSignIn.signInAsync()
            if (type === 'success') {
                _syncUserWithStateAsync()
            }
        } catch ({ message }) {
            console.log('login: Error:' + message)
        }
    }

    return (
        <Box
            flex={1}
            bg={COLOR.base}
            p={7}
            justifyContent="center"
        >
            <Box pos="absolute" left={7} top={12} zIndex={10}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.ExitImage} />
                </TouchableOpacity>
            </Box>

            {/* <Image source={Images.RegisterImage} resizeMode="contain" /> */}
            <Stack borderRadius={16} borderWidth={2} bg={COLOR.white} p={5} alignItems="center" space={5}>
                <Text style={Styles.WelcomeText}>Registro</Text>
                <Button _text={Styles.WelcomeButton} onPress={() => navigation.navigate("RegisterScreen")} borderRadius={16} w={"100%"} bg={COLOR.base} alignSelf="center">Email</Button>
                <Button _text={{ ...Styles.WelcomeButton, color: "white" }} onPress={signInAsync} borderRadius={16} w={"100%"} bg={"#EB5757"} alignSelf="center">Sign In with Googlea</Button>
            </Stack>
        </Box>
    )
}

export default SignInScreen