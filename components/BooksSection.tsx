import useFetch from "@/hooks/useFetch";
import { fetchBooksBySubject } from "@/services/api";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BooksSectionItem from "./BooksSectionItem";

const BookSection = (props: { subject: string }) => {
  const { data, isLoading, error } = useFetch(() =>
    fetchBooksBySubject(props.subject)
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error.message}</Text>
      ) : data !== null ? (
        <View className="w-100 h-100 m-5">
          <View className="flex-row justify-between">
            <Text className="pb-3 text-2xl color-primary">
              Books about: {props.subject}
            </Text>

            <TouchableOpacity
              onPress={() => router.navigate(`/list/${props.subject}`)}
            >
              <Text className="text-primary font-bold">Show more</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={data.works}
            renderItem={({ item }) => (
              <BooksSectionItem
                title={item.title}
                cover_id={item.cover_id}
                authors={item.authors}
                cover_edition_key={item.cover_edition_key}
                className="pr-3"
              />
            )}
            keyExtractor={({ key }) => key}
          />
        </View>
      ) : null}
    </>
  );
};

export default BookSection;
