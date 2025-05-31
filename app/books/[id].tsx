import useFetch from "@/hooks/useFetch";
import { fetchBookDetails } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useFetch(() => fetchBookDetails(id));

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {isLoading ? (
          <ActivityIndicator
            className="flex-1 justify-center align-middle"
            size="large"
          />
        ) : error ? (
          <Text className="flex-1 text-center align-middle text-xl">
            {error.message}
          </Text>
        ) : data !== undefined && data !== null ? (
          <ScrollView>
            <View className="p-5 flex-row">
              <Image
                className="w-[120px] h-[200px] rounded"
                source={{
                  uri: `https://covers.openlibrary.org/b/id/${data?.covers[0].toString()}-M.jpg`,
                }}
                resizeMode="stretch"
              />

              <View className="w-[70%] p-5">
                <Text className="font-bold text-2xl">{data?.title}</Text>
                {data?.subtitle !== undefined && data?.subtitle !== null ? (
                  <Text>{data?.subtitle}</Text>
                ) : null}

                {data.authors !== undefined && data.authors !== null
                  ? data?.authors.map((author, i) => (
                      <Text className="color-slate-600 text-sm" key={i}>
                        {author.name}
                      </Text>
                    ))
                  : null}
              </View>
            </View>

            <View className="p-3">
              <Text className="text-xl color-primary">Subjects</Text>

              <View className="flex-row flex-wrap">
                {data.subjects !== undefined ? (
                  data.subjects.map((subject, i) => (
                    <Text
                      className="m-1 p-2 color-white bg-primary rounded-full"
                      key={i}
                    >
                      {subject}
                    </Text>
                  ))
                ) : (
                  <Text>No subjects defined</Text>
                )}
              </View>
            </View>

            <View className="p-3">
              <Text className="text-xl color-primary">Description</Text>

              {data?.description !== undefined ? (
                <Text>{data?.description.value}</Text>
              ) : (
                <Text>Book do not have description.</Text>
              )}
            </View>
          </ScrollView>
        ) : null}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BookDetails;
