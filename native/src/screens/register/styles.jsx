import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#0c1219" },
    containerAlign: {
      alignItems: "center",
      padding: 2,
      paddingTop: "10%",
    },
    registerText: { color: "#f9f9fa", fontWeight: "400", fontSize: 26 },
    subText: {
      color: "gray",
      fontWeight: "400",
      fontSize: 12,
      marginTop: "4%",
      letterSpacing: 2,
    },
    inputAlign: {
      width: "100%",
      paddingHorizontal: "4%",
      paddingTop: "10%",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#1a2635",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 10,
      height: 55,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      color: "#0361cd",
      fontWeight: "600",
    },
    input2: {
      flex: 1,
      marginLeft: 10,
      color: "gray",
      fontWeight: "400",
    },
    button: {
      backgroundColor: "#4285F4",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
      marginRight: 8,
      letterSpacing: 1,
      flex: 1,
    },
    icon: {},
    linkText: {
      color: "#f9f9fa",
      textAlign: "center",
      marginBottom: 16,
    },
    subContainer: {
      marginTop: "10%",
      marginVertical: 20,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: "#1a2635",
      marginHorizontal: 10,
    },
    text: {
      color: "gray",
      fontSize: 16,
      fontWeight: "400",
      marginHorizontal: 10,
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 26,
      gap: 8,
    },
    iconstyle: {
      padding: 6,
      borderWidth: 2,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      borderColor: "#1a2635",
      borderRadius: 6,
      backgroundColor: "#1a2635",
    },
    iconsocial: {
      marginHorizontal: 10,
    },
  });

  export default styles