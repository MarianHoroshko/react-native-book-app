import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BooksSectionItem from "./BooksSectionItem";

const BookSection = (props: { listData: string[] }) => {
  return (
    <View className="w-100 h-100 m-5">
      <View className="flex-row justify-between">
        <Text className="pb-3 text-2xl">Section</Text>

        <TouchableOpacity>
          <Text className="text-primary font-bold">Show more</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={props.listData}
        renderItem={({ item }) => <BooksSectionItem item={item} />}
        // keyExtractor={}
      />
    </View>
  );
};

export default BookSection;
