// LIBRARIES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions, Alert, ActivityIndicator, SafeAreaView} from 'react-native';

// Assets
import { Metrics, Color, Images, Font } from '../Assets';
import { getCityRequest } from '../Redux/Actions/WeatherActions';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class CityList extends Component {
  constructor(props){
    super(props);
    this.state = {
        cityLoader: false,
        cityList: [],
    }
  }

  componentDidMount(){
    this.setState({ cityLoader: true });
    this.props.getCityRequest({ 
        'lat': '23.68',
        'lon': '90.35',
        'cnt': 50,
        'appid': '53341a919d71a53cc2e660268cc9fc11',
        'units': 'metric',
    });
  }
  
  async componentDidUpdate(prevProps){
    if (this.props.Weather && this.props.Weather != prevProps.Weather && this.props.Weather.getCitySuccess && this.state.cityLoader) {
        if(this.props.Weather.cityData.cod == 200){
            this.setState({
                cityList: this.props.Weather.cityData.list,
                cityLoader: false,
            })
        } else {
            Alert.alert(
                "",
                this.props.Weather.cityData.message,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => this.setState({ cityLoader: false}) }
                ]
            );
        }
    } else if(this.props.Weather && this.props.Weather.getCityFailed && this.state.cityLoader){
        Alert.alert(
            "",
            "Something went wrong!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => this.setState({ cityLoader: false}) }
            ]
        );
    }
  }

  _renderItem = ({ item, index }) => {
      return(
        <TouchableOpacity 
            style={[styles.seprator, { marginTop: index == 0 ? Metrics.CountScale(10) : 0 }]}
            onPress={() => this.props.navigation.navigate('WeatherDetail')}
        >
            <View style={styles.leftContainer}>
                <Text style={styles.TitleText}>{item.name}</Text>
                <Text style={styles.weatherText}>{item.weather[0].main}</Text>
            </View>
            <View  style={styles.rightContainer}>
                <Text style={styles.TempText}>{item.main.temp}°C</Text>
            </View>
        </TouchableOpacity>
      )
  };

  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.headerConatiner}>
            <Text style={styles.headerText}>WeatherApp</Text>
        </SafeAreaView>
        {
            this.state.cityList.length > 0 &&
            <FlatList 
                data={this.state.cityList}
                renderItem={this._renderItem}
                extraData={this.state}
                keyExtractor={(item, index) => item._id}
            />
        }
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={Color.AppColor} 
            style={{ justifyContent: 'center', alignSelf: 'center'}}  animating={this.state.cityLoader} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        Weather: state.Weather,
    };
}

// export default CityList;
export default connect(mapStateToProps, { getCityRequest })(CityList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White
  },
  headerConatiner: {
    backgroundColor: Color.AppColor,
    height: deviceHeight > 812 ? Metrics.CountScale(80) : Metrics.CountScale(60),
    justifyContent: 'center'
  },
  headerText: {
    fontSize: Metrics.CountScale(22),
    textAlign: 'center',
    color: Color.White,
  },
  seprator: {
    borderBottomColor: Color.BorderColor,
    borderBottomWidth: 1,
    marginBottom: Metrics.CountScale(5),
    flexDirection: 'row'
  },
  leftContainer:{
    flex: 1,
    marginHorizontal: Metrics.CountScale(20),
    marginVertical: Metrics.CountScale(5),
  },
  rightContainer: {
    justifyContent: 'center',
    marginHorizontal: Metrics.CountScale(20)
  },
  TitleText: {
    fontSize: Metrics.CountScale(18),
    marginBottom: Metrics.CountScale(5),
  },
  TempText: {
    fontSize: Metrics.CountScale(30),
    alignSelf: 'flex-end',
  },
  weatherText: {
    fontSize: Metrics.CountScale(16),
    marginBottom: Metrics.CountScale(10),
  }
});