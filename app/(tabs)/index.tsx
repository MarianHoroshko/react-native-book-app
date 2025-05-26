import BookSection from "@/components/BooksSection";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* header */}
          <View className="w-100 h-10 m-5 flex-row justify-between align-middle">
            <Text className="text-3xl font-bold color-primary">book-app</Text>

            <TouchableOpacity className="p-2.5 align-middle justify-center bg-emerald-200 border border-emerald-300 rounded-full ">
              <FontAwesomeIcon icon={faSearch} color="#166533" />
            </TouchableOpacity>
          </View>

          {/* scrollable lists */}
          <BookSection subject="IT" />

          <BookSection subject="Philosophy" />

          <BookSection subject="Biology" />

          <BookSection subject="Fiction" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
