import BooksSectionItem from "@/components/BooksSectionItem";
import useFetch from "@/hooks/useFetch";
import { fetchBooksBySubject } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BooksBySubject = () => {
  const { subject } = useLocalSearchParams();

  const { data, isLoading, error } = useFetch(() =>
    fetchBooksBySubject(subject)
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Text className="p-3 text-3xl font-bold color-primary">
          Subject: {subject}
        </Text>

        <FlatList
          data={data?.works}
          renderItem={({ item }) => (
            <BooksSectionItem
              title={item.title}
              cover_id={item.cover_id}
              cover_edition_key={item.cover_edition_key}
            />
          )}
          keyExtractor={(item) => item.key}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
            gap: 15,
            marginVertical: 5,
          }}
        ></FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BooksBySubject;
