import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';
export default function MealsList({items}){
    function renderMealItem(itemData){
    
        const item = itemData.item;
        const mealItemProps = {
            id:item.id,
            title:itemData.item.title,
            imageUrl:itemData.item.imageUrl,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
            duration:itemData.item.duration,
        }
        return <MealItem {...mealItemProps}
        />
    }
    return (
        <View>
            <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            />
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})