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
              <Text className="text-xl font-bold color-green-500">
                book-app
              </Text>

              <TouchableOpacity className="bg-green-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faSearch} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* scrollable list */}
            <View className="w-100 h-100 m-5">
              <Text className="text-lg">Section</Text>

              <FlatList
                horizontal
                data={listData}
                renderItem={({ item }) => <BooksSection item={item} />}
                // keyExtractor={}
              />
            </View>

            <View className="w-100 h-100 m-5">
              <Text className="text-lg">Section</Text>

              <FlatList
                horizontal
                data={listData}
                renderItem={({ item }) => <BooksSection item={item} />}
                // keyExtractor={}
              />
            </View>

            <View className="w-100 h-100 m-5">
              <Text className="text-lg">Section</Text>

              <FlatList
                horizontal
                data={listData}
                renderItem={({ item }) => <BooksSection item={item} />}
                // keyExtractor={}
              />
            </View>

            <View className="w-100 h-100 m-5">
              <Text className="text-lg">Section</Text>

              <FlatList
                horizontal
                data={listData}
                renderItem={({ item }) => <BooksSection item={item} />}
                // keyExtractor={}
              />
            </View>

            <View className="w-100 h-100 m-5">
              <Text className="text-lg">Section</Text>

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
