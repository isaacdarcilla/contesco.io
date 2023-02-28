export default function Button({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <>
      <div>
        <button
          type="submit"
          onClick={onClick}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-button-green py-2 px-4 text-sm font-medium text-white hover:bg-button-green-hover focus:outline-none focus:ring-0 focus:ring-gray-500"
        >
          {title}
        </button>
      </div>
    </>
  );
}
