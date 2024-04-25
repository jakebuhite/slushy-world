import AboutInfo from "src/components/about/AboutInfo"
import Header from "src/components/header/Header"
import Hours from "src/components/hours/Hours"
import Root from "src/components/root/Root"
import ImageModel from "src/models/Image"

export default function About() {
  let img = new ImageModel("public/about-us.png", "Old picture of slushy world hq")
  
  return (
    <Root>
      <Header title="MAKING SLUSHIES IS OUR PASSION" subtitle="Every slushy is made with love." img={ img } />
      <AboutInfo />
      <Hours />
    </Root>
  )
}