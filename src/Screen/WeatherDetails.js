// LIBRARIES
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView} from 'react-native';

// Assets
import { Metrics, Color, Images, Font } from '../Assets';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class WeatherDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){
    
  }
  
  componentWillUnmount() {
    
  }

  render(){
    return(
    <View style={styles.container}>
      <SafeAreaView style={styles.headerConatiner}>
        <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
          <Image 
            source={Images.IcBackWhite}
          /> 
        </TouchableOpacity>
          <Text style={styles.headerText}>WeatherApp</Text>
      </SafeAreaView>
    </View>
    )
  }
}

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  headerConatiner: {
    flexDirection: 'row',
    backgroundColor: Color.AppColor,
    height: deviceHeight > 812 ? Metrics.CountScale(80) : Metrics.CountScale(60),
    alignItems: 'center',
  },
  backBtn: {
    marginLeft: Metrics.CountScale(20),
    flex: 0.5,
  },
  headerText: {
    fontSize: Metrics.CountScale(22),
    textAlign: 'center',
    color: Color.White,
  },
});