import { X } from "react-feather";
import toast, { Toaster, ToastBar } from "react-hot-toast";

export default function CustomToast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
          fontSize: "12px",
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <span className="mx-2">
                  <button title="" onClick={() => toast.dismiss(t.id)}>
                    <X className="mt-1" size={15} />
                  </button>
                </span>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
