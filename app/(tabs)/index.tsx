import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const listData = ["test", "test", "test"];

  return (
    <SafeAreaView className="flex-1 border-none bg-white">
      {/* header */}
      <View className="flex-row justify-between w-100 h-5 m-5 items-center">
        <Text className="text-xl font-bold color-green-500">book-app</Text>

        <TouchableOpacity className="bg-green-500 p-2 rounded-full">
          <FontAwesomeIcon icon={faSearch} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* scrollable list */}
      <View className="w-100 m-5">
        <Text className="text-lg">Section</Text>

        <FlatList
          horizontal
          data={listData}
          renderItem={({ item }) => <Text className="p-5">{item}</Text>}
          // keyExtractor={}
        />
      </View>
    </SafeAreaView>
  );
}
