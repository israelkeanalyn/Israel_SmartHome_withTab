import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from "../Style/styles";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);

  return (
    <SafeAreaView style={Style.safe}>
    <View style={Style.settingsContainer}>
      <View style={Style.settingsHeader}>
        <TouchableOpacity onPress={() => router.replace("/")}>
          <FontAwesome5 name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>

        <Text style={Style.settingsHeaderTitle}>Settings</Text>
      </View>

      <View style={Style.settingsContent}>
        <Text style={Style.settingsTitle}>Settings</Text>

        <View style={Style.settingsRow}>
          <Text style={Style.settingsLabel}>Notifications</Text>

          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{
              false: "#ccc",
              true: "#195f98",
            }}
            thumbColor="#ffffff"
          />
        </View>

        <TouchableOpacity style={Style.settingsRow}>
          <Text style={Style.settingsLabel}>Temperature Unit</Text>

          <Text style={Style.settingsValue}>°C</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}
