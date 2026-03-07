const SignupForm = () => {

  return (

    <form className="flex flex-col gap-4">

      <h2 className="text-2xl font-bold text-center">
        Sign Up
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 rounded"
      />

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

      <select className="border p-2 rounded">

        <option>Student</option>
        <option>TPO</option>
        <option>Professor</option>
        <option>Alumni</option>

      </select>

      <button className="bg-green-600 text-white p-2 rounded">
        Create Account
      </button>

    </form>
  )
}

export default SignupForm