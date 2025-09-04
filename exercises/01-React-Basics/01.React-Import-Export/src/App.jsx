{/* You can name the import whatever you want because it’s a default export. */}
import Default from "./Components/Default-Export"
{/* Here in Named export the name must match the exported component */}
import {Header, Footer} from "./Components/Named-Export"
{/* Mix Import it is the mixuture of Default and named export */}
import Anchor,{ Paragraph } from "./Components/Mix-Export"
{/* Multiple Import: it has multiple components exported together */}
import {Img, Br, Hr} from "./Components/Mulitple-Export"  

function App(){
  return (
  <>
    <Default/>
    <Header/>
    <Img/>
    <Paragraph/>
    <Br/>
    <Anchor/>
    <Hr/>
    <Footer/>
  </>
  )
}

export default App