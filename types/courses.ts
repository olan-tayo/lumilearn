export type TCourses = {
  courses: [];
  loading: boolean;
  error: string | null;
};

export type TCoursesStore = {
  state: TCourses;
  fetchCourses: () => void;
};

export type TTutor = {
  id: string;
  avatar: string;
  name: string;
};

export type TCoursesResponse = {
  cover_image_url: string;
  duration: number;
  duration_type: string;
  price: number;
  rating: number;
  slug: string;
  title: string;
  tutor: TTutor;
  type: string;
};

export type TCheckoutDetails = {
  name: string;
  number: string;
  expiryDate: string;
  ccv: string;
  billingAddress: string;
  saveCard?: boolean;
};
