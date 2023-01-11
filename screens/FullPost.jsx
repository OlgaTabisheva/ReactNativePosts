import React from "react";
import styled from 'styled-components/native'
import {ActivityIndicator, Alert, Text, View} from "react-native";
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

const FullPost = () =>{
  const [bvgisLoading, setIsLoading] = useState(true)
  const [data,setData] = useState();

React.useEffect(()=>{
  setIsLoading(true);
  axios
    .get('https://633b271b471b8c39557d8047.mockapi.io/cards')
    .then(({data})=>{
      setData(data);
    })
    .catch( err =>{
      console.log(err);
      Alert.alert('ошибка получения')
    }).finally(()=>{
    setIsLoading(false);
  },[]);
})

  if (isLoading){
    return(
      <Loading/>
  );
  }


  return(
    <View style = {{padding: 20}}>
      <PostImage/>
      <PostText/>

    </View>
  )
}

export default FullPost