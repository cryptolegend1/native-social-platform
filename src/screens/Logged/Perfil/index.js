import { Entypo } from '@expo/vector-icons';
import { Loading } from '../../../components'
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native'
import { COLOR, db, LAYOUT } from '../../../constants'
import React, { useEffect, useState } from 'react'
import { Box, Stack, Text, HStack, Icon, Link } from 'native-base'

const PerfilScreen = ({ navigation }) => {
    const contrato = navigation.state.params;
    const [loading, setLoading] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)
    const PerfilIcons = [LAYOUT.PerfilIcon2, LAYOUT.PerfilIcon3, LAYOUT.PerfilIcon4, LAYOUT.PerfilIcon5, LAYOUT.PerfilIcon1,];
    const Texts = ["Password", "Normas", "Realimentación", "Modo de inversión", "Cerrar sesion"];
    const Links = ["ChangePassScreen", "NormasScreen", "Realimentación", "ContratoScreen", "LogoutScreen"];
    const { user } = useSelector(store => store.auth)
    const LoadExchangeInfo = async () => {
        setLoading(true)
        setTotalAmount(0);
        let tempamount = 0;
        await db.collection("payment_history").where("email", "==", user.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                tempamount += doc.data().amount / 100;
            });
        });
        await db.collection("goals").where("user", "==", user.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                tempamount += doc.data().amount / 100;
            });
        });
        setTotalAmount(tempamount);
        setLoading(false)
    }

    useEffect(() => {
        if (contrato.key) {
            LoadExchangeInfo()
        }
    }, [navigation])

    return (
        <Box flex={1} bg={COLOR.white} w='100%'>
            {loading && <Loading />}
            <Stack flex={1} justifyContent="center" px={10} space={6}>
                {
                    contrato.key ?
                        <Stack bg={COLOR.base} p={4} borderRadius={16} alignItems="center">
                            <Text color="white" fontSize="2xl" bold>Tu fianza actual es</Text>
                            <Text color="white" fontSize="4xl" bold>{totalAmount}&euro;</Text>
                        </Stack> : null
                }
                <Stack borderWidth={2} p={5} borderRadius={16}>
                    {
                        Texts.map((item, i) => {
                            return item === "Realimentación" ?
                                <Link key={i} href="https://play.google.com/store/apps/details?id=com.atomic.task">
                                    <HStack my={3} alignItems="center" justifyContent="space-between" w="100%">
                                        <HStack alignItems="center" space={3}>
                                            <Icon size="sm" viewBox="0 0 24 24">{PerfilIcons[i]}</Icon>
                                            <Text color={COLOR.black} bold fontSize="md" numberOfLines={1} maxW={170}>{item}</Text>
                                        </HStack>
                                        <Icon as={<Entypo name="chevron-right" />} />
                                    </HStack>
                                </Link> :
                                <TouchableOpacity key={i} onPress={() => { navigation.navigate(Links[i]) }}>
                                    <HStack my={3} alignItems="center" justifyContent="space-between">
                                        <HStack alignItems="center" space={3}>
                                            <Icon size="sm" viewBox="0 0 24 24">{PerfilIcons[i]}</Icon>
                                            <Text color={COLOR.black} bold fontSize="md" numberOfLines={1} maxW={170}>{item}</Text>
                                        </HStack>
                                        <Icon as={<Entypo name="chevron-right" />} />
                                    </HStack>
                                </TouchableOpacity>

                        }
                        )
                    }
                </Stack>
            </Stack>
        </Box>
    )
}

export default PerfilScreen