import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Style from "../Style/styles";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={Style.safe}>
      <ScrollView style={Style.container} contentContainerStyle={Style.content}>
        <View style={Style.titleRow}>
          <Text style={Style.title}>Smart Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <FontAwesome5 name="cog" size={26} color="#195f98" />
          </TouchableOpacity>
        </View>

        <View style={Style.temperatureCard}>
          <View style={Style.temperatureMain}>
            <FontAwesome5 name="temperature-high" size={35} color="#195f98" />
            <FontAwesome5 name="snowflake" size={15} color="#195f98" style={{ marginLeft: 4 }} />
          </View>
          <Text style={Style.temperature}>26°C</Text>
          <Text style={Style.room}>Living Room</Text>
        </View>

        <View style={Style.deviceGrid}>
          <TouchableOpacity style={Style.deviceButton}>
            <FontAwesome5 name="lightbulb" size={30} color="#195f98" />
            <Text style={Style.deviceTitle}>Light</Text>
            <Text style={Style.deviceStatus}>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.deviceButton}>
            <FontAwesome5 name="snowflake" size={30} color="#195f98" />
            <Text style={Style.deviceTitle}>AC</Text>
            <Text style={Style.deviceStatus}>24°C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.deviceButton}>
            <FontAwesome5 name="lock" size={30} color="#195f98" />
            <Text style={Style.deviceTitle}>Door</Text>
            <Text style={Style.deviceStatus}>LOCKED</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.deviceButton}>
            <FontAwesome5 name="camera" size={30} color="#195f98" />
            <Text style={Style.deviceTitle}>Camera</Text>
            <Text style={Style.deviceStatus}>ON</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Style.viewAll} onPress={() => navigation.navigate("Devices")}>
          <Text style={Style.viewAllText}>View All Devices →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}