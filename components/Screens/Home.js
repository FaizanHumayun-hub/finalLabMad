import { FlatList, View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { app } from "./firebase"
import { ref, onValue, getDatabase, set, update, push } from "firebase/database";
import { styles } from "../Styles/style";
import { Searchbar } from 'react-native-paper';
import { ShowCollege } from "../Reusable/ShowCollege";

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const Home = () => {
    

    const [college, setCollege] = useState([]);
    const [flag, setFlag] = useState(true);
    const [filteredCollege, setFilteredCollege] = useState([]); // State to hold the filtered data
    const [collegeData, setCollegeData] = useState([]); // State to store JSON data
    const [filterRating, setFilterRating] = useState(''); // State to store entered rating

    const [searchQuery, setSearchQuery] = useState('');

    
    const navigation = useNavigation();

    // Function to filter data based on search query
    const filterData = () => {
        if (searchQuery) {
            const filteredData = collegeData.filter((item) =>
                item.College_Name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredCollege(filteredData);
        } else {
            setFilteredCollege(college);
        }
    };

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        filterData();
    };

    const fetchData = async () => {
        try {
          // Fetch data from the JSON file
            const data = require('../College_data.json');
            const data2 = require('../College_data2.json');
            setCollege(data2);
            setCollegeData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    useEffect(() => {
        fetchData();
        filterData();
        const db = getDatabase(app);
        const dbRef = ref(db, 'College');


        //get Data
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = Object.values(data);
            const flagValue = dataArray.length > 0 ? dataArray[0].flag : false;
            setFlag(flagValue);
        //    setCollege(dataArray);
        });
        
        }, []);

        
        const handleTabular = () => { 
            //Update flag to false in firebase
            const db = getDatabase(app);
            var refData= 'College/' + 0;
            const dbRefUpdate = ref(db, refData);
            update(dbRefUpdate, {flag: false});
        
        };

        const handleFlatlist = () => {
            //Update flag to true in firebase
            const db = getDatabase(app);
            var refData= 'College/' + 0;
            const dbRefUpdate = ref(db, refData);
            update(dbRefUpdate, {flag: true});
        };

        const renderColleges = ({ item }) => (
            <View style={{flex: 1, padding: 20, borderWidth: 1, borderColor: "black", borderRadius: 30, backgroundColor: "#739072", marginTop: 10}}>
            <ShowCollege Title="College Name" name={item.College_Name} />
            <ShowCollege Title="State" name={item.State} />
            <ShowCollege Title="Stream" name={item.Stream} />
            <ShowCollege Title="UG Fee" name={item.UG_fee} />
            <ShowCollege Title="PG Fee" name={item.PG_fee} />
            <ShowCollege Title="Rating" name={item.Rating} />
            <ShowCollege Title="Academic" name={item.Academic} />
            <ShowCollege Title="Accommodation" name={item.Accommodation} />
            <ShowCollege Title="Faculty" name={item.Faculty} />
            <ShowCollege Title="Infrastructure" name={item.Infrastructure} />
            <ShowCollege Title="Placement" name={item.Placement} />
            <ShowCollege Title="Social Life" name={item.Social_Life} />
            </View>  
        );

        

         // Extracting keys (table headers) and values (table rows) from the data object
        const tableHead = [
            'College Name',
            'State',
            'Stream',
            'UG Fee',
            'PG Fee',
            'Rating',
            'Academic',
            'Accommodation',
            'Faculty',
            'Infrastructure',
            'Placement',
            'Social Life',
            ];
        const tableRows = college.map((item) => [
            item.College_Name,
            item.State,
            item.Stream,
            item.UG_fee,
            item.PG_fee,
            item.Rating,
            item.Academic,
            item.Accommodation,
            item.Faculty,
            item.Infrastructure,
            item.Placement,
            item.Social_Life,
            ]);
    return (
        <View style={{flex: 1, backgroundColor: "#D2E3C8"} }>
            <View style={{flex: 1, marginHorizontal: 10}} >
                <View style={{flex:0.1, marginTop: 10}}><Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                /></View>
            
            <View style={{flex: 0.8}}>
                
                <View style={{flex: 0.9}}>
                    {flag === true ? (
                <FlatList  
                data={college} 
                renderItem={renderColleges}
                keyExtractor={(item, index) => index.toString()} // Add a unique key extractor
                />
                ): 
                
                <ScrollView>
                <ScrollView horizontal>
                <View style={styles.container}>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9', borderRadius: 20 }}>
                        <Row data={tableHead} style={styles.head} textStyle={styles.headText}/>
                            {tableRows.map((rowData, index) => (
                        <Row
                            key={index}
                            data={rowData}
                            style={[styles.row, index % 2 && { backgroundColor: '#86A789' }]}
                            textStyle={styles.text}
                        />
                        ))}
                    </Table>
                    </View>
                </ScrollView>
                </ScrollView>
                }
                

                </View>
            </View>
            <View style={{flex: 0.08, flexDirection: "row", marginBottom: 10, marginHorizontal: 30}}>
                <TouchableOpacity style={[styles.slotBtn, {flex: 1}]} onPress={handleTabular}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold"}}> Tabular </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.slotBtn, {flex: 1}]} onPress={handleFlatlist}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold"}}> Flatlist </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

export { Home };