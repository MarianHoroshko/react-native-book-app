import useFetch from "@/hooks/useFetch";
import { fetchBookDetails } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BookDetails = () => {
  const { id } = useLocalSearchParams();

  console.log(id);

  const { data, isLoading, error } = useFetch(() => fetchBookDetails(id));

  console.log(data);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Book page</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BookDetails;
