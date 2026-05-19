import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom"

import { useState } from "react"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

import { auth } from "./firebase"

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>GOTCHA</h1>

        <h2 className="hero-text">
          Test Your Luck. Match The Right Card. Win Big.
        </h2>

        <p>Welcome to the Image Match Game</p>

        <div className="buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)

      alert("Login Successful")

      navigate("/")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)

      alert("Account Created Successfully")

      navigate("/login")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Create Account</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App