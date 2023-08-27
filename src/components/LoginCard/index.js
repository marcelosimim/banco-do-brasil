import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../utilities/Colors";
import DummyData from "../../utilities/DummyData";
import Images from "../../utilities/Images";

export default function LoginCard() {
    const user = DummyData.USER_NAME
    const bankAgency = DummyData.BANK_AGENCY
    const bankAccount = DummyData.BANCK_ACCOUNT

    return (
        <View style={styles.content}> 
            <View style={styles.acronymContainer}>
                <Text style={styles.acronymText}>{user.substring(0,2)}</Text>
            </View>
            <View style={styles.otherContainer}>
                <View style={styles.accountContainer}>
                    <Text style={styles.userNameText}>{user}</Text>
                    <View style={styles.bankContent}>
                        <Text style={styles.bankText}>{bankAgency}</Text>
                        <Text style={styles.bankText}>•</Text>
                        <Text style={styles.bankText}>{bankAccount}</Text>
                    </View>
                </View>
                <View style={styles.faceIdContainer}>
                    <Image style={styles.faceIdImage} source={Images.ICON_FACE_ID}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: Colors.WHITE,
        padding: 8,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        borderRadius: 4
    },
    acronymContainer: {
        backgroundColor: Colors.LIGHT_BLUE,
        justifyContent: 'center',
        padding: 16,
        borderRadius: 4
    },
    acronymText: {
        color: Colors.BLUE,
        fontSize: 18,
        fontWeight: 600,
    },  
    otherContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    accountContainer: {
       justifyContent: 'center',
       marginLeft: 16,
    },
    userNameText: {
        fontSize: 18,
        fontWeight: 600
    },
    bankContent: {
        flexDirection: 'row',
        gap: 4
    },
    bankText: {
        color: Colors.TEXT_GRAY,
        fontSize: 16,
        fontWeight: 450
    },
    faceIdContainer: {
        justifyContent: 'center'
    },
    faceIdImage: {
        height: 50,
        width: 50
    }
})
