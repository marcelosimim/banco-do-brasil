import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login';
import Splash from '../pages/Splash';


const { Screen, Navigator } = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Navigator initialRouteName="Splash" 
      screenOptions={ { headerShown: false } }
    >
      <Screen name="Login" component={Login} />
      <Screen name='Splash' component={Splash} />
    </Navigator>
  );
}