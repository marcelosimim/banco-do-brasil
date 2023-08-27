import React from "react";
import { SafeAreaView, Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import Colors from "../../utilities/Colors";
import { Feather } from '@expo/vector-icons'
import Images from "../../utilities/Images";
import LoginCard from "../../components/LoginCard";

export default function Login() {
    return (
        <ImageBackground 
            source={Images.LOGIN_BACKGROUND}
            style={styles.pageContainer}
        >
            <SafeAreaView style={styles.content}>
                <View style={styles.headerContainer}>
                    <Image style={styles.imageContainer} source={Images.LOGO_YELLOW} />
                    <View style={styles.iconsContainer}>
                        <Feather name="bell" size={20} color="#fff" ></Feather>
                        <Feather name="message-square" size={20} color="#fff" ></Feather>
                    </View>
                </View>

                <View style={styles.userInfoContainer}>
                    <LoginCard />
                    <View style={styles.optionsContainer}>
                    <View style={styles.changeAccountContainer}>
                        <Feather name="refresh-cw" size={20} color="#fff" ></Feather>
                        <Text style={styles.changeAccountText}>Trocar conta</Text>
                    </View>
                    <View style={styles.paymentContainer}>
                        <Image style={styles.paymentImages} source={Images.ICON_PIX}/>
                        <Image style={styles.paymentImages} source={Images.ICON_QR_CODE}/>
                    </View>
                </View>
                </View>
    
                <View style={styles.bottomCard}>
                   <Image style={styles.coinImage} source={Images.ICON_COIN}/>
                    <View style={styles.bottomMessageContainer}>
                        <Text style={styles.bottomTitleMessage}>Quer ganhar R$ 25 milhões?</Text>
                        <Text style={styles.bottomSubtitleMessage}>Mais fácil que acertar na loteria e ainda garante seu dinheiro de volta.</Text>
                        <View style={styles.bottomHashtagContainer}>
                            <Text style={styles.bottomHashtagMessage}>#OUROCAP</Text>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
      flex: 1
    },
    content: {
        flex: 1,
        marginHorizontal: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: { 
      width: 60,
      height: 60,
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 20
    },
    userInfoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 100
    },
    optionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    changeAccountContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    changeAccountText: {
        color: Colors.WHITE,
        fontSize: 16,
        fontWeight: 600
    },
    paymentContainer: {
        flexDirection: 'row',
        gap: 8
    },
    paymentImages: {
        height: 25,
        width: 25
    },
    bottomCard: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 16,
        borderRadius: 4,
    },
    coinImage: {
        height: 50,
        width: 50,
        marginTop: 16,
        marginLeft: 8
    },
    bottomMessageContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'baseline'
    },
    bottomTitleMessage: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    bottomSubtitleMessage: {
        fontSize: 14,
        color: Colors.TEXT_GRAY,
        marginVertical: 4,
    },
    bottomHashtagContainer: {
        backgroundColor: Colors.BLUE,
        borderRadius: 16,
        padding: 6
    },
    bottomHashtagMessage: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10
    }
  });
  