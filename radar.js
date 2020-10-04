//import Radar from 'react-native-radar';
import * as Location from 'expo-location';

export const AskPermission = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      location = await Location.getCurrentPositionAsync({}); //need this location to become global variable (see line 40)
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>text</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const currentLocation = Location.getCurrentPositionAsync();
/*
function showMap (currentLocation, results) {
    let region = {
                latitude: currentLocation.location[1],
                longitude: currentLocation.location[2],
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            };
    
    onRegionChange(region) {
        this.setState({ region });
    }
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      provider={PROVIDER_GOOGLE}
      customMapStyle={MapStyle}
    >
      {this.state.results.map(result => (
        <Marker
          coordinate={result.latlng}
          title={result.places}
          //description={result.description} //if we can extract the details somewhere
        />
      ))}
    </MapView>
};

function search(target) {
    Radar.searchPlaces({
        near: {
            latitude: location.latitude,
            longitude: location.longitude
        },
    radius: 1000,
    chains: [target],
    limit: 20
    }).then((result) => {
        return (result)
    // do something with result.places
    }).catch((err) => {
        console.warn(err)
    });
}
*/