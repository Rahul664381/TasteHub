// import React, { useState, useEffect } from "react";
// import "../pagesLogi/Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   // Captcha state
//   const [captcha, setCaptcha] = useState("");
//   const [userCaptcha, setUserCaptcha] = useState("");
//   const [isHovered, setIsHovered] = useState(false);

//   // Generate random 6-character captcha with mixed case letters and numbers
//   const generateCaptcha = () => {
//     const characters =
//       "Arahuladmds324n442n2n12n3nhjb4jojbgu5563i22383bdj23y2BCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
//     let result = "";
//     for (let i = 0; i < 6; i++) {
//       result += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     setCaptcha(result);
//   };

//   useEffect(() => {
//     generateCaptcha();
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     // Simulate API call
//     setTimeout(() => {
//       if (userCaptcha !== captcha) {
//         setError("Captcha does not match!");
//         generateCaptcha();
//       } else if (email === "user@TasteHub.com" && password === "1234") {
//         alert("Login Successful!");
//         setEmail("");
//         setPassword("");
//         setUserCaptcha("");
//         if (rememberMe) {
//           console.log("Remember me was checked");
//         }
//         generateCaptcha();
//       } else {
//         setError("Invalid email or password. Try: user@TasteHub.com / 1234");
//         generateCaptcha();
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-5 py-20 animate-gradient-x">
//       <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 transition-all duration-300 hover:shadow-2xl">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-indigo-700 mb-2 animate-pulse">
//             🍴 TasteHub
//           </h1>
//           <p className="text-gray-600 transition-colors duration-300 hover:text-indigo-600">
//             Sign in to access your account
//           </p>
//         </div>

//         {error && (
//           <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 flex items-start animate-shake">
//             <svg
//               className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>{error}</span>
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
//               Email
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg
//                   className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-indigo-600"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//               </div>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 hover:border-indigo-400 group"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg
//                   className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-indigo-600"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10 transition-all duration-300 hover:border-indigo-400 group"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-colors duration-300 hover:text-indigo-600"
//               >
//                 {showPassword ? (
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Captcha */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
//               Captcha
//             </label>
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Enter captcha"
//                 value={userCaptcha}
//                 onChange={(e) => setUserCaptcha(e.target.value)}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 hover:border-indigo-400"
//                 required
//               />
//               <div
//                 className="relative"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <span className="px-3 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg font-bold select-none transition-all duration-300 hover:from-indigo-200 hover:to-purple-200 hover:shadow-md flex items-center justify-center min-w-[100px] border border-indigo-200">
//                   {captcha.split("").map((char, index) => (
//                     <span
//                       key={index}
//                       className="inline-block transition-all duration-300"
//                       style={{
//                         transform: isHovered
//                           ? `rotate(${Math.random() * 10 - 5}deg) translateY(${
//                               Math.random() * 5 - 2.5
//                             }px)`
//                           : "none",
//                         color: `hsl(${index * 60}, 70%, 40%)`,
//                       }}
//                     >
//                       {char}
//                     </span>
//                   ))}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={generateCaptcha}
//                   className="absolute -top-2 -right-2 bg-indigo-600 text-white p-1 rounded-full text-xs transition-all duration-300 hover:bg-indigo-700 hover:scale-110 hover:rotate-12 shadow-md"
//                   title="Refresh Captcha"
//                 >
//                   <svg
//                     className="w-3 h-3"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-indigo-600">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors duration-300"
//               />
//               Remember Me
//             </label>
//             <a
//               href="#"
//               className="text-indigo-600 transition-all duration-300 hover:text-indigo-800 hover:underline font-medium"
//             >
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
//               isLoading
//                 ? "bg-indigo-400 cursor-not-allowed"
//                 : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
//             }`}
//           >
//             {isLoading ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Logging in...
//               </>
//             ) : (
//               "Login"
//             )}
//           </button>
//         </form>

//         {/* Divider & Social Login */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 border-t border-gray-300 transition-colors duration-300 group-hover:border-indigo-300"></div>
//           <div className="px-3 text-gray-500 font-medium text-sm transition-colors duration-300 group-hover:text-indigo-500">
//             OR
//           </div>
//           <div className="flex-1 border-t border-gray-300 transition-colors duration-300 group-hover:border-indigo-300"></div>
//         </div>
//         <div className="flex flex-col gap-3">
//           <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:border-indigo-300 hover:shadow-sm hover:transform hover:-translate-y-0.5 font-medium text-gray-700">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7clD9gpSirL42-jCe3O3DVvOCjajx25Dk9hZEMIT__OhOWHHZOc-5ID1Ioxijkae4qx0&usqp=CAU"
//               alt="Google"
//               className="w-5 h-5 transition-transform duration-300 hover:scale-110"
//             />
//             Continue with Google
//           </button>
//           <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:border-indigo-300 hover:shadow-sm hover:transform hover:-translate-y-0.5 font-medium text-gray-700">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/042/127/158/non_2x/round-blue-facebook-logo-with-white-thick-border-and-long-shadow-on-a-transparent-background-free-png.png"
//               alt="Facebook"
//               className="w-5 h-5 transition-transform duration-300 hover:scale-110"
//             />
//             Continue with Facebook
//           </button>
//         </div>

