import { View, Text,Pressable,Image,StyleSheet,Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';
export default function MealItem({title, imageUrl, duration, complexity, id, affordability}) {
    const navigation = useNavigation();
    function selectMealItemHandler(){
        navigation.navigate("MealsDetails",{
            mealId:id,
        
        })
    }


    return (
        <View style={styles.mealItem}>
        <Pressable   android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>  (pressed ? styles.buttonPressed : null)}
        
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>       
            <View>
                <Image source={{uri:imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
           <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
            </View>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:"white",
      elevation:4,
      shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer:{
        borderRadius:8,
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:200,
    },
    title:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:20,
    margin:8,
    },
 details:{
    flexDirection:"row",
    alignItems:"center",
    padding:8,
    justifyContent:"center",

 },
 detailItem:{
    marginHorizontal:4,
    fontSize:12,

 },
 buttonPressed: {
    opacity: 0.5,
  },
 
})