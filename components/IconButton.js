import { Pressable ,StyleSheet} from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function IconButton ({icon, color, onPress}){
return <Pressable onPress={onPress}
style={({pressed})=>pressed?styles.pressed:null}>
   <EvilIcons name={icon} size={24} color={color} />
</Pressable>
}

const styles = StyleSheet.create({
pressed:{
    opacity:0.7
}

}
)