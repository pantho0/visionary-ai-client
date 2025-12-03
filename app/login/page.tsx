const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen -mt-20"> {/* -mt-20 to visually center despite Navbar */}
      <div className="flex flex-col items-center p-8 sm:p-12 rounded-lg shadow-lg max-w-md w-full glass text-center">
        <h1 className="text-gradient mb-6 text-3xl sm:text-4xl font-bold">
          Welcome to Visionary<span className="text-primary">AI</span>
        </h1>
        <p className="text-light-100 mb-8 text-lg">
          Sign in to unleash your creativity and generate stunning AI-powered images.
        </p>

        {/* Google Login Button */}
        <button
          className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.24 10.29H12v3.71h5.35c-.17 1.16-.76 2.31-1.66 3.23l.03.03 2.65 2.59.05.05c1.74-1.6 2.76-3.95 2.76-6.62C21.18 8.04 17.58 4.7 12.24 4.7c-5.46 0-9.84 4.38-9.84 9.84s4.38 9.84 9.84 9.84c3.48 0 6.47-1.8 8.13-4.49l-2.67-2.61c-.69.8-1.57 1.34-2.48 1.34-1.89 0-3.41-1.52-3.41-3.41s1.52-3.41 3.41-3.41c1.02 0 1.95.48 2.57 1.25z"
              fill="#4285F4"
            />
            <path
              d="M4.68 14.54c0-1.27.32-2.47.88-3.53L1.57 8.35C.58 10.14 0 12.27 0 14.54c0 2.27.58 4.4 1.57 6.19l3.12-2.43c-.56-1.06-.88-2.26-.88-3.53z"
              fill="#34A853"
            />
            <path
              d="M12.24 4.7c1.86 0 3.52.64 4.84 1.69l2.76-2.71C17.9 3.06 15.28 1.9 12.24 1.9 8.27 1.9 4.8 3.97 3.1 7.2L6.22 9.63c.82-2.02 2.68-3.53 5.92-3.53z"
              fill="#FBBC04"
            />
            <path
              d="M21.18 14.54c0-1.16-.1-2.29-.3-3.37l-3.09-.02c.07.67.12 1.35.12 2.05 0 1.07-.15 2.09-.43 3.05l3.05 2.37c.2-.95.3-1.95.3-2.99z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
