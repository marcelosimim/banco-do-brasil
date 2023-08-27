import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/pages/Splash";
import MainStack from "./src/routes/stack.routes";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}