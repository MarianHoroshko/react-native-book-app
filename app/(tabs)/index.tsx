import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl">Edit app/index.tsx to edit this screen.</Text>
      <FontAwesomeIcon icon={faMugSaucer} />
    </View>
  );
}
