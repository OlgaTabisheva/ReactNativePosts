import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./Home";
import {FullPost} from "./FullPost";
import {NavigationContainer} from "@react-navigation/native";


const Stack=  createNativeStackNavigator();

export const Navigation  = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:'Коты'}}/>
        <Stack.Screen name="FullPost" component={FullPost} options={{title:'статья'}}/>
      </Stack.Navigator>

    </NavigationContainer>

  )
}