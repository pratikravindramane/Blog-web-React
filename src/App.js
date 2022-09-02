import './App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { auth } from './firebase-config';
import {signOut} from 'firebase/auth'

function App() {
  const [isAuth, setIsAuth]=useState(localStorage.getItem('isAuth'))
  const navigate=useNavigate()
  // const loggedIn=localStorage.getItem('isAuth')
  // console.log(loggedIn)
  // useEffect(()=>{
  //   if(loggedIn){
  //     setIsAuth(true)
  //   }
  // },[loggedIn])
  const signUserOut=()=>{
    // localStorage.removeItem('login')
    // setIsAuth(false)
    // navigate('/')
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      
      {!isAuth ? <Link to='/login'>Login</Link>: 
      <>
      <Link to='/create'>Create</Link>
      <button onClick={signUserOut}>Logout</button>
      </>}
      
    </nav>
   <Routes>
    <Route path='/' element={<Home isAuth={isAuth}/>}/>
    <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
    <Route path='/create' element={<CreatePost isAuth={isAuth}/>}/>
   </Routes>       
   </>
  );
}

export default App;
