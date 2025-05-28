import BooksSectionItem from "@/components/BooksSectionItem";
import useFetch from "@/hooks/useFetch";
import { fetchBooks } from "@/services/api";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, error, refetch, reset } = useFetch(
    () => fetchBooks(searchQuery),
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <FlatList
          data={data?.docs}
          renderItem={({ item }) => (
            <BooksSectionItem
              title={item.title}
              cover_id={item.cover_i}
              authors_name={item.author_name}
            />
          )}
          keyExtractor={(item) => item.key}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
            gap: 15,
            marginVertical: 5,
          }}
          ListHeaderComponent={
            <View className="h-15 m-3 p-1 flex-row bg-slate-100 justify-between align-middle rounded">
              <TextInput
                className="w-[80%] h-full pt-3 pb-3 pl-3"
                placeholder="Search..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />

              {searchQuery !== "" ? (
                <TouchableOpacity className="p-3" onPress={clearSearchQuery}>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    color="#a0aec0"
                    size={18}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Search;
