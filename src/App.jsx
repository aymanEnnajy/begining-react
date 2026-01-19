import { useState } from 'react'
import Box from "@mui/material/Box";

import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import FeaturesSection  from './component/Description.jsx'
//import { Students } from './outils/students.jsx'
import MultiActionAreaCard from './outils/Cards.jsx'
import EnhancedTable from './outils/students.jsx'
import RecipeReviewCard from './component/Testing.jsx'
import IntroDivider from './component/Cards2.jsx'
import HeroSection from "./component/Heros.jsx";
import StatsSection from "./component/Props.jsx";
import InfoSection from "./component/Test.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Header/>
      <HeroSection/>
    <FeaturesSection/>
       <Box
  sx={{
    display: "flex",
    gap: 3,
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap", // responsive
  }}
>
  
  <MultiActionAreaCard />
  <RecipeReviewCard />
  <IntroDivider/>
</Box>
    <EnhancedTable/>
    {/*<Students/>*/}
 <StatsSection/>
<InfoSection
        title="About Us"
        description="We build modern, fast and secure web applications"
                age="30" role="Developer" name="John Doe"

      />

    

    <div style={{height:'100px'}}></div>
    <Footer/>
    </>
  )
}

export default App
