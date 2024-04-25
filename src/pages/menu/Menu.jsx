import Header from "src/components/header/Header"
import Root from "src/components/root/Root"
import ProductsGrid from "src/components/products/ProductsGrid"

// May remove
import ProductModel from "src/models/Product"
import ImageModel from "src/models/Image"

export default function Menu() {
  const products = [new ProductModel("id1", "Tropical Tango Twist", "A zesty fusion of exotic fruit", new ImageModel("src/assets/slushy-1.png", "A slushy"), 2.99, true), new ProductModel("id2", "Fizzy Peach Paradise", "Peach kissed with sparkling delight", new ImageModel("src/assets/slushy-1.png", "A slushy"), 3.99, false)]

  return (
    <Root>
      <Header title="FULL MENU" subtitle="Enter the magical kingdom of SlushyWorld." />
      <ProductsGrid products={ products } />
    </Root>
  )
}