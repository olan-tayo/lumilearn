import React from "react";

const TextInput = React.forwardRef<
  HTMLInputElement,
  {
    label?: string;
    placeholder?: string;
    type?: "text" | "checkbox" | "number" | "date" | "radio";
    error?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">
>(({ label, placeholder, type = "text", error, ...props }, ref) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-text-primary mb-1">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
        className={` placeholder:text-placeholder text-base ${
          type === "checkbox"
            ? "w-4 h-4 rounded-sm outline-none p-0 accent-primary border-[1.5px] border-text-secondary cursor-pointer appearance-none bg-white checked:bg-primary"
            : "w-full rounded-[10000px] px-3.5 py-[15px] focus:outline-none focus:ring-1 focus:ring-primary border border-border"
        }`}
      />
      {error && <p className="text-sm text-red-600  pt-0.5 ">{error}</p>}
    </div>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
