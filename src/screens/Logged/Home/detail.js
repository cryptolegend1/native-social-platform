import { Video } from 'expo-av';
import { Loading } from '../../../components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as ImagePicker from "expo-image-picker";
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { db, storage, Images, Styles } from '../../../constants'
import { Text, Stack, Button, Box, Image, HStack, useToast } from 'native-base'


const HomeCardDetail = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const Toast = useToast();
    const CardItem = navigation.state.params;
    const { user } = useSelector(store => store.auth);
    const [confirmed, setConfirmed] = useState(false);
    const video = React.useRef(null);

    const checkCard = () => {
        db.collection("confirmation").where("email", "==", user.email).where("cardId", "==", CardItem.uid).get().then((querySnapshot) => {
            let tempCards = null;
            querySnapshot.forEach((doc) => {
                tempCards = doc.data();
            });
            setConfirmed(tempCards);
            setLoading(false);
        });
    }

    useEffect(() => {
        checkCard();
    }, [navigation])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.cancelled) {
            setConfirmed(false);
            return setPhoto(result);
        }
    };

    const imageUpload = async (uri) => {
        const timeStamp = Math.floor(Date.now() / 1000);
        const insertKey = "_" + timeStamp;
        const response = await fetch(uri)
        const blob = await response.blob()
        const ref = storage.child(`${insertKey}.png`)
        await ref.put(blob)
        const url = await ref.getDownloadURL();
        return url;
    }

    const Save = async () => {
        if (photo) {
            setLoading(true);
            if (typeof (photo) === 'object') {
                const file = await imageUpload(photo.uri);
                await db.collection("users").where("email", "==", user.email).get().then(async (querySnapshot) => {
                    const timeStamp = Math.floor(Date.now() / 1000);
                    const insertKey = "_" + timeStamp;
                    let userInfo = "";
                    querySnapshot.forEach((doc) => {
                        userInfo = doc.data();
                    });
                    let saveData = {
                        email: user.email,
                        username: userInfo.name,
                        photo: file,
                        type: photo.type,
                        cardId: CardItem.uid,
                        cardName: CardItem.cardName,
                        amount: CardItem.amount,
                        state: "requested",
                        created_At: new Date().getTime()
                    }
                    await db.collection('confirmation').doc(insertKey).set(saveData);
                    setConfirmed(saveData);
                    setLoading(false);
                });
            }


        } else {
            return Toast.show({ title: "Please select Photo.", placement: 'bottom', status: 'error', w: 400 })
        }
    }

    return (
        <Stack
            flex={1}
            bg={"#000000"}
            p={7}
        >
            {loading ? <Loading /> :
                <>
                    <Box pos="absolute" zIndex={10} top={12} left={7}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={Images.ExitImage} size="xs" resizeMode="contain" />
                        </TouchableOpacity>
                    </Box>
                    {
                        confirmed ?
                            <>
                                {
                                    confirmed.type === "video" ?
                                        <Video
                                            ref={video}
                                            style={{ height: 380, marginBottom: 20, alignSelf: "center", width: "80%", maxWidth: "80%", marginTop: 100, borderRadius: 15 }}
                                            source={{ uri: `${confirmed.photo}` }}
                                            useNativeControls
                                            resizeMode="contain"
                                            isLooping
                                        />
                                        :
                                        <Image size="80%" h={400} borderRadius={15} mt={50} source={{ uri: `${confirmed.photo}` }} resizeMode="contain" alignSelf="center" />
                                }
                                <Text color="white" fontSize="3xl" shadow={3} textAlign="center">{(() => {
                                    if (confirmed.state === "requested") {
                                        return "solicitada";
                                    } else if (confirmed.state === "repeat") {
                                        return "repetir";
                                    } else if (confirmed.state === 'deny') {
                                        return "negar";
                                    } else if (confirmed.state === 'completed') {
                                        return "Felicidades";
                                    }
                                })()}</Text>
                                <Text color="#FFB61D" fontSize="2xl" textAlign="center">{(() => {
                                    if (confirmed.state === "requested") {
                                        return "por favor espere hasta aceptar";
                                    } else if (confirmed.state === "repeat") {
                                        return "La tarea se repite";
                                    } else if (confirmed.state === 'deny') {
                                        return "la tarea fue denegada";
                                    } else if (confirmed.state === 'completed') {
                                        return "La tarea se completó";
                                    }
                                })()}</Text>
                                {
                                    confirmed.state === "repeat" ?
                                        <Button w="48%" mt={5} _text={Styles.WelcomeButton} onPress={pickImage} borderRadius={100} bg={"#FFB61D"} alignSelf="center">Reenviar</Button> : null
                                }
                            </> :
                            photo ? <>
                                {
                                    photo.type === "video" ?
                                        <Video
                                            ref={video}
                                            style={{ height: 300, alignSelf: "center", width: "80%", maxWidth: "80%", marginTop: 100, borderRadius: 15 }}
                                            source={photo}
                                            useNativeControls
                                            resizeMode="contain"
                                            isLooping
                                        />
                                        : <Image source={photo} borderRadius={15} h={250} mt={100} maxW={"80%"} resizeMode="contain" alignSelf="center" />
                                }
                                <HStack flex={1} justifyContent="space-between">
                                    <Button w="48%" _text={Styles.WelcomeButton} onPress={pickImage} borderRadius={100} bg={"#FFB61D"} alignSelf="center">Reiniciar</Button>
                                    <Button w="48%" _text={Styles.WelcomeButton} onPress={Save} borderRadius={100} bg={"#FFB61D"} alignSelf="center">Enviar</Button>
                                </HStack>
                            </>
                                : <>
                                    <Image source={Images.HomeCardDetail} mt={5} resizeMode="contain" alignSelf="center" />
                                    <Text color="white" fontSize="2xl" textAlign="center">Solo envia la confirmacion cuando termines la tarea y recuerda que algunas tareas tienen  tiempo limite.. </Text>
                                    <Stack flex={1} justifyContent="center">
                                        <Button _text={Styles.WelcomeButton} onPress={pickImage} borderRadius={100} bg={"#FFB61D"} alignSelf="center">Enviar confirmación</Button>
                                    </Stack>
                                </>
                    }
                </>
            }
        </Stack>
    )
}

export default HomeCardDetail;