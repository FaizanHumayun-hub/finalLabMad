import { Text, TextInput, View} from "react-native";
import {styles } from "../Styles/style";

const ProductInput = ({Title, onChangeTitle, lines, max, value}) => {
    return (
        <View style={{flex: 1, marginBottom: 30}}>
                    <Text style={styles.bigtext}>{Title}</Text>
                    <TextInput style={styles.addInput}
                    numberOfLines={lines}
                    maxLength={max}
                    onChangeText={onChangeTitle}
                    value={value}
                    textAlignVertical="top"
                    multiline={true}
                    />
                </View>
    );
};

export {ProductInput};