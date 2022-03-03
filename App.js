import { View, Text } from "react-native";
import Example from "./components/Example";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>Universal React with Expo</Text>


    <Example name = "Kevin"></Example>
    <Example name = "Kelly"></Example>
  
    </View>
    
  );
}
