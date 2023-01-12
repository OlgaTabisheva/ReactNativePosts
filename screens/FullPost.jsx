import React from "react";
import styled from 'styled-components/native'
import { Alert, View} from "react-native";
import axios from "axios";
import {Loading} from "../components/Loading";

const PostImage = styled.Image`
border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ route, navigation }) =>{
  const [isLoading, setIsLoading] = React.useState(true)
  const [data,setData] = React.useState();
  const {id, title } = route.params;

React.useEffect(()=>{
  navigation.setOptions({
    title,
  });
  axios
    .get('https://633b271b471b8c39557d8047.mockapi.io/cards/' + id)
    .then(({data})=>{
      setData(data);
    })
    .catch( err =>{
      console.log(err);
      Alert.alert('ошибка получения')
    })
    .finally(()=>{
    setIsLoading(false);
    })
  },[]);


  if (isLoading){
    return(
      <Loading/>
  );
  }


  return(
    <View style = {{ padding: 20}}>
      <PostImage source={{ uri: data.imageURL }}/>
      <PostText>
        {data.text}
      </PostText>

    </View>
  )
}

