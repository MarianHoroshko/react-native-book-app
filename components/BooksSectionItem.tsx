import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity, View } from "react-native";

const BooksSectionItem = (props: { item: string }) => {
  return (
    <TouchableOpacity className="pr-3">
      <View className="w-30 h-50 items-center align-middle bg-slate-100 rounded">
        <FontAwesomeIcon
          icon={faBook}
          color="#475569"
          size={32}
          style={{ marginHorizontal: 50, marginVertical: 100 }}
        />
      </View>

      <Text>{props.item}</Text>
    </TouchableOpacity>
  );
};

export default BooksSectionItem;
