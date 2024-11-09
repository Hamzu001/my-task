import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      paddingBottom: 14,
      paddingHorizontal: 10,
      backgroundColor: '#213041',
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      borderWidth: 0,
      // borderBottomRightRadius: 10,
      // borderBottomLeftRadius: 10,
    },
    backBtn: {
      borderWidth: 1,
      padding: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
      backgroundColor: '#14293F',
      borderColor: '#14293F',
    },
    subContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      paddingBottom: 1,
      letterSpacing: 1,
    },
    subtitle: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#0273F7',
      letterSpacing: 1,
    },
  });