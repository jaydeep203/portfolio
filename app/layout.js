import Header from "./header";
import Footer from "./footer";
import "../styles/app.scss";
import {ContextProvider} from "../components/ContextComp";


export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio App.'
}


 
export default function RootLayout({ children }) {
  
 return (
    <html lang="en">
      <body>
        
      
          <ContextProvider>
            <Header />
            {children}
            <Footer />
          </ContextProvider>
            
          
            
    
        
      </body>
    </html>
  )
}
