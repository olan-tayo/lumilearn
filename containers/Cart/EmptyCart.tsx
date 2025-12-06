import { PrimaryButton } from "@/components/Buttons";
import { useRouter } from "next/navigation";

const EmptyCart = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center">
        {/* ------Empty Cart Icon----- */}
        <div className="mb-6">
          <svg
            className="mx-auto h-32 w-32 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>

        {/*-------- Empty State Text----------- */}
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">
          Your cart is empty
        </h2>
        <p className="text-secondary-text mb-8 text-sm md:text-base">
          Looks like you haven&apos;t added any courses yet. Explore our
          collection and find the perfect course for you!
        </p>

        {/*  Discover Courses Button */}
        <PrimaryButton icon={false} onClick={() => router.push("/discover")}>
          Discover Courses
        </PrimaryButton>
      </div>
    </div>
  );
};

export default EmptyCart;
