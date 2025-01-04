import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "./ui/toaster";
import Modal from "./Modal";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (productId) => {
    const { success, message } = await deleteProduct(productId);
    console.log("Success:", success);
    console.log("Message:", message);

    if (!success) {
      toaster.create({ description: message, type: "error" });
    } else {
      toaster.create({ description: message, type: "success" });
    }
  };

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
          {product.price}
        </Text>

        <HStack spaceX={4} zIndex={0}>
          <Modal product={product}/>

          <IconButton
            colorPalette={"red"}
            onClick={() => handleDeleteProduct(product._id)}
          >
            <DeleteIcon />
          </IconButton>
        </HStack>
      </Box>
      <Toaster />
    </Box>
  );
};

export default ProductCard;
