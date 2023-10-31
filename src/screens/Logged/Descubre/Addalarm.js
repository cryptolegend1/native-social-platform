import moment from 'moment';
import { useSelector } from 'react-redux';
import { COLOR, Images } from '../../../constants'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Text, Stack, Button, Box, Image, Icon, Input, HStack, View, useToast, Spinner } from 'native-base'

const AddalarmScreen = ({ navigation }) => {
    const [time, setTime] = useState(moment(new Date).format("hh : mm a"));
    const [title, setTitle] = useState();
    const [loading, setLoading] = useState(false)
    const { user } = useSelector((store) => store.auth);
    const Toast = useToast();

    const SaveHandle = async () => {
        if (title) {
            setLoading(true)
            navigation.navigate("VerificationScreen", {
                user: user.email,
                time,
                payment: 0,
                state: 1,
                fullName: "Personalizada",
                cardName: title
            });
            setLoading(false)
        } else {
            return Toast.show({ title: 'por favor ingrese el meta nombre!', placement: 'bottom', status: 'error', w: 400 })
        }
        return;
    }

    return (
        <Box flex={1} bg={"#fff"} pt={12}>
            <HStack
                h={65}
                px={7}
                alignItems="center"
                justifyContent="center"
            >
                <View pos="absolute" alignItems='flex-start' w={10} left={5} zIndex={10}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image size="xs" source={Images.GobackImage} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <Text fontSize='2xl' bold color={COLOR.black}>{user.displayName}</Text>
                <View>
                </View>
            </HStack>
            <Stack flex={1} justifyContent="center">

                <Stack p={7} space={5} mt={-150}>
                    <Stack space={3}>
                        <Text fontSize="lg" color="black" bold>Nombre meta :</Text>
                        <Input
                            borderRadius={15}
                            onChangeText={(e) => setTitle(e)}
                            h={50}
                            borderColor="black"
                            _focus={{
                                borderColor: "black"
                            }}
                            textAlign="center"

                            InputRightElement={
                                <Icon size="sm" m={3} as={<AntDesign name="edit" />} />
                            } />
                    </Stack>
                </Stack>

            </Stack>
            <Button disabled={loading} mx={7} mb={20} _text={{ fontWeight: "bold", color: "white" }} onPress={SaveHandle} borderRadius={16} bg={COLOR.base} variant="ghost">
                {
                    loading ?
                        <Spinner size="sm" />
                        : "Save"
                }
            </Button>
        </Box>
    )
}

export default AddalarmScreen;