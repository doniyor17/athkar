import { Text, FlatList } from "react-native";

import AppGradient from "@/components/AppGradient";
import BackButton from "@/components/BackButton";

import Colors from "@/constants/Colors";

const PlayAthkarModal = () => {
  return (
    <AppGradient colors={[Colors.greeny, Colors.primary]}>
      <BackButton />
      <FlatList
        className="pt-3 mt-3"
        data={[1, 2, 3, 4]}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Text className="text-4xl font-semibold text-white mb-2">
            {item + " ."} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iure explicabo in, incidunt velit corrupti error, nesciunt non
            reiciendis iusto animi minus debitis fugit alias quas nihil eius
            rem, minima ducimus repellat blanditiis laboriosam. Iste ea qui
            recusandae. Labore, aspernatur deserunt repellendus aliquid ea sint
            unde incidunt necessitatibus, pariatur consequuntur laboriosam
            aperiam quos exercitationem minus facilis omnis? Suscipit culpa
            quaerat nam cupiditate facilis eaque nemo excepturi officia adipisci
            nostrum ipsam iusto illo aperiam aliquam nihil vitae quas voluptatem
            quasi consectetur, ducimus voluptas! Saepe quidem harum natus
            numquam animi eum repudiandae, assumenda minima perferendis vitae
            facere, reiciendis voluptatem fugiat. Deleniti, consequuntur
            sapiente.
          </Text>
        )}
      />
    </AppGradient>
  );
};

export default PlayAthkarModal;
