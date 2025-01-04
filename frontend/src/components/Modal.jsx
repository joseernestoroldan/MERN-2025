import React from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { Button, IconButton, Input, VStack } from "@chakra-ui/react";
import { MdEdit as EditIcon } from "react-icons/md";
import { useProductStore } from "../store/product";
import { toaster } from "./ui/toaster";

const Modal = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { updateProduct } = useProductStore();

  const handleUpdateProduct = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    setOpen(false);
    if (!success) {
      toaster.create({ description: message, type: "error" });
    } else {
      toaster.create({
        description: "Product updated successfully",
        type: "success",
      });
    }
  };

  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogTrigger asChild>
        <IconButton colorPalette={"orange"}>
          <EditIcon />
        </IconButton>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle
            bgGradient="to-r"
            gradientFrom={"orange.500"}
            gradientTo={"red"}
            bgClip="text"
          >
            Update Product
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <VStack spaceY={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Product Price"
              name="price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              name="image"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
            />
          </VStack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
          >
            Update
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default Modal;
