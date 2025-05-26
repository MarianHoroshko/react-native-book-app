import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, Text, TouchableOpacity, View } from "react-native";

type BooksSectionItemProps = {
  title: string;
  cover_id: number;
};

const BooksSectionItem = ({ title, cover_id }: BooksSectionItemProps) => {
  return (
    <TouchableOpacity className="pr-3">
      {cover_id !== null ? (
        <Image
          source={{
            uri: `https://covers.openlibrary.org/b/id/${cover_id.toString()}-M.jpg`,
          }}
          className="w-[150px] h-[250px] rounded"
          resizeMode="cover"
        />
      ) : (
        <View className="w-[150px] h-[250px] justify-center items-center align-middle bg-slate-100 rounded">
          <FontAwesomeIcon icon={faBook} color="#475569" size={32} />
        </View>
      )}

      <Text numberOfLines={1}>
        {title.length < 20 ? `${title}` : `${title.substring(0, 17)}...`}
      </Text>
    </TouchableOpacity>
  );
};

export default BooksSectionItem;
