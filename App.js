import { View, Text } from "react-native";
import Example from "./components/Example";

export default function App() {
  return (
    <View
      style={{
        //flex: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>Universal React with Expo</Text>

    
    <Example style = {{flex:2}}
      name="Kevin"
      question ="why am i so cool?"
      desc= "coder dude"
      status="Waiting"
      time="4 minutes left"
      privateBool="true"
      >
    </Example>
    <Example style = {{flex:1}} name="Kelly" desc= "coder gal"></Example>
  
    </View>
    
    
  );
}
