import React, { useState } from "react";

import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { Text, Divider, Icon, TextInput } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import { useAppTheme } from "@/app/_layout";
import axios from "axios";
interface Product {
  _id?: string;
  quantity: number;
  name: string;
  description?: string;
  unit: string;
  vendor?: string;
  sku?: string;
  idProduct?: string;
}
interface StepThreeFormProps {
  setProducts: (product: Product) => void;
}

export default function StepThreeForm({ setProducts }: StepThreeFormProps) {
  const [product, setProduct] = useState();
  const [items, setItems] = useState([
    {
      label: "",
      value: "",
      info: {
        _id: "",
        quantity: 0,
        name: "",
        unit: "",
      },
    },
  ]);
  const [quantity, setQuantity] = useState("0");
  const styles = useGlobalStyles();

  const {
    colors: { ...colors },
  } = useAppTheme();

  const getProducts = () => {
    axios
      .get("http://localhost:3000/products/active")
      .then((response) => {
        const products = response.data.products.map((product: Product) => ({
          label: product.name,
          value: product._id,
          info: product,
        }));
        setItems(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const handleSelect = (e: any) => {
    setProduct(e);
    const productToUpdate = items.find((item) => item.value === e);
    if (productToUpdate) {
      const productInfo = productToUpdate.info as Product;
      setProducts({
        description: productInfo.description,
        name: productInfo.name,
        unit: productInfo.unit,
        idProduct: productInfo._id,
        sku: productInfo.sku,
        vendor: productInfo.vendor,
        quantity: parseInt(quantity),
      });
    }
  };

  const handleQuantity = (e: string) => {
    setQuantity(e);

    const productToUpdate: any = items.find((item) => item.value === product);

    if (productToUpdate) {
      setProducts({
        ...productToUpdate.info,
        quantity: parseInt(e),
      });
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View>
        <Text style={styles.title}>Programa un nuevo envío</Text>
        <Divider style={styles.divider} />
      </View>
      <View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Icon source="office-building" size={24} color="black" />
          <Text style={styles.subtitle}>Origen</Text>
        </View>
        <Text style={styles.text}>Selecciona los productos a enviar.</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 270, marginRight: 10 }}>
          <Dropdown
            hideMenuHeader={false}
            label="Producto"
            placeholder="Selecciona un producto"
            options={items}
            value={product}
            onSelect={handleSelect}
          />
        </View>
        <View style={{ width: 250 }}>
          <TextInput
            mode="outlined"
            outlineColor={colors.brandSecondaryDark2}
            outlineStyle={{ borderRadius: 10 }}
            style={{ backgroundColor: "#f2f2f2", width: "45%" }}
            placeholder="Cantidad"
            onChangeText={handleQuantity}
            value={quantity}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
}
