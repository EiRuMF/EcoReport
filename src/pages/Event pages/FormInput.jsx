import React from "react";

const FormInput = ({ label, type = "text", defaultValue, readOnly }) => {
  return (
    <div>
      <label className="block text-[15px] text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={`w-full border border-gray-300 rounded-[6px] px-3 py-2.5 text-[15px] focus:outline-none ${
          readOnly
            ? "bg-[#EEF2FF] text-gray-800"
            : "focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        }`}
      />
    </div>
  );
};

export default FormInput;
