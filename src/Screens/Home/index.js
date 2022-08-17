import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  screenHeight,
  screenWidth,
  colors,
  fonts,
} from "../../Constants/constants";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const data = [
    {
      id: 1,
      name: "Brasil",
    },
    {
      id: 2,
      name: "Argentina",
    },
    {
      id: 3,
      name: "Bolivia",
    },
    {
      id: 4,
      name: "Chile",
    },
    {
      id: 5,
      name: "Colombia",
    },
    {
      id: 6,
      name: "Costa Rica",
    },
  ];

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      const response = {
        uf,
        city,
      };
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/icon.png")}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite a UF"
            onChangeText={(text) => setUf(text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite a cidade"
            onChangeText={(text) => setCity(text)}
          />
        </View>
        <ScrollView horizontal={true}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={item.id}
                onPress={() => setCountry(item.id)}
              >
                <Text style={styles.textItem}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Buscar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: screenWidth,
    height: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  form: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: screenWidth * 0.8,
    fontSize: 32,
    color: "#322153",
  },
  description: {
    width: screenWidth * 0.8,
    color: "#6C6C80",
    fontSize: 16,
  },
  input: {
    marginTop: 20,
    width: screenWidth * 0.8,
    height: 32,
    backgroundColor: "#FFF",
  },
  inputText: {
    fontSize: 16,
  },
  item: {
    marginTop: 32,
    marginLeft: screenWidth * 0.1,
    marginRight: screenWidth * 0.1,
    height: 32,
  },
  textItem: {
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    backgroundColor: "#34CB79",
    width: screenWidth * 0.8,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
  },
});
