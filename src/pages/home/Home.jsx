import Header from "src/components/header/Header"
import Root from "src/components/root/Root"
import Newsletter from "src/components/newsletter/Newsletter"
import Features from "src/components/landing/Features"
import PCarousel from "src/components/products-carousel/PCarousel"
import TCarousel from "src/components/testimonials/TCarousel"

// May remvoe
import ProductModel from "src/models/Product"
import ImageModel from "src/models/Image"
import ReviewModel from "src/models/Review"

export default function Home() {
  let img = new ImageModel("public/landing-slushies.png", "Landing view slushy showcase")
  const products = [new ProductModel("id1", "Tropical Tango Twist", "A zesty fusion of exotic fruit", new ImageModel("public/slushy-1.png", "A slushy"), 2.99, true), new ProductModel("id2", "Fizzy Peach Paradise", "Peach kissed with sparkling delight", new ImageModel("public/slushy-1.png", "A slushy"), 3.99, false)]
  const reviews = [new ReviewModel("id1", "Incredible product, I couldn't be happier with my purchase!", "Jessica Williams"), new ReviewModel("id2", "Amazing quality and superb customer service, highly recommend!", "Ryan Anderson"), new ReviewModel("id3", "Exceeded my expectations, a must-buy for anyone in need!", "Nick Abegg"), new ReviewModel("id1", "Incredible product, I couldn't be happier with my purchase!", "Jessica Williams"), new ReviewModel("id2", "Amazing quality and superb customer service, highly recommend!", "Ryan Anderson"), new ReviewModel("id3", "Exceeded my expectations, a must-buy for anyone in need!", "Nick Abegg")]

  return (
    <Root>
      <Header title="THE ULTIMATE SLUSHY EXPERIENCE" subtitle="Coolness in EVERY sip." img={ img } />
      <Features />
      <PCarousel products={ products } />
      <TCarousel reviews={ reviews } />
      <Newsletter />
    </Root>
  )
}