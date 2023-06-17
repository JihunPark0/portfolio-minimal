//importing img assets
import recipeApp from "../assets/recipeApp.png";
import nebula from "../assets/nebula.png";
export default function Portfolio() {
  return (
    <>
      <div className="mb-5 flex gap-4 flex-wrap justify-center lg:justify-start">
        <div className="h-[400px] w-[320px] shadow-2xl p-3 rounded-2xl">
          <p className=" mb-2 font-medium">Ecommerce Project: Recipe box App</p>

          <img
            src={recipeApp}
            className="h-[160px] w-[100%] shadow-inner mx-auto mb-2"
          />
          <p className=" text-sm">
            Developed Object Oriented Web Applicaiton Used primarily HTML,CSS,
            JavaScript for the front end and used PHP for server side. Created
            an API to access a relational database I designed
            <br />
            <br />
            <a
              onClick={() =>
                window.open(
                  "https://kunet.uk/k2115030/RecipeApp/controller/customer/recipeApp_customer.php"
                )
              }
              className="underline text-blue-900 hover:cursor-pointer"
            >
              See demo
            </a>
          </p>
        </div>
        <div className="h-[400px] w-[320px] shadow-2xl p-3 rounded-2xl">
          <p className=" mb-2 font-medium">
            Web app: Grade tracker for students
          </p>

          <img
            src={nebula}
            className="h-[160px] w-[100%] shadow-inner mx-auto mb-2"
          />
          <p className=" text-sm">
            A Applicaiton that helps student to predict what grades they need
            based on their current grade in order to achieve a 2:2 or 2:1. The
            application was also capable of storing the calculated grade to
            produce a chart that students with an account, can track their
            grades.
            <br />
            <a
              onClick={() =>
                window.open("https://kunet.uk/k2115030/PE2GradeCalculator_v4")
              }
              className="underline text-blue-900 hover:cursor-pointer"
            >
              See demo
            </a>
          </p>
        </div>
        <div className="h-[400px] min-w-[320px] shadow-2xl p-3 rounded-2xl flex justify-center items-center">
          <p className=" mb-2 font-medium text-xl">More coming soon</p>
        </div>
      </div>
    </>
  );
}
