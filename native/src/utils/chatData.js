import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export const emojiOptions = ["❤️", "🔥", "👍", "😂", "😮"];
export const chatData = [
  {
    id: 1,
    message: 'Hi, Let me know client agree or not continue the design',
    time: 'Mon, 6 Nov, 9:20 AM',
    sender: 'other',
  },
  { id: 2, message: 'I Agreed!', sender: 'me' },
  { id: 3, message: 'But we can do other design too.. 🔥🔥', sender: 'me' },
  { id: 4, message: 'Ok sure we can other designs 🤩🍀', sender: 'other' },
  { id: 5, message: 'Ok thanks I’m waiting ❤️❤️', sender: 'me' },
  {
    id: 6,
    message: 'Ok sure we can other designs 🤩🍀',
    time: 'Mon, 14 Nov, 9:20 AM',
    sender: 'other',
  },
  { id: 7, message: 'I Agreed!', sender: 'me' },
  { id: 8, message: 'But we can do other design too.. 🔥🔥', sender: 'me' },
  {
    id: 9,
    message: 'Hi, Let me know client agree or not continue the design',
    time: 'Mon, 14 Nov, 9:20 AM',
    sender: 'other',
  },
  {
    id: 10,
    message: 'Hi, Let me know client agree or not continue the design',
    sender: 'me',
  },
  {
    id: 11,
    message: 'Hi, Let me know client agree or not continue the design',
    time: 'Mon, 14 Nov, 9:20 AM',
    sender: 'other',
  },
  {
    id: 12,
    message: 'Hi, Let me know client agree or not continue the design',
    sender: 'me',
  },
];

export const menuItems = [
  {
    id: '1',
    icon: <Entypo name="image-inverted" size={28} color="#aaa" />,
    name: 'Gallery',
  },
  {
    id: '2',
    icon: <Icon name="file-text" size={28} color="#aaa" />,
    name: 'Files',
  },
  {
    id: '3',
    icon: <MaterialIcons name="location-on" size={28} color="#aaa" />,
    name: 'Location',
  },
  {
    id: '4',
    icon: <Icon name="users" size={28} color="#aaa" />,
    name: 'Contact',
  },
];
