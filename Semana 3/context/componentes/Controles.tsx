import { View, Text, FlatList, Switch, ScrollView,StyleSheet, TouchableOpacity ,Image,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'

export default function Controles() {

    const [swithOn, setSwitchOn] = useState(false);

    const item = [{
        id: 1,
        nombre: 'Elemento A'
    },
    {
        id: 2,
        nombre: 'Elemento B'
    },
    {
        id: 3,
        nombre: 'Elemento C'
    }]


    return (
        <ScrollView style={styles.container}>
            <Text>Controles</Text>

            <FlatList
                data={item}
                keyExtractor={ (item:any) => item.id.toString() }
                renderItem={ ({item}:any) => (
                    <Text>{item.nombre}</Text>
                )}
                horizontal={false}
                style={{ maxHeight: 80 }}
            >

            </FlatList>

             <FlatList
                data={item}
                keyExtractor={ (item:any) => item.id.toString() }
                renderItem={ ({item}:any) => (
                    <Text>{item.nombre}</Text>
                )}
                horizontal={false}
                style={{ maxHeight: 80 }}
            >

            </FlatList>
             <FlatList
                data={item}
                keyExtractor={ (item:any) => item.id.toString() }
                renderItem={ ({item}:any) => (
                    <Text>{item.nombre}</Text>
                )}
                horizontal={false}
                style={{ maxHeight: 80 }}
            >

            </FlatList>
             <FlatList
                data={item}
                keyExtractor={ (item:any) => item.id.toString() }
                renderItem={ ({item}:any) => (
                    <Text>{item.nombre}</Text>
                )}
                horizontal={false}
                style={{ maxHeight: 80 }}
            >

            </FlatList>
             <FlatList
                data={item}
                keyExtractor={ (item:any) => item.id.toString() }
                renderItem={ ({item}:any) => (
                    <Text>{item.nombre}</Text>
                )}
                horizontal={false}
                style={{ maxHeight: 80 }}
            >

            </FlatList>
      
            <TouchableOpacity style={styles.touch}>
                <Text>Presioname</Text>
            </TouchableOpacity>
           


            <Switch value={swithOn} onValueChange={(value) => setSwitchOn(value)}></Switch>

            <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={styles.image}></Image>

            
            <ActivityIndicator size="large" color="#0000ff" />
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        padding:20,
        flex:1
    },
    flatlisStyle:{
        maxHeight:80
    },
    touch:{
        marginTop:20,
        padding:10,
        backgroundColor:'blue',
        borderRadius:6,
        fontWeight:'bold',


    },
    image:{
        width:200,
        height:200
    }
})