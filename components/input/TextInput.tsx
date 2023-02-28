export default function TextInput({
  label,
  type,
  placeholder,
  onChange,
}: {
  label: string;
  type: string;
  placeholder: string;
  onChange: () => void;
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-white">
          {label}
        </label>
        <input
          type={type}
          className="shadow-sm px-4 bg-secondary border border-gray-500 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}
