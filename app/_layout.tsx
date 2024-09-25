import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
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
