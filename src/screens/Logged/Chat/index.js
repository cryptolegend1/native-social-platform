import moment from 'moment'
import { Feather } from "@expo/vector-icons"
import { Loading } from '../../../components'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { database, db, Images, LAYOUT } from '../../../constants'
import { Text, Stack, Box, Image, Icon, Input, HStack, Avatar, ScrollView } from 'native-base'

const ChatScreen = ({ navigation }) => {
    const { user } = useSelector((store) => store.auth);
    const [userList, setUserList] = useState([]);
    const [SearchKey, setSearch] = useState("");
    const [latestMessage, setLatestMessage] = useState({});
    const [loading, setLoading] = useState(false)

    const handleDate = (d) => {
        const date1 = new Date(d.seconds * 1000);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const setMembers = (lists) => {
        setUserList(lists);
        SetLatestMessage(lists);
        setLoading(false);
    }

    const LoadUsers = async () => {
        if (user.email === LAYOUT.adminInfo.email) {
            await db.collection("users").get().then((querySnapshot) => {
                let users = [];
                querySnapshot.forEach((doc) => {
                    if (doc.id !== LAYOUT.adminInfo.email) {
                        users.push(doc.data());
                    }
                });
                setMembers(users);
            });
            return;
        } if (user.email === LAYOUT.psychology.email) {
            await db.collection("users").get().then(async (querySnapshot) => {
                let users = [LAYOUT.adminInfo];
                let _i = 0;
                let lastUser = "";
                await querySnapshot.forEach((doc) => {
                    lastUser = doc.id;
                });
                await querySnapshot.forEach(async (doc) => {
                    setLoading(true);
                    let tempnum = 0;
                    await db.collection("payment_history").where("email", "==", doc.id).get().then(async (snapshot) => {
                        await snapshot.forEach((doc1) => {
                            if (doc1.data().amount === 5000) {
                                let passDays = handleDate(doc1.data().created_at);
                                if (passDays <= 31) {
                                    if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                        tempnum++;
                                        users.push(doc.data())
                                    }

                                }
                            };
                            if (doc1.data().amount === 10000) {
                                let passDays = handleDate(doc1.data().created_at);
                                if (passDays <= 93) {
                                    if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                        tempnum++;
                                        users.push(doc.data())
                                    }
                                }
                            };
                        });
                        await db.collection("goals").where("user", "==", doc.id).get().then(async (snapshot) => {
                            await snapshot.forEach((doc2) => {
                                if (doc2.data().amount === 5000) {
                                    let passDays = handleDate(doc2.data().created_at);
                                    if (passDays <= 31) {
                                        if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                            tempnum++;
                                            users.push(doc.data())
                                        }
                                        return;
                                    }
                                };
                                if (doc2.data().amount === 10000) {
                                    let passDays = handleDate(doc2.data().created_at);
                                    if (passDays <= 93) {
                                        if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                            tempnum++;
                                            users.push(doc.data())
                                        }
                                        return;
                                    }
                                };
                            });
                            await db.collection("psychology").where("user", "==", doc.id).get().then(async (snapshot) => {
                                await snapshot.forEach((doc3) => {
                                    if (doc3.data().amount === 1500) {
                                        let passDays = handleDate(doc3.data().created_at);
                                        if (passDays <= 31) {
                                            if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                                tempnum++;
                                                users.push(doc.data());
                                            }
                                            return;
                                        }
                                    };
                                    if (doc3.data().amount === 4000) {
                                        let passDays = handleDate(doc3.data().created_at);
                                        if (passDays <= 93) {
                                            if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                                tempnum++;
                                                users.push(doc.data())
                                            }
                                            return;
                                        }
                                    };
                                    if (doc3.data().amount === 11000) {
                                        let passDays = handleDate(doc3.data().created_at);
                                        if (passDays <= 366) {
                                            if (doc.id !== LAYOUT.psychology.email && doc.id !== LAYOUT.adminInfo.email) {
                                                tempnum++;
                                                users.push(doc.data())
                                            }
                                            return;
                                        }
                                    };
                                });

                                if (doc.id === lastUser) {
                                    setMembers(users);
                                }
                            });
                        });
                    });
                });
            });
            return;
        } else {
            let tempnum = 0;
            await db.collection("psychology").where("user", "==", user.email).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().amount === 1500) {
                        let passDays = handleDate(doc.data().created_at);
                        if (passDays <= 31) {
                            tempnum++;
                            setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                            return;
                        }
                    };
                    if (doc.data().amount === 4000) {
                        let passDays = handleDate(doc.data().created_at);
                        if (passDays <= 93) {
                            tempnum++;
                            setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                            return;
                        }
                    };
                    if (doc.data().amount === 11000) {
                        let passDays = handleDate(doc.data().created_at);
                        if (passDays <= 366) {
                            tempnum++;
                            setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                            return;
                        }
                    };
                });

            });
            if (tempnum === 0) {
                await db.collection("payment_history").where("email", "==", user.email).get().then(async (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.data().amount === 5000) {
                            let passDays = handleDate(doc.data().created_at);
                            if (passDays <= 31) {
                                tempnum++;
                                setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                                return;
                            }
                        };
                        if (doc.data().amount === 10000) {
                            let passDays = handleDate(doc.data().created_at);
                            if (passDays <= 93) {
                                tempnum++;
                                setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                                return;
                            }
                        };
                    });
                });
                if (tempnum === 0) {
                    await db.collection("goals").where("user", "==", user.email).get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (doc.data().amount === 5000) {
                                let passDays = handleDate(doc.data().created_at);
                                if (passDays <= 31) {
                                    tempnum++;
                                    setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                                    return;
                                }
                            };
                            if (doc.data().amount === 10000) {
                                let passDays = handleDate(doc.data().created_at);
                                console.log(passDays);
                                if (passDays <= 93) {
                                    tempnum++;
                                    setMembers([LAYOUT.adminInfo, LAYOUT.psychology])
                                    return;
                                }
                            };
                        });
                    });
                    if (tempnum === 0) {
                        setMembers([LAYOUT.adminInfo])
                        return;
                    }
                }
            }
        }

    }

    const SetLatestMessage = (Users) => {
        database.ref(`private-message`).on('value', async snapshot => {
            if (snapshot.val()) {
                let latestMessage = {};
                const messages = snapshot.val();
                for (let j = 0; j < Users.length; j++) {
                    for (const key in messages) {
                        const message = messages[key];
                        if ((message.sender === user.email && message.receiver === Users[j].email) || (message.sender === Users[j].email && message.receiver === user.email)) {
                            if (message.receiver === user.email) {
                                latestMessage[Users[j].email] = {
                                    message: message.message,
                                    time: message.createdAt,
                                    state: message.state
                                };
                            } else {
                                latestMessage[Users[j].email] = {
                                    message: message.message,
                                    time: message.createdAt,
                                };
                            }
                        }
                    }
                }
                setLatestMessage(latestMessage);
            }
        })
    }

    useEffect(() => {
        LoadUsers();
    }, [])

    return (
        <Box flex={1} pt={12} bg={"#fff"}>
            {loading && <Loading />}
            <Stack
                flex={1}
            >
                <Box pos="absolute" zIndex={10} top={5} left={5}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Image size="xs" source={Images.GobackImage} resizeMode="contain" />
                    </TouchableOpacity>
                </Box>
                <Stack
                    pt={5}
                    px={10}
                >
                    <Text mb={3} color="black" fontSize="4xl" textAlign="center" bold>Chat</Text>
                    <Input
                        InputRightElement={
                            <Icon
                                as={<Feather name="search" />}
                                size="sm"
                                mx={3}
                                _light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }
                        borderWidth={2}
                        borderRadius={16}
                        borderColor="black"
                        placeholder="Search with love ..." // mx={4}
                        _focus={{
                            borderColor: "black"
                        }}
                        _light={{
                            placeholderTextColor: "blueGray.700",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.550",
                        }}
                        onChangeText={setSearch}
                    />
                </Stack>
                <Stack py={3} flex={1}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            userList.map((item, i) => {
                                return <TouchableOpacity key={i} onPress={() => navigation.navigate("ChatRoomScreen", item)}>
                                    <HStack p={5} display={item.name.toLowerCase().search(SearchKey.toLowerCase()) === -1 && SearchKey !== '' ? "none" : "flex"} bg={i % 2 ? "#F7F7F8" : "#eefbde"}>
                                        <Avatar source={Images.SampleAvatar3} w={"14%"}>
                                            AK
                                        </Avatar>
                                        <Stack w="80%" ml="5%">
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text bold w={'75%'} numberOfLines={1}>
                                                    {item.name}
                                                </Text>
                                                <Text fontSize="xxs">{latestMessage[item.email] ? moment(latestMessage[item.email].time).endOf('day').fromNow() : null}</Text>
                                            </HStack>
                                            <Text numberOfLines={1} w="90%" color={latestMessage[item.email] ? latestMessage[item.email].state === false ? "black" : "dark.300" : "dark.300"} fontWeight={latestMessage[item.email] ? latestMessage[item.email].state === false ? "700" : "normal" : "normal"}>
                                                {latestMessage[item.email] ? latestMessage[item.email].message : null}
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </TouchableOpacity>
                            })
                        }
                    </ScrollView>
                </Stack>
            </Stack>
        </Box >
    )
}

export default ChatScreen;