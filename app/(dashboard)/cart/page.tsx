import CardComponent from "@/components/Cards";
import PageHeaderComponent from "@/components/PageHeader";
import AuthorImg from "../../../public/assets/images/person.jpg";
import OrderSummary from "@/components/OrderSummary";

const CartPage = () => {
  return (
    <div>
      <PageHeaderComponent
        title="Cart"
        description="Access courses and tutors you have liked"
      />

      <div className="bg-white mt-6 my-4 rounded-xl px-4 md:px-6 py-5">
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-text-primary pb-5">
          2 Courses in cart
        </h2>
        <div className="flex flex-col md:flex-row gap-15">
          <div className="grid grid-cols-1 gap-3.5 w-full md:w-[65%]">
            <div className="">
              <CardComponent
                title="Fundamentals of Mathematics: For Beginners"
                authorName="Henry Ford"
                price="3,500"
                authorImg={AuthorImg}
                ratingValue={4.5}
                position="vertical"
              />
            </div>

            <div className="border-[0.5px] border-border mb-4" />

            <CardComponent
              title="Fundamentals of Mathematics: For Beginners"
              authorName="Henry Ford"
              price="3,500"
              authorImg={AuthorImg}
              ratingValue={1.5}
              position="vertical"
            />
          </div>

          <div className=" w-full md:w-[35%]">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
