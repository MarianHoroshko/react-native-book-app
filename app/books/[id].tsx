import useFetch from "@/hooks/useFetch";
import { fetchBookDetails } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BookDetails = () => {
  const { id } = useLocalSearchParams();

  // console.log(id);

  const { data, isLoading, error } = useFetch(() => fetchBookDetails(id));

  // console.log(data);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {isLoading ? (
            <ActivityIndicator
              className="flex-1 justify-center align-middle"
              size="large"
            />
          ) : error ? (
            <Text>{error.message}</Text>
          ) : data !== undefined && data !== null ? (
            <>
              <View className="p-5 flex-row">
                <Image
                  className="w-[100px] h-[200px] rounded"
                  source={{
                    uri: `https://covers.openlibrary.org/b/id/${data?.covers[0].toString()}-M.jpg`,
                  }}
                  resizeMode="cover"
                />

                <View className="p-5">
                  <Text className=" text-2xl font-bold">{data?.title}</Text>
                  <Text className="color-slate-600">{data?.subtitle}</Text>

                  {/* TODO: display authors */}
                  {/* {data?.authors.map((author, i) => (
              <Text key={i}>{author.name}</Text>
            ))} */}
                </View>
              </View>

              <View className="p-3">
                <Text className="text-xl">Subjects</Text>

                <View className="flex-row flex-wrap">
                  {data.subjects !== undefined ? (
                    data.subjects.map((subject, i) => (
                      <Text
                        className="p-1 m-1 color-white bg-slate-600 rounded"
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
                <Text className="text-xl">Description</Text>

                {data?.description !== undefined ? (
                  <Text>{data?.description.value}</Text>
                ) : (
                  <Text>Book do not have description.</Text>
                )}
              </View>
            </>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BookDetails;
