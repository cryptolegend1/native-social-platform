import { Images } from '../../../constants'
import { Loading } from '../../../components'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Box, Stack, Text, Image, HStack, Avatar } from 'native-base'

const PerfilScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const LoadExchangeInfo = () => {
        setLoading(true)
        setLoading(false)
    }

    useEffect(() => {
        LoadExchangeInfo()
    }, [navigation])

    return (
        <Box flex={1} bg="#a1a1aa" w='100%'>
            {loading && <Loading />}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack flex={1} pt={16}>
                    <Box mb={2} alignSelf="center">
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={Images.ExitImage} resizeMode="contain" />
                        </TouchableOpacity>
                    </Box>
                    <Stack borderWidth={2} bg="white" p={7} borderRadius={16}>
                        <HStack justifyContent="space-between">
                            <Avatar source={Images.SampleAvatar3} >
                                AK
                            </Avatar>
                            <Text bold fontSize="2xl">...</Text>
                        </HStack>
                        <Stack>
                            <Text fontSize="3xl" bold color="black" my={2} textAlign="center">
                                1. Planificar
                            </Text>
                            <Text fontSize="md" p={3} textAlign="center">
                                No planificar lleva  no saber que hacer o en el peor de los casos te quemes por exceso de trabajo por querer estar atento a todo pero al final no te en
                            </Text>
                            <Image resizeMode="contain" source={Images.Blog1Image} />
                        </Stack>
                        <Stack>
                            <Text fontSize="3xl" bold color="black" my={2} textAlign="center">
                                {"2. Levantarse\ntemprano"}
                            </Text>
                            <Text fontSize="md" p={3} textAlign="center">
                                Levantarse tarde no solo implica horas perdidas, lleva a perder mas tiempo para ejecutar una tarea por eso despertar temprano
                            </Text>
                        </Stack>
                        <Stack>
                            <Text fontSize="3xl" bold color="black" my={2} textAlign="center">
                                {"3. Elimina\ndistracciones"}
                            </Text>
                            <Text fontSize="md" p={3} textAlign="center">
                                Ve aun lugar tranquilo de la casa y lleva todo que necesites , apaga notificaciones o cualquier distraccion y mentalizate en la meta no te detengas hasta terminar
                            </Text>
                        </Stack>
                        <Stack>
                            <Text fontSize="3xl" bold color="black" my={2} textAlign="center">
                                {"4. Evita quemarte"}
                            </Text>
                            <Text fontSize="md" p={3} textAlign="center">
                                Una situación común es que empieces a trabajar y le dediques un par de horas, asi 3 o 4 dias y al quinto ya lo dejes. por eso es importante tomar descansos entre jornadas de estudio/trabajo para ser constante a largo plazo
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </ScrollView>
        </Box>
    )
}

export default PerfilScreen