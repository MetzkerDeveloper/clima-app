
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius:10,
    },
    header:{
     width:'100%',
     height: '20%',
     marginTop: -5,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     gap:15,
     backgroundColor: '#3b82f6',
     borderRadius:15,
     shadowColor: "#000000",
     shadowOffset: {
        width: 0,
        height: 5,
     },
     shadowOpacity:  0.18,
     shadowRadius: 4.59,
     elevation: 12
    },
    textHeader:{
        fontSize: 25,
        color: '#fff',
        fontWeight:'bold',
    },
    content:{
        width:'100%',
        height: '100%',
        backgroundColor: '#fafafa',
    },
    searchBox:{
        width:'100%',
        marginTop:15,
        paddingHorizontal:15,
        flexDirection:'row',
        //backgroundColor: '#3b82f6',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    label:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#fff'
    },
    input:{
        width:'80%',
        height:50,
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#93c5fd'
    },
    searchButton:{
        padding:8,
        borderRadius:5,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#93c5fd'
    },
    resContainer:{
        justifyContent:'center',
        backgroundColor: '#629bf7',
        width:'90%',
        height: 200,
        marginTop:100,
        marginHorizontal:20,
        alignItems: 'center',
        borderRadius:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 12
    }
  });
  