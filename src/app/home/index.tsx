import React, { useState } from 'react'
import { ActivityIndicator, Alert, Image, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import {MaterialIcons, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
export default function Home() {
    
    const apiKey = process.env.API_KEY;
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [nameCity, setNameCity] = useState('');
    const [humidity, setHumidity] = useState('');
    const [temp, setTemp] = useState(Number);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [wind, setWind] = useState('');

    const getClimaData = async (city:String) =>{
        
        if(!city){
            Alert.alert('Atenção', 'Preencha a cidade para prosseguir');
            return;
        }
        Keyboard.dismiss();
        setLoading(true);
        const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${apiKey}&lang=pt_br`;
        setCity('');
    
        const response = await fetch(apiClimaURL);
        const data = await response.json();
        setLoading(false);
        const pais = data.sys.country;
        const dataNameCity = data.name;
        const dataTemp = data.main.temp;
        const dataHumidity = data.main.humidity;
        const dataDescription = data.weather[0].description;
        const dataIcon = data.weather[0].icon;
        const tempInt = parseInt(dataTemp);
        const dataWind = data.wind.speed;
        if(!dataIcon && !pais){
            setCountry(`https://flagsapi.com/BR/flat/64.png`)
            setIcon(`https://openweathermap.org/img/wn/01n.png`)
        }
        setNameCity(dataNameCity);
        setCountry(`https://flagsapi.com/${pais}/flat/64.png`)
        setTemp(tempInt);
        setHumidity(dataHumidity);
        setDescription(dataDescription);
        setIcon(`https://openweathermap.org/img/wn/${dataIcon}.png`)
        setWind(dataWind);
    }

    
  return (
    <View style={styles.container}>
       
       <View style={styles.header}>
        <Text style={styles.textHeader}>WM - CLIMA APP</Text> 
        <MaterialCommunityIcons name="weather-partly-cloudy" size={35} color="#fff" />
       </View>

       <View style={styles.content}>

        <View style={styles.searchBox}>
            <TextInput 
                 onChangeText={setCity}
                value= {city}
                style={styles.input} 
                placeholder='Digite a cidade'
            />    
        
            <TouchableOpacity 
                
                onPress={()=>{
                    getClimaData(city)
                }}
                style={styles.searchButton}
            >
                {
                    loading ? (
                        <ActivityIndicator size="large" color="#93c5fd" />
                    ) : (
                        <MaterialIcons name="search" size={32} color="#93c5fd" />
                    )
                }
        
            </TouchableOpacity>
        </View>    

        <View style={styles.resContainer}>
            
            <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                {country && (
                        <>
                            <MaterialIcons name="location-pin" size={24} color="red" />
                            <Text style={styles.label}>{nameCity}</Text>
                            <Image 
                                source={{uri: country || 'https://flagsapi.com/BR/flat/64.png'}}
                                style={{width:35, height:35}}
                            />
                        </>
                    )
                }
            </View>
        
            <View>
                {
                    country &&(
                        <>
                            <Text 
                                style={
                                        {   
                                            fontSize:18, 
                                            marginTop:10, 
                                            fontWeight:'semibold'
                                        }
                                }>
                                {temp} ºC
                            </Text>
                        </>
                    )

                }
            </View>

            <View style={{flexDirection:'row', gap:10, alignItems:'center', marginTop:10, }}>
            {
                    country &&(
                        <>
                            <Text style={
                                          {
                                            fontSize:18, 
                                            fontWeight:'semibold'
                                          }
                                        }>
                                            {description.charAt(0).toUpperCase() + description.slice(1)}
                            </Text>
                            <Image 
                            source={{uri: icon || 'https://openweathermap.org/img/wn/01n.png'}}
                            style={{width:35, height:35}}
                        />
                        </>
                    )

                }
            </View>
            
            <View style={{flexDirection:'row', gap:5, alignItems:'center', marginTop:10,}} >
                {
                    country &&(
                        <>
                            <Feather name="droplet" size={22} color="black" />
                            <Text style={{fontSize:18}}>{humidity}%  | </Text>
                            <Feather name="wind" size={22} color="black" />
                            <Text style={{fontSize:18}}> {wind} km/h</Text>
                        </>
                    )
                }
            </View>

        </View>       


       </View>


    </View>
  )
}
