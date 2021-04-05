import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from '@expo/vector-icons/AntDesign';
import Footer from '@Components/Footer';

const MainAttendee = (props) => {
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const pushAccount = () => props.navigation.navigate('ViewAccount_Attendee');
  return (
    <View style={styles.contentContainer}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Bold',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        Attendee Main Page
      </Text>

      <View style={styles.api}></View>

      <View style={styles.buttonContainer}>
        <Button style={styles.smallButton} title="RSVP to an event" />
      </View>

      <Footer pushAccount={pushAccount} />
    </View>
  );

  // return (
  //   <View style={styles.contentContainer}>
  //     <Text
  //       style={{
  //         fontSize: 20,
  //         fontFamily: 'Bold',
  //         alignSelf: 'center',
  //         marginTop: 50,
  //       }}>
  //       Attendee Sign In
  //     </Text>

  //     <View style={styles.api}></View>

  //     <View style={styles.buttonContainer}>
  //       <Button style={styles.smallButton} title="RSVP to an event" />
  //     </View>

  //     <Footer />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff7d5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  api: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
  },

  buttonContainer: {
    justifyContent: 'space-evenly',
    height: '30%',
  },
  smallButton: {},
  icon: {
    marginRight: 15,
  },
});

export default MainAttendee;
