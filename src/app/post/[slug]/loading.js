export default function Loading() {
  return (
    <section className="pb-17.5 pt-34 animate-pulse">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-7.5">
          <div className="w-full xl:max-w-[770px] space-y-6">
            <div className="h-[400px] w-full bg-gray-200 rounded-lg" />
            <div className="h-8 w-3/4 bg-gray-200 rounded" />
            <div className="flex gap-4 items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200" />
              <div className="h-4 w-40 bg-gray-200 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              <div className="h-6 w-16 bg-gray-200 rounded-full" />
              <div className="h-6 w-20 bg-gray-200 rounded-full" />
              <div className="h-6 w-12 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="w-full max-w-[370px] space-y-4">
            <div className="h-6 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
