function InputField({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <input
        {...props}
        className={`
          w-full px-4 py-2 border rounded-md shadow-sm
          ${error ? "border-red" : "border-grey"}
        `}
      />
      {error && <p className="text-sm text-red">{error}</p>}
    </div>
  );
}

export default InputField;