//         {/* Register */}
//         <div className="text-center mt-8 pt-5 border-t border-gray-200 transition-colors duration-300 hover:border-indigo-200">
//           <p className="text-gray-600 transition-colors duration-300 hover:text-indigo-700">
//             Don't have an account?{" "}
//             <a
//               href="#"
//               className="text-indigo-600 transition-all duration-300 hover:text-indigo-800 hover:underline font-semibold"
//             >
//               Create account
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "../pagesLogi/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Captcha state
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Check if user data exists in localStorage on component mount
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      setEmail(userData.email || "");
      setFullName(userData.fullName || "");
      setRememberMe(true);
    }
    generateCaptcha();
  }, []);

  // Generate random 6-character captcha with mixed case letters and numbers
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(result);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (userCaptcha !== captcha) {
        setError("Captcha does not match!");
        generateCaptcha();
      } else if (email === "user@TasteHub.com" && password === "1234") {
        // Save user data to localStorage
        const userData = {
          email: email,
          fullName: fullName || "User",
          rememberMe: rememberMe,
          loginTime: new Date().toISOString(),
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Login Successful!");
        setEmail("");
        setPassword("");
        setUserCaptcha("");
        if (rememberMe) {
          console.log("Remember me was checked - data saved to localStorage");
        }
        generateCaptcha();
      } else {
        setError("Invalid email or password. Try: user@TasteHub.com / 1234");
        generateCaptcha();
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate registration API call
    setTimeout(() => {
      if (userCaptcha !== captcha) {
        setError("Captcha does not match!");
        generateCaptcha();
      } else if (!fullName) {
        setError("Please enter your full name");
        generateCaptcha();
      } else {
        // Save user data to localStorage
        const userData = {
          email: email,
          fullName: fullName,
          rememberMe: rememberMe,
          registrationTime: new Date().toISOString(),
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem(
          "registeredUsers",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("registeredUsers") || "[]"),
            userData,
          ])
        );

        alert("Registration Successful!");
        setEmail("");
        setPassword("");
        setFullName("");
        setUserCaptcha("");
        setIsRegistering(false);

        if (rememberMe) {
          console.log("Remember me was checked - data saved to localStorage");
        }
        generateCaptcha();
      }
      setIsLoading(false);
    }, 1000);
  };

  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
    setError("");
    setEmail("");
    setPassword("");
    setFullName("");
    setUserCaptcha("");
    generateCaptcha();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-5 py-20 animate-gradient-x">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2 animate-pulse">
            🍴 TasteHub
          </h1>
          <p className="text-gray-600 transition-colors duration-300 hover:text-indigo-600">
            {isRegistering
              ? "Create your account"
              : "Sign in to access your account"}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 flex items-start animate-shake">
            <svg
              className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="space-y-5"
        >
          {/* Full Name (only for registration) */}
          {isRegistering && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 hover:border-indigo-400 group"
                  required={isRegistering}
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
              Email *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 hover:border-indigo-400 group"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
              Password *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10 transition-all duration-300 hover:border-indigo-400 group"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-colors duration-300 hover:text-indigo-600"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Captcha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 hover:text-indigo-600">
              Captcha *
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter captcha"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 hover:border-indigo-400"
                required
              />
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="px-3 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg font-bold select-none transition-all duration-300 hover:from-indigo-200 hover:to-purple-200 hover:shadow-md flex items-center justify-center min-w-[100px] border border-indigo-200">
                  {captcha.split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block transition-all duration-300"
                      style={{
                        transform: isHovered
                          ? `rotate(${Math.random() * 10 - 5}deg) translateY(${
                              Math.random() * 5 - 2.5
                            }px)`
                          : "none",
                        color: `hsl(${index * 60}, 70%, 40%)`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="absolute -top-2 -right-2 bg-indigo-600 text-white p-1 rounded-full text-xs transition-all duration-300 hover:bg-indigo-700 hover:scale-110 hover:rotate-12 shadow-md"
                  title="Refresh Captcha"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-indigo-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors duration-300"
              />
              Remember Me
            </label>
            <a
              href="#"
              className="text-indigo-600 transition-all duration-300 hover:text-indigo-800 hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
              isLoading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {isRegistering ? "Registering..." : "Logging in..."}
              </>
            ) : isRegistering ? (
              "Register"
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Divider & Social Login */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300 transition-colors duration-300 group-hover:border-indigo-300"></div>
          <div className="px-3 text-gray-500 font-medium text-sm transition-colors duration-300 group-hover:text-indigo-500">
            OR
          </div>
          <div className="flex-1 border-t border-gray-300 transition-colors duration-300 group-hover:border-indigo-300"></div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:border-indigo-300 hover:shadow-sm hover:transform hover:-translate-y-0.5 font-medium text-gray-700">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7clD9gpSirL42-jCe3O3DVvOCjajx25Dk9hZEMIT__OhOWHHZOc-5ID1Ioxijkae4qx0&usqp=CAU"
              alt="Google"
              className="w-5 h-5 transition-transform duration-300 hover:scale-110"
            />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:border-indigo-300 hover:shadow-sm hover:transform hover:-translate-y-0.5 font-medium text-gray-700">
            <img
              src="https://static.vecteezy.com/system/resources/previews/042/127/158/non_2x/round-blue-facebook-logo-with-white-thick-border-and-long-shadow-on-a-transparent-background-free-png.png"
              alt="Facebook"
              className="w-5 h-5 transition-transform duration-300 hover:scale-110"
            />
            Continue with Facebook
          </button>
        </div>

        {/* Register/Login Toggle */}
        <div className="text-center mt-8 pt-5 border-t border-gray-200 transition-colors duration-300 hover:border-indigo-200">
          <p className="text-gray-600 transition-colors duration-300 hover:text-indigo-700">
            {isRegistering
              ? "Already have an account? "
              : "Don't have an account? "}
            <button
              onClick={toggleAuthMode}
              className="text-indigo-600 transition-all duration-300 hover:text-indigo-800 hover:underline font-semibold"
            >
              {isRegistering ? "Sign in" : "Create account"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
