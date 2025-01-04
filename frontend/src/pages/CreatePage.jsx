import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "../components/ui/toaster";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);

    if (!success) {
      toaster.create({ description: message, type: "error" });
    } else {
      toaster.create({ description: message, type: "success" });
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
    }
  };

  return (
    <Container maxW={"1140px"} px={4}>
      <VStack spaceY={8}>
        <Heading
          as={"h1"}
          fontSize={{ base: "30", sm: "4xl" }}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r"
          gradientFrom={"orange.500"}
          gradientTo={"red"}
          bgClip="text"
          mt={8}
        >
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("gray.100", "gray.900")}
          px={12}
          py={12}
          shadow={"md"}
          rounded={"lg"}
        >
          <VStack spaceY={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorScheme="blue" w={"full"} onClick={handleAddProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
      <Toaster />
    </Container>
  );
};

export default CreatePage;
