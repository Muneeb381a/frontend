import "../../src/App.css";

const Signup = () => {
  return (
    <div className="flex bg-blue-950 w-full h-screen justify-center items-center">
      <div className="w-[800px] h-[600px] flex border-8 bg-white rounded-md">
        {/* Image Container */}
        <div className="relative w-1/2 flex items-center justify-center p-4">
          <img
            src="5165306.jpg"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 top-[-80%] flex items-center justify-center">
            <span className="text-orange-500 text-center text-3xl font-bold bg-opacity-50 p-4 rounded animated-border">
              Welcome Student Management System
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-1/2 p-4">
          <form className="space-y-4 h-full flex flex-col justify-center">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
