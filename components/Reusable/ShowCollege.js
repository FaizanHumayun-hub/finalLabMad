import { Text, View} from "react-native";

const ShowCollege = ({Title, name}) => {
    return (
        <View style={{flex: 0.2, flexDirection: "row"}}>
        <Text style={{fontSize: 18, fontWeight: "bold"}}>{Title}: </Text>
        <Text style={{fontSize: 18, flexShrink: 1, flexWrap: 'wrap'}}>{name}</Text>
        </View>
    );
};

export {ShowCollege};