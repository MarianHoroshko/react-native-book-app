import TabBarIcon from "@/components/TabBarIcon";
import { faBookmark, faHome } from "@fortawesome/free-solid-svg-icons";
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
