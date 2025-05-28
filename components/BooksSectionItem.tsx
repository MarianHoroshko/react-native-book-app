import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, Text, TouchableOpacity, View } from "react-native";

type BooksSectionItemProps = {
  title: string;
  cover_id: number;
  authors?: Author[];
  authors_name?: string[];
  className?: string;
};

const BooksSectionItem = ({
  title,
  cover_id,
  authors,
  authors_name,
  className,
}: BooksSectionItemProps) => {
  return (
    <TouchableOpacity className={className}>
      {cover_id !== null && cover_id !== undefined ? (
        <Image
          source={{
            uri: `https://covers.openlibrary.org/b/id/${cover_id.toString()}-M.jpg`,
          }}
          className="w-[120px] h-[180px] rounded"
          resizeMode="cover"
        />
      ) : (
        <View className="w-[120px] h-[180px] justify-center items-center align-middle bg-slate-100 rounded">
          <FontAwesomeIcon icon={faBook} color="#475569" size={32} />
        </View>
      )}

      <Text className="font-bold" numberOfLines={1}>
        {title.length < 18 ? `${title}` : `${title.substring(0, 15)}...`}
      </Text>

      {authors !== undefined
        ? authors.map((author, i) => (
            <Text className="color-slate-600 text-sm" key={i}>
              {author.name.length < 18
                ? `${author.name}`
                : `${author.name.substring(0, 15)}...`}
            </Text>
          ))
        : null}

      {authors_name !== undefined
        ? authors_name.map((name, i) => (
            <Text className="color-slate-600 text-sm" key={i}>
              {name.length < 18 ? `${name}` : `${name.substring(0, 15)}...`}
            </Text>
          ))
        : null}
    </TouchableOpacity>
  );
};

export default BooksSectionItem;
