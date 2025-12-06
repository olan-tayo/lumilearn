import { PrimaryButton } from "@/components/Buttons";
import { BookOpen, RefreshCcw } from "lucide-react";

const EmptyCourse = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-12">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl" />
        <div className="relative bg-primary/5 p-6 rounded-full">
          <BookOpen className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-2">
        No Courses Found
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        We couldn&apos;t find any courses at the moment. Please try again later
        or check back soon for new content.
      </p>

      <div className="flex gap-3">
        <PrimaryButton
          onClick={() => window.location.reload()}
          icon={false}
          className="cursor-pointer"
        >
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </PrimaryButton>
      </div>
    </div>
  );
};

export default EmptyCourse;
