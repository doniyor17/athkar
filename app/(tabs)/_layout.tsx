import { Tabs } from "expo-router";

import { MaterialIcons, Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="mosque"
              size={24}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="athkar"
        options={{
          tabBarLabel: "Athkar",
          tabBarIcon: ({ color }) => (
            <Entypo
              name="list"
              size={24}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
