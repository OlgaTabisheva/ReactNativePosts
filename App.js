import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, Alert, RefreshControl, Text, View,TouchableOpacity} from 'react-native';
import {Post} from "./components/Post";
import axios from "axios";
import React, { useState} from 'react';
import {FlatList} from "react-native";



export default function App() {
   const [isLoading, setIsLoading] = useState(true)
  const [items,setItems] = useState();

   const fetchPosts = () => {
     setIsLoading(true);
     axios
       .get('https://633b271b471b8c39557d8047.mockapi.io/cards')
       .then(({data})=>{
         setItems(data);
       })
       .catch( err =>{
         console.log(err);
         Alert.alert('ошибка получения данных')
       }).finally(()=>{
       setIsLoading(false);
     });
   }
  React.useEffect(fetchPosts,[])
if (isLoading){
  return(
  <View style={{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
  }}>
    <ActivityIndicator size="large"/>
    <Text style={{ marginTop: 15}}>Идет загрузка...</Text>
  </View>
  );
}

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
      data={items}
      renderItem={({item})=>(
         <TouchableOpacity onPress={()=>alert('123')}>
           <Post
             title={item.title}
             createAt={item.createAt}
             imageUrl={item.imageURL}
           />
         </TouchableOpacity>

      )}
      />
      <StatusBar theme="auto"/>
    </View>
  );
}


