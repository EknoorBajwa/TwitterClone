import {View, Text, Image, StyleSheet, TouchableWithoutFeedbackProperties} from 'react-native';

import { TweetType } from '@/types';

type TweetProps = {
    tweet: TweetType;
};

const Tweet = ({tweet}: TweetProps) => {
    return (
        <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage}/>

      <View style={styles.mainContainer}>
      <Text style={styles.name}>
        {tweet.user.name}
        </Text>
      <Text style = {styles.content}>{tweet.content}</Text>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'lightgrey',
      backgroundColor: 'white',
    },
    userImage:{
      width: 50,
      height:50,
      borderRadius: 50,
    },
    mainContainer: {
      marginLeft:10,
      flex: 1,
    },
    name: {
      fontWeight: '600',
    },
    content: {
      lineHeight: 20,
      margin: 5,
    },
});

export default Tweet;