import TabBarIcon from "@/components/TabBarIcon";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs>
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
    </Tabs>
  );
};

export default _Layout;
