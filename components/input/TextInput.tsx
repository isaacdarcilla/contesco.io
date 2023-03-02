export default function TextInput({
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange,
}: {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e?: any) => void;
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-white">
          {label}
        </label>
        <input
          type={type}
          value={value}
          className="shadow-sm px-4 bg-secondary border border-gray-500 text-white placeholder:text-gray-500 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      </div>
    </>
  );
}
