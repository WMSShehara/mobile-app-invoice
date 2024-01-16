import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function Invoice(
    {recieverName, amount,date, referenceNumber}
) {
    const invoiceImage = require('./images/invoice.png');
    const backgroundImage = require('./images/circle.png');
    const logo = require('./images/XIOT.png');
    
    return (
        <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={{width: 150, height: 150, position: 'absolute', top:-70, left:-80}}/>
                <ImageBackground source={backgroundImage} style={{width: 150, height: 150, position: 'absolute', top:590, left:250}}/>
                <Text style={[styles.text2,{fontSize:20}]}>Invoice</Text>
                <Image source={invoiceImage} style={styles.image1}/>
                <Text style={styles.text2}>{recieverName}</Text>
                <Text style={styles.text1}>Paid</Text>
                <Text style={styles.text3}>{amount} </Text>
                
                <View style={styles.horizontalLine} />
              <View style={{paddingTop:20}}>
                    <View style={styles.billingContainer}>
                        <View style={[styles.companydetails, { paddingLeft:15 }]} >
                            <Text style={styles.text2}>Starting Time</Text>
                        </View>
                        <View style={[styles.billingdetails, { paddingLeft:80 }]} >
                            <Text style={styles.text2}>12.05pm</Text>
                        </View>
                    </View>
                    <View style={styles.billingContainer}>
                        <View style={[styles.companydetails, { paddingLeft:15 }]} >
                            <Text style={styles.text2}>Ending Time</Text>
                        </View>
                        <View style={[styles.billingdetails, { paddingLeft:80 }]} >
                            <Text style={styles.text2}>14.15pm</Text>
                        </View>
                    </View>
                    <View style={styles.billingContainer}>
                        <View style={[styles.companydetails, { paddingLeft:15 }]} >
                            <Text style={styles.text2}>Duration</Text>
                        </View>
                        <View style={[styles.billingdetails, { paddingLeft:120 }]} >
                            <Text style={styles.text2}>2 hours</Text>
                        </View>
                    </View>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', paddingTop:20 }}>
                    <Text>
                        <Text style={styles.text1}>Transaction done on</Text>
                        <Text style={styles.text2}> {date}.</Text>
                    </Text>
                    <Text>
                        <Text style={styles.text1}> your reference number is </Text>
                        <Text style={styles.text2}>{referenceNumber}</Text>
                    </Text>
                </View> 
                
                <View style={[styles.companyContainer, {paddingTop:20}]}>
                    <Image source={logo} style={styles.logo}/>
                    <View style={[styles.companydetails, { paddingLeft:15 }]} >
                        <Text style={styles.text2}>SmartParking</Text>
                    </View>
                </View>
                <LinearGradient
                    colors={['#e96716','#7db2b2']}
                    style={styles.linearGradient}
                    start={{x: 0.45, y: 0}} 
                    // end={{x: 0.5, y: 1}}  
                >
                    <TouchableOpacity onPress={() => console.log('ok')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
        </View>
    );
 
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column', 
        width: '85%',
        height: '80%',
        borderRadius: 10,
        marginTop: 50,
        paddingTop: 50,
        paddingBottom: 40,
        overflow: 'hidden',
    },
    image1: {
        width: 100,
        height: 100,
    }
    ,
    text1: {
        color: '#c2c2c2',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text2: {
        color: '#7B7B7B',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text3: {
        color: '#406C6C',
        fontSize: 30,
        fontWeight: 'bold',
    },
    logo: {
        width: 60,
        height: 22,
    },
    companyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    companydetails: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    horizontalLine: {
        borderBottomColor: '#c2c2c2',
        borderBottomWidth: 0.5,
        width: '90%'
    },
  
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    linearGradient: {
        alignItems: 'center',
        padding: 13,
        borderRadius: 40,
        width: '90%',
        marginTop: 20,
    },
    billingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    billingdetails: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

});