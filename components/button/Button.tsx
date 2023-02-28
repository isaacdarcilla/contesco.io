import { Spinner } from "flowbite-react";
import { Loader } from "react-feather";

export default function Button({
  title,
  type,
  disabled = false,
  onClick,
}: {
  title: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <div>
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-button-green py-2 px-4 text-sm font-medium text-white hover:bg-button-green-hover focus:outline-none focus:ring-0 focus:ring-gray-500"
        >
          {!disabled ? (
            title
          ) : (
            <>
              <Loader size={15} className="animate-spin" />
            </>
          )}
        </button>
      </div>
    </>
  );
}
