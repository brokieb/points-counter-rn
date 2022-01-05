import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
import { Header } from "nativeapp/components/layout/header";
import { Footer } from "nativeapp/components/layout/footer";

const MainLayout = (props) => {
  return (
    <View
      style={{
        paddingTop: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        borderWidth: 1,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header />
      {/* //header - main */}
      <ScrollView
        style={styles.mainContent}
        refreshControl={<RefreshControl />}
      >
        {props.children}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { backgroundColor: "green", width: "100%", padding: 20 },
  mainContent: { width: "100%", paddingHorizontal: 20 },
  footer: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    width: "100%",
  },
  formContainerInput: {
    paddingRight: 50,
    borderBottomWidth: 2,
    borderColor: "green",
    flex: 1,
  },
  formContainerButtonContainer: { paddingHorizontal: 5 },
  listItem: { padding: 5, marginVertical: 5, backgroundColor: "orange" },
});

export { MainLayout };
