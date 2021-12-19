
import React from 'react';
import { Route, Routes } from 'react-router'; 
import './App.css';
import {AboutKyrgyzstan,AboutUs,Blog, ContactUs,Footer,Gallery,Header,Home, ImportantToKnow, Tour, Tours } from './components';
// import {useSelector, useDispatch} from 'react-redux'
// import {fetchTopPlaces} from './redux/actions/topPlaces'
// import {setTours} from './redux/actions/tours';
// import {setInfo} from './redux/actions/info'


function App() {

  return (
    <div className="App">
     <Header/>
   <Routes>
     <Route  path= "/home" element ={ <Home /> }/>
     <Route  exact path ="/aboutKyrgyzstan" element={<AboutKyrgyzstan/>}/>
     <Route  exact path ="/gallery" element={<Gallery/>}/>
     <Route  exact path ="/importantToKnow"  element={<ImportantToKnow/>}/>
     <Route  exact path ="/tours"  element={<Tours/>}/>
     <Route exact path="/tours/:id" element={<Tour/>} />
     <Route  exact path ="/blog"  element={<Blog />}/>
     <Route  exact path ="/aboutUs"  element={<AboutUs/>}/>
     <Route  exact path ="/contactUs"  element={<ContactUs/>}/>
     <Route>404 not Found!</Route>
   </Routes>
   <Footer/>  
    
 </div>
  )
}

export default App;








