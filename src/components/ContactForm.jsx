import React, { useState } from "react";

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    profession: "",
    country: "",
    cv: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Form Submitted:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto px-6 py-8 bg-white rounded-lg shadow-2xl space-y-8"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
        Contact us for a <span className="text-blue-500">FREE assessment</span> about <br /> your eligibility
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="rounded-sm border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="rounded-sm border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          className="rounded-sm border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.mobile}
          onChange={handleChange}
          required
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-sm border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          className="rounded-sm border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.profession}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="rounded-sm border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.country}
          onChange={handleChange}
          required
        />
      </div>

      {/* Row 3 */}
      <div>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-sky-50 file:text-blue-700
            hover:file:bg-blue-100 transition"
          required
        />
      </div>

      {/* Row 4 */}
     <div className="flex flex-col gap-4">
  {/* Required: Terms and Conditions */}
  <label className="flex items-center text-sm text-gray-700">
    <input
      type="checkbox"
      name="agree"
      checked={form.agree}
      onChange={handleChange}
      className="mr-2 accent-blue-600"
      required
    />
    I agree to the
    <span className="text-blue-600 underline ml-1 cursor-pointer">
      terms and conditions
    </span>
  </label>

  {/* Optional: Subscribe to Job Alerts */}
  <label className="flex items-center text-sm text-gray-700">
    <input
      type="checkbox"
      name="subscribe"
      checked={form.subscribe || false}
      onChange={handleChange}
      className="mr-2 accent-blue-600"
    />
    Subscribe for Job Alerts
  </label>

  {/* Submit button aligned right on larger screens */}
  <div className="sm:flex sm:justify-end">
    <button
      type="submit"
      className="px-6 py-3 bg-sky-600 text-white text-sm font-medium rounded-lg hover:bg-sky-700 transition"
    >
      Submit Application
    </button>
  </div>
</div>

    </form>
  );
};

export default JobApplicationForm;
