import TabBarIcon from "@/components/TabBarIcon";
import {
  faBookmark,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";

const tabScreenOptions: BottomTabNavigationOptions = {
  tabBarIconStyle: { color: "#052e14" },
  tabBarActiveTintColor: "#00bcff",
};

const _Layout = () => {
  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon isFocused={focused} icon={faHome} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon isFocused={focused} icon={faSearch} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon isFocused={focused} icon={faBookmark} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
