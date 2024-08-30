// _styles.js
import { Dimensions } from "react-native";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = {
    container: {
        backgroundColor: '#f6f8fc', // Equivalent to bg-gray-100
        flex: 1,
    },
    inner: {
        padding: responsiveScreenWidth(10), // Example: 10% padding on all sides
        alignItems: 'center', // Center align items
        justifyContent: 'center', // Center justify content vertically
    },
    container2: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: responsiveScreenHeight(15), // 15% of screen height
    },
    logo: {
        width: responsiveScreenWidth(25), // 25% of screen width
        height: responsiveScreenWidth(25), // 25% of screen width
        borderRadius: (responsiveScreenWidth(25)) / 2, // Half of the width for a circular logo
        resizeMode: 'contain',
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: responsiveScreenFontSize(3), // 3% of screen font size
        color: '#000000',
        marginBottom: responsiveScreenHeight(3), // 3% of screen height
        textAlign: 'center',
    },
    cardLogin: {
        marginTop: windowHeight * 0.25, // 25% of screen height using Dimensions
        width: responsiveScreenWidth(90), // 90% of screen width
        backgroundColor: '#fff',
        borderRadius: responsiveScreenWidth(7.5), // 7.5% of screen width for rounded corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        padding: responsiveScreenWidth(5), // 5% of screen width for padding
        elevation: 10,
        justifyContent: 'center',
    },
    cardSignup: {
        marginTop: windowHeight * 0.11, // 25% of screen height using Dimensions
        width: responsiveScreenWidth(90), // 90% of screen width
        backgroundColor: '#fff',
        borderRadius: responsiveScreenWidth(7.5), // 7.5% of screen width for rounded corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        padding: responsiveScreenWidth(5), // 5% of screen width for padding
        elevation: 10,
        justifyContent: 'center',
    },
    inputContainer: {
        marginBottom: responsiveScreenHeight(3), // 3% of screen height
    },
    label: {
        fontSize: responsiveScreenFontSize(2), // 2% of screen font size
        color: '#333',
    },
    input: {
        height: responsiveScreenHeight(5), // 5% of screen height
        borderRadius: responsiveScreenWidth(5), // 5% of screen width for rounded corners
        borderWidth: 1,
        borderColor: '#ddd',
        color: '#333',
        paddingLeft: responsiveScreenWidth(3), // 3% of screen width for padding
    },
    button: {
        width: '100%',
        height: responsiveScreenHeight(6), // 6% of screen height
        backgroundColor: '#00BFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveScreenWidth(7), // 7% of screen width for rounded corners
    },
    buttonText: {
        color: '#fff',
        fontSize: responsiveScreenFontSize(2), // 2% of screen font size

    },
    linkText: {
        color: '#041e33',
        fontSize: responsiveScreenFontSize(2), // 2% of screen font size
        marginTop: responsiveScreenHeight(3), // 3% of screen height
        textAlign: 'center',
    },
    forgotText: {
        color: '#041e33',
        fontSize: responsiveScreenFontSize(2), // 2% of screen font size
        marginTop: responsiveScreenHeight(1), // 3% of screen height
        textAlign: 'center',
    },
    signupText: {
        color: '#041e33',
        fontSize: responsiveScreenFontSize(2), // 2% of screen font size
        marginTop: responsiveScreenHeight(1), // 3% of screen height
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#f6f8fc',
    },
    headerTitle: {
        color: '#f6f8fc',
        fontWeight: 'bold',
        fontSize: responsiveScreenFontSize(2.5), // 2.5% of screen font size
    },
};

export default styles;