export default function Skeleton({ center = false }: { center?: boolean }) {
  return (
    <section
      className={center ? "container p-6 text-center mx-auto" : "container p-6"}
    >
      <div className="w-full text-center rounded-md sm:p-8">
        <div role="status" className="w-full animate-pulse">
          <div className="h-2.5 bg-secondary rounded-full w-48 mb-4"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[360px] mb-4"></div>
          <div className="h-2.5 bg-secondary rounded-full w-48 mb-4"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-secondary rounded-full max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  );
}
