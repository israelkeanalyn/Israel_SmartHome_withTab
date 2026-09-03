import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Style from "../Style/styles";

export default function DevicesScreen() {
  return (
    <View style={Style.settingsContainer}>

      <View style={Style.settingsHeader}>
        <TouchableOpacity onPress={() => router.replace("/")}>
          <FontAwesome5 name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>

        <Text style={Style.settingsHeaderTitle}>Settings</Text>
      </View>

      <View style={Style.settingsContent}>
        <Text style={Style.settingsTitle}>My Devices</Text>

        <TouchableOpacity
          style={Style.deviceCard}
          onPress={() => console.log("Light pressed")}
          activeOpacity={0.7}
        >
          <View>
            <Text style={Style.deviceName}>Light</Text>

            <Text style={Style.deviceRoom}>Living Room</Text>
          </View>

          <Text style={Style.deviceStatus}>ON</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.deviceCard}
          onPress={() => console.log("Air Conditioner pressed")}
          activeOpacity={0.7}
        >
          <View>
            <Text style={Style.deviceName}>Air Conditioner</Text>

            <Text style={Style.deviceRoom}>Living Room</Text>
          </View>

          <Text style={Style.deviceStatus}>24°C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
