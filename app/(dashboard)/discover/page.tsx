import PageHeaderComponent from "@/components/PageHeader";
import { TCoursesResponse } from "@/types/courses";
import { CoursesComponent } from "@/containers/Courses";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const DiscoverPage = async () => {
  let courses: TCoursesResponse[] = [];
  try {
    const response = await fetch(`${baseURL}dump/courses.json`, {
      cache: "no-store",
    });
    courses = await response.json();
  } catch (error) {
    console.error("Error fetching courses data:", error);
  }

  return (
    <>
      <PageHeaderComponent
        title="Discover"
        description="Explore our large collections of course "
      />

      <CoursesComponent coursesData={courses} />
    </>
  );
};

export default DiscoverPage;
