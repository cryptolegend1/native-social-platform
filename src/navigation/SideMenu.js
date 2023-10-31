import React from 'react'
import { navigate } from '../redux/services'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { COLOR, LAYOUT } from '../constants'
import { TouchableOpacity } from 'react-native'
import { Icon, Text, Box, HStack, Stack, Link } from 'native-base'

export default ({ navigation }) => {
  const { user } = useSelector(store => store.auth);
  return (
    <Box flex={1} w='100%' bgColor={COLOR.white}>
      <Stack flex={1} pt={20}>
        <Box pos="absolute" zIndex={10} top={12} right={8}>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Icon size="md" as={<AntDesign name="close" />} />
          </TouchableOpacity>
        </Box>
        <Stack flex={1}>
          {
            LAYOUT.DrawerList.map((item, key) => (
              <TouchableOpacity key={key} onPress={() => navigate(item.navLink)}>
                <HStack alignItems='center' px={5} py={2}>
                  <Text color={COLOR.black} pl={4} fontSize={36} bold> {item.title} </Text>
                </HStack>
              </TouchableOpacity>
            ))
          }
          {
            user.email === "atomictasks@gmail.com" ?
              <TouchableOpacity onPress={() => navigate("ConfirmsScreen")}>
                <HStack alignItems='center' px={5} py={2}>
                  <Text color={COLOR.black} pl={4} fontSize={36} bold> {"Confirms"} </Text>
                </HStack>
              </TouchableOpacity>
              :
              null
          }
        </Stack>
        <Stack mb={20}>
          <Text color={"#FA6E5A"} pl={9} fontSize={20} bold>UNETE A LA COMUNIDAD </Text>
          <HStack px={10} space={5} mt={5}>
            <Link href="https://discord.gg/PzxWSp6PPy/">
              <Icon viewBox="0 0 48 50" size={10}>{LAYOUT.DISCODEIcon}</Icon>
            </Link>
            <Link href="https://www.instagram.com/atomic_task/">
              <Icon viewBox="0 0 44 44" size={10}>{LAYOUT.InstagramIcon}</Icon>
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </Box >
  )
}