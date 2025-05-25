import BooksSection from "@/components/BooksSection";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const listData = ["test", "test", "test"];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* header */}
          <View className="flex-row justify-between w-100 h-10 m-5 align-middle">
            <Text className="text-3xl font-bold text-primary">book-app</Text>

            <TouchableOpacity className="p-2 bg-emerald-200 border border-emerald-300 rounded-full">
              <FontAwesomeIcon icon={faSearch} color="#166533" />
            </TouchableOpacity>
          </View>

          {/* scrollable lists */}
          <BooksSection listData={listData} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
