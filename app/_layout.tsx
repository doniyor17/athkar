import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="zikr/[id]"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="zikrTypes/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(modal)/playAthkar"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};

export default RootLayout;
