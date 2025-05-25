import BooksSection from "@/components/BooksSetion";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const listData = ["test", "test", "test"];

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View className="flex-col bg-white">
            {/* header */}
            <View className="flex-row justify-between w-100 h-10 m-5 items-center">
              <Text className="text-3xl font-bold text-primary">book-app</Text>

              <TouchableOpacity className="p-2 bg-emerald-200 border border-emerald-300 rounded-full">
                <FontAwesomeIcon icon={faSearch} color="#166533" />
              </TouchableOpacity>
            </View>

            {/* scrollable list */}
            <View className="w-100 h-100 m-5">
              <Text className="pb-3 text-2xl">Section</Text>

              <FlatList
                horizontal
                data={listData}
                renderItem={({ item }) => <BooksSection item={item} />}
                // keyExtractor={}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
