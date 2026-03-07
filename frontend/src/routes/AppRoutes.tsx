import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "../pages/Auth/AuthPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<AuthPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes