import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHourglassHalf,
  FaUtensils,
  FaUser,
  FaEnvelope,
  FaCalendarDay,
  FaClock,
  FaUsers,
  FaConciergeBell,
  FaEdit,
  FaChevronDown,
  FaCheck,
  FaExclamationCircle,
  FaInfoCircle,
  FaGift,
  FaGlassCheers,
  FaBirthdayCake,
  FaCheckCircle,
} from "react-icons/fa";
import { IoRestaurant, IoTime, IoLocation, IoCall } from "react-icons/io5";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;

    const todayStr = `${yyyy}-${mm}-${dd}`;
    setMinDate(todayStr);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setShowSuccessModal(true);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
      specialRequests: "",
    });
  };

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-40 md:py-16 px-4 sm:px-5">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      </div>

      <div className="text-center mb-10 md:mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 blur opacity-30 rounded-lg"></div>
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-800 mb-4 font-playfair relative">
          <span className="text-3xl mr-2">🍴</span>
          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
            Make a Reservation at TasteHub
          </span>
        </h1>
        <p className="text-lg text-orange-600 max-w-2xl mx-auto">
          Secure your table at TasteHub for an unforgettable culinary journey.
          We're looking forward to serving you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-orange-100">
        <div className="md:flex">
          <div className="md:w-2/5 bg-gradient-to-br from-amber-600 to-orange-600 text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>

            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <IoRestaurant className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 font-playfair">
                TasteHub Experience
              </h2>
              <p className="text-amber-100">
                Enjoy our chef's special menu or select from our à la carte
                options featuring global cuisine with a local twist.
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <h3 className="font-semibold mb-2 flex items-center">
                <IoTime className="mr-2 text-amber-200" />
                Opening Hours
              </h3>
              <p className="text-sm text-amber-100">
                <span className="inline-block w-3 h-3 bg-amber-200 rounded-full mr-2 opacity-50"></span>
                Monday to Thursday: 11am - 10pm
              </p>
              <p className="text-sm text-amber-100">
                <span className="inline-block w-3 h-3 bg-amber-200 rounded-full mr-2 opacity-50"></span>
                Friday & Saturday: 11am - 11pm
              </p>
              <p className="text-sm text-amber-100">
                <span className="inline-block w-3 h-3 bg-amber-200 rounded-full mr-2 opacity-50"></span>
                Sunday: 10am - 9pm
              </p>
            </div>

            <div className="mt-6 relative z-10">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaInfoCircle className="mr-2 text-amber-200" />
                Note
              </h3>
              <p className="text-sm text-amber-100">
                For parties larger than 6, please call us directly at (555)
                TASTE-HUB
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaGift className="mr-2 text-amber-200" />
                Special Offers
              </h3>
              <p className="text-sm text-amber-100">
                <FaGlassCheers className="inline mr-2 text-xs opacity-50" />
                Happy Hour: 3pm - 6pm daily
              </p>
              <p className="text-sm text-amber-100">
                <FaBirthdayCake className="inline mr-2 text-xs opacity-50" />
                Complimentary dessert for birthdays
              </p>
            </div>
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaUser className="text-amber-500 mr-2 text-xs" />
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none transition-all duration-300 pl-10 ${
                      errors.name
                        ? "border-red-500 focus:ring-2 focus:ring-red-300"
                        : "border-gray-300 focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
                    }`}
                  />
                  <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <FaExclamationCircle className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaEnvelope className="text-amber-500 mr-2 text-xs" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none transition-all duration-300 pl-10 ${
                      errors.email
                        ? "border-red-500 focus:ring-2 focus:ring-red-300"
                        : "border-gray-300 focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
                    }`}
                  />
                  <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <FaExclamationCircle className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <FaCalendarDay className="text-amber-500 mr-2 text-xs" />
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={minDate}
                      className={`w-full p-3 border rounded-lg focus:outline-none transition-all duration-300 pl-10 ${
                        errors.date
                          ? "border-red-500 focus:ring-2 focus:ring-red-300"
                          : "border-gray-300 focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
                      }`}
                    />
                    <FaCalendarDay className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <FaExclamationCircle className="mr-1" />
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <FaClock className="text-amber-500 mr-2 text-xs" />
                    Time
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none transition-all duration-300 pl-10 appearance-none ${
                        errors.time
                          ? "border-red-500 focus:ring-2 focus:ring-red-300"
                          : "border-gray-300 focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
                      }`}
                    >
                      <option value="">Select Time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    <FaClock className="absolute left-3 top-3.5 text-gray-400" />
                    <FaChevronDown className="absolute right-3 top-3.5 text-gray-400" />
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <FaExclamationCircle className="mr-1" />
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaUsers className="text-amber-500 mr-2 text-xs" />
                  Number of Guests
                </label>
                <div className="relative">
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all duration-300 pl-10 appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                  <FaUsers className="absolute left-3 top-3.5 text-gray-400" />
                  <FaChevronDown className="absolute right-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <FaConciergeBell className="text-amber-500 mr-2 text-xs" />
                  Special Requests
                </label>
                <div className="relative">
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows="2"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any allergies, dietary restrictions, or special occasions we should know about?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all duration-300"
                  ></textarea>
                  <FaEdit className="absolute right-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-lg font-semibold transition-all duration-500 shadow-md hover:shadow-lg flex items-center justify-center ${
                  isSubmitting
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:from-amber-600 hover:to-orange-700 hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
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
                    Processing...
                  </>
                ) : (
                  <>
                    <FaUtensils className="mr-2" />
                    Reserve at TasteHub
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Information Section with React Icons */}
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg shadow text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-amber-50 group">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
            <IoCall className="text-amber-600 text-xl" />
          </div>
          <h3 className="font-semibold text-amber-800 group-hover:text-amber-600 transition-colors duration-300">
            Call Us
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-medium animate-pulse">
              📞 +91 7651820239
            </span>
          </p>
          <p className="text-xs text-amber-500 mt-2 group-hover:text-amber-600 transition-colors duration-300">
            Available 10am-10pm
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-amber-50 group">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
            <IoLocation className="text-amber-600 text-xl" />
          </div>
          <h3 className="font-semibold text-amber-800 group-hover:text-amber-600 transition-colors duration-300">
            Location
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-medium">
              123 Food Restaurant, Mumbai
            </span>
          </p>
          <p className="text-xs text-amber-500 mt-2 group-hover:text-amber-600 transition-colors duration-300">
            Free valet parking
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-amber-50 group">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
            <IoTime className="text-amber-600 text-xl" />
          </div>
          <h3 className="font-semibold text-amber-800 group-hover:text-amber-600 transition-colors duration-300">
            Duration
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-medium">
              Reservations held for 15 minutes
            </span>
          </p>
          <p className="text-xs text-amber-500 mt-2 group-hover:text-amber-600 transition-colors duration-300">
            Please arrive on time
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-4 text-center transform transition-all duration-500 scale-95 animate-in fade-in-90 zoom-in-90">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-5 font-playfair">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                Reservation Confirmed!
              </span>
            </h2>
            <p className="text-gray-600 mt-3">
              Thank you{" "}
              <span className="font-semibold text-amber-600">
                {formData.name}
              </span>
              . Your table at <span className="font-semibold">TasteHub</span> is
              reserved!
            </p>
            <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-sm text-gray-700 flex items-center justify-center">
                <FaCalendarDay className="text-amber-500 mr-2" />
                <span className="font-medium">Date & Time:</span>{" "}
                {formatDate(formData.date)} at {formData.time}
              </p>
              <p className="text-sm text-gray-700 mt-1 flex items-center justify-center">
                <FaUsers className="text-amber-500 mr-2" />
                <span className="font-medium">Party Size:</span>{" "}
                {formData.guests} {formData.guests === 1 ? "person" : "people"}
              </p>
            </div>
            <div className="mt-6 bg-amber-100 p-3 rounded-lg border border-amber-200">
              <p className="text-xs text-amber-800 flex items-center">
                <FaInfoCircle className="mr-2" />
                We'll send a confirmation email to {formData.email} shortly.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <FaCheck className="mr-2" />
              Done
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .font-playfair {
          font-family: "Playfair Display", serif;
        }

        .success-checkmark {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          position: relative;
        }

        .check-icon {
          width: 80px;
          height: 80px;
          position: relative;
          border-radius: 50%;
          box-sizing: content-box;
          border: 4px solid #4caf50;
          animation: scaleIn 0.5s ease-in-out;
        }

        .icon-line {
          height: 5px;
          background-color: #4caf50;
          display: block;
          border-radius: 2px;
          position: absolute;
          z-index: 10;
        }

        .line-tip {
          top: 46px;
          left: 14px;
          width: 25px;
          transform: rotate(45deg);
          animation: icon-line-tip 0.75s;
        }

        .line-long {
          top: 38px;
          right: 8px;
          width: 47px;
          transform: rotate(-45deg);
          animation: icon-line-long 0.75s;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes icon-line-tip {
          0% {
            width: 0;
            left: 1px;
            top: 19px;
          }
          54% {
            width: 0;
            left: 1px;
            top: 19px;
          }
          70% {
            width: 50px;
            left: -8px;
            top: 37px;
          }
          84% {
            width: 17px;
            left: 21px;
            top: 48px;
          }
          100% {
            width: 25px;
            left: 14px;
            top: 45px;
          }
        }

        @keyframes icon-line-long {
          0% {
            width: 0;
            right: 46px;
            top: 54px;
          }
          65% {
            width: 0;
            right: 46px;
            top: 54px;
          }
          84% {
            width: 55px;
            right: 0px;
            top: 35px;
          }
          100% {
            width: 47px;
            right: 8px;
            top: 38px;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Reservation;
