import { View } from "react-native";
import Test from "@/components/HelloWorld";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Test/>
    </View>
  );
}
