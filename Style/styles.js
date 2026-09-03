import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    height: 58,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
  },

  settings: {
    fontSize: 32,
  },

  temperatureCard: {
    height: 290,
    borderWidth: 1,
    borderColor: "#222222",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  temperatureIcon: {
    fontSize: 45,
    marginBottom: 10,
  },

  temperature: {
    fontSize: 44,
    fontWeight: "900",
  },

  room: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: 5,
  },

  deviceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  deviceButton: {
    width: "48%",
    height: 96,
    borderWidth: 1,
    borderColor: "#222222",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  deviceIcon: {
    fontSize: 28,
    marginBottom: 3,
  },

  deviceTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  deviceStatus: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },

  viewAll: {
    alignItems: "center",
    marginTop: 20,
    paddingTop: 50,
  },

  viewAllText: {
    fontSize: 16,
    fontWeight: "800",
  },

  temperatureMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  snowflake: {
    position: "absolute",
    right: -3,
    top: 2,
  },

  settingsContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  settingsHeader: {
    height: 58,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },

  settingsHeaderTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginLeft: 10,
  },

  settingsContent: {
    padding: 20,
  },

  settingsTitle: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 45,
  },

  settingsRow: {
    minHeight: 55,
    borderBottomWidth: 1,
    borderBottomColor: "#888888",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  settingsLabel: {
    fontSize: 17,
    fontWeight: "700",
  },

  settingsValue: {
    fontSize: 16,
    fontWeight: "700",
  },

  deviceCard: {
    height: 85,
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  deviceName: {
    fontSize: 17,
    fontWeight: "900",
  },

  deviceRoom: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 3,
  },

  deviceStats: {
    fontSize: 14,
    fontWeight: "800",
  },
});

export default styles;
