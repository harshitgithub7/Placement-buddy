const LoginForm = () => {

  return (

    <form className="flex flex-col gap-4">

      <h2 className="text-2xl font-bold text-center">
        Login
      </h2>

      <input
        type="email"
        placeholder="University Email"
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />

      <button className="bg-blue-900 text-white p-2 rounded">
        Login
      </button>

    </form>
  )
}

export default LoginForm