import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type TabBarIconProps = {
  isFocused: boolean;
  icon: IconDefinition;
};

const TabBarIcon = (props: TabBarIconProps) => {
  return (
    <>
      <FontAwesomeIcon
        icon={props.icon}
        size={18}
        color={props.isFocused ? "blue" : "black"}
      />
    </>
  );
};

export default TabBarIcon;
