import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c1219',
    paddingBottom: 0,
  },
  bottomCon: {
    width: '100%',
    bottom: '0%',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#213041',
    paddingTop: 18,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#213041',
    paddingHorizontal: 6,
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconButton: {
    padding: 6,
  },
  input: {
    flex: 1,
    color: '#aaa',
    backgroundColor: '#0c1219',
    borderWidth: 1,
    borderColor: '#0c1219',
    borderRadius: 18,
    padding: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sendButton: {
    marginHorizontal: 4,
  },
  contentcontainer: {
    flex: 1,
    backgroundColor: '#0c1219',
  },
  chatContainer: {
    padding: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 6,
    borderRadius: 36,
    position: 'relative',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#333',
  },
  messageText: {
    color: '#fff',
    fontSize: 12,
  },
  timeText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
    marginVertical: 4,
  },
  reactionEmoji: {
    fontSize: 20,
    position: 'absolute',
    top: -20,
    right: 5,
  },

  tooltip: {
    position: 'absolute',
    bottom: '100%', // Position above the message
    padding: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 22,
  },
  tooltipLeft: {
    left: 10, // Adjusted position for left-aligned messages
    maxWidth: screenWidth * 0.8,
  },
  tooltipRight: {
    right: 10, // Adjusted position for right-aligned messages
    maxWidth: screenWidth * 0.8,
  },
  tooltipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emoji: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c1219',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 18,
    margin: 4,
    width: '77%',
  },
  input: {
    // flex: 1,
    paddingVertical: 2,
    paddingHorizontal: '14%', // Add padding to make space for icons
    color: '#fff',
    fontSize: 16,
  },
  iconButtonLeft: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  iconButtonRight: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
});

export default styles;
