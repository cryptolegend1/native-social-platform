import { StyleSheet } from "react-native"
import { COLOR } from "./Color"
export * from './Color'
export * from './Images'
export * from './Layout'
export * from './Root'
export * from './firebase'

/**
 * basic styles
 */
export const Styles = StyleSheet.create({
    WelcomeText: {
        fontSize: 45,
        textAlign: "center",
        fontWeight: "bold",
        color: COLOR.base
    },
    SignatureText: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
        color: COLOR.white
    },
    WelcomeButton: {
        fontSize: 22,
        fontWeight: "bold",
    },
    PaymentBlog: {
        width: "100%",
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginVertical: 10
    },
    GuestText: {
        fontSize: 45,
        textAlign: "center",
        fontWeight: "bold",
    },
    LoginInput: {
        borderRadius: 15,
        borderColor: "black",
    }
})