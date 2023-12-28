import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    p : { 
        fontSize: 20,
    },
    bigtext: {
        fontSize: 22,
        fontWeight: '500',
        color: '#ffffff',
    },
    addInput: {
        backgroundColor: 'rgba(169, 169, 169, 0.2)',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        borderRadius: 15,
        paddingHorizontal: 5,
        fontSize: 18,
        fontWeight: '400',
        borderWidth: 2, // Add border width
        borderColor: '#50C878', // Border color
        },
        slotBtn: {
            flex:0.5,
            backgroundColor: '#50C878',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            margin:2
        },
        container: { 
            flex: 1, 
           // padding: 16, 
            paddingTop: 30, 
        },
        head: { 
            width: 2000,
            height: 70, 
            backgroundColor: '#808B97',
        },
        headText: { 
            margin: 6,
            color: "#ffffff",
            fontSize: 18,
            fontWeight: '500',
        },
        text: { 
            margin: 6 
        },
        row: {
            width: 2000,
            height: 70,
            backgroundColor: '#ffffff', // Background color for the rows
        //    flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc', // Border color for the bottom border of rows
        }
});

export {styles};