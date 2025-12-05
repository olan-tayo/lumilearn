import PageHeaderComponent from "@/components/PageHeader";
import SearchComponent from "@/components/Search";
import CardComponent from "@/components/Cards/index";
import AuthorImg from "../../../public/assets/images/person.jpg";

const DiscoverPage = () => {
  return (
    <>
      <PageHeaderComponent
        title="Discover"
        description="Explore our large collections of course "
      />

      <div className="mt-6 my-4">
        <SearchComponent />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3.5">
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={4.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={1.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={0}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={4.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={1.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={0}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={4.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={1.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={0}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={4.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={1.5}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={0}
        />
        <CardComponent
          title="Fundamentals of Mathematics: For Beginners"
          authorName="Henry Ford"
          price="3,500"
          authorImg={AuthorImg}
          ratingValue={5}
        />
      </div>
    </>
  );
};

export default DiscoverPage;
