
import axios from "axios";
import React, { useState} from 'react';
import {StatusBar, View} from "react-native";
import {Home} from "./screens/Home";



export default function App() {



  return (
    <View>
      <Home/>

      <StatusBar theme="auto"/>
    </View>
  );
}


