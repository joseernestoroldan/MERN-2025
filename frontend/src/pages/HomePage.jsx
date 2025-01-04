import { Container, Text, VStack, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";


const HomePage = () => {
  const { fetchProducts, products } = useProductStore();


  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products:", products);

  return (
    <Box w={"full"} h={"vh"} position={"relative"}>
      <Container marginY={8}>
        <VStack spaceY={8}>
          <Text
            fontSize={{ base: "30", sm: "4xl" }}
            fontWeight="bold"
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r"
            gradientFrom={"orange.500"}
            gradientTo={"red"}
            bgClip="text"
          >
            Current Products
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w={"full"} gap={"20"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>

          {products.length === 0 && (
            <Text
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"gray.500"}
            >
              No products found 😔
              <Link to={"/create"}>
                <Text
                  as={"span"}
                  color={"blue.500"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Create One.
                </Text>
              </Link>
            </Text>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default HomePage;
