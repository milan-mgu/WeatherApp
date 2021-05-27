// LIBRARIES
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


// Assets
import { Metrics, Color, Images, Font } from '../Assets';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class WeatherDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData: {},
      Latitude: '',
      Longitude: '',
      LATITUDE_DELTA: 0.0091,
      LONGITUDE_DELTA :  0.0091
    }
  }

  componentDidMount(){
    const { route } = this.props;
    const { weatherDetails } = route.params;
    this.setState({ 
      weatherData: weatherDetails,
      Latitude: weatherDetails != undefined && weatherDetails != '' ? weatherDetails.coord.lat : '',
      Longitude: weatherDetails != undefined && weatherDetails != '' ? weatherDetails.coord.lon : ''
    });
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
      {
        this.state.Latitude != '' && this.state.longitude != '' &&
        <MapView
          initialRegion={{
            latitude: Number(this.state.Latitude),
            longitude: Number(this.state.Longitude),
            latitudeDelta: this.state.LATITUDE_DELTA,
            longitudeDelta: this.state.LONGITUDE_DELTA,
          }}
          style={{
            height: deviceHeight > 812 ? Metrics.CountScale(450) : Metrics.CountScale(350),
            width: '100%',
          }}
        >
          <Marker 
            coordinate={{ latitude: Number(this.state.Latitude), longitude: Number(this.state.Longitude), }} 
            pinColor={Color.Red} 
          />
        </MapView>
      }
      {
        this.state.weatherData != undefined && Object.keys(this.state.weatherData).length > 0 &&
        <View style={styles.bottomContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.TitleText}>{this.state.weatherData.name}</Text>
            <Text style={styles.labelText}>{this.state.weatherData.weather[0].main}</Text>
            <Text style={styles.labelText}>Humidity: {this.state.weatherData.main.humidity}</Text>
            <Text style={styles.labelText}>Wind Speed: {this.state.weatherData.wind.speed}</Text>
            <Text style={styles.labelText}>Max. Temp.: {this.state.weatherData.main.temp_max}°C</Text>
            <Text style={styles.labelText}>Min.Temp.: {this.state.weatherData.main.temp_min}°C</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.TempText}>{this.state.weatherData.main.temp}°C</Text>
            <Image
              source={Images.IcCloud}
              style={styles.cloudImg}
            />
          </View>
        </View>
      }
      
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
  bottomContainer:{
    marginHorizontal: Metrics.CountScale(20),
    marginTop: Metrics.CountScale(20),
    flexDirection: 'row'
  },
  leftContainer: {
    width: '50%',
  },
  rightContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TempText: {
    fontSize: Metrics.CountScale(30),
    fontFamily: Font.RobotoRegular
  },
  TitleText: {
    fontSize: Metrics.CountScale(22),
    fontFamily: Font.RobotoRegular,
    fontWeight: 'bold',
    marginVertical: Metrics.CountScale(10),
  },
  labelText: {
    fontSize: Metrics.CountScale(18),
    fontFamily: Font.RobotoRegular,
    marginBottom: Metrics.CountScale(10),
  },
  cloudImg: {
    height: Metrics.CountScale(60),
    width: Metrics.CountScale(130),
    marginTop: Metrics.CountScale(5)
  }
});