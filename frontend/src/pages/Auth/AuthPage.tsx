import { useState } from "react"
import LoginForm from "../../components/auth/LoginForm"
import SignupForm from "../../components/auth/SignupForm"

const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (

    <div className="min-h-screen flex">

      <div className="w-1/2 bg-blue-900 text-white flex items-center justify-center">

        <h1 className="text-4xl font-bold">
          Placement Buddy
        </h1>

      </div>

      <div className="w-1/2 flex items-center justify-center">

        <div className="bg-white shadow-lg p-8 rounded-lg w-96">

          {isLogin ? <LoginForm /> : <SignupForm />}

          <div className="text-center mt-4">

            {isLogin ? (
              <button onClick={() => setIsLogin(false)}>
                Create account
              </button>
            ) : (
              <button onClick={() => setIsLogin(true)}>
                Already have account
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default AuthPage