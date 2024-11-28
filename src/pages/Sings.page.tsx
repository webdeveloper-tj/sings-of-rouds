import db from "../../db/db.json";
const Sings = () => {
  const { roadSigns: icons } = db;
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 justify-center items-center  px-2">
        {icons &&
          icons.length > 1 &&
          icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col justify-around gap-y-6 border border-orange-400 rounded-md p-2 mx-auto  md:hover:shadow-2xl md:shadow-orange-400 hover:scale-105 transition h-auto sm:h-[320px] w-[240px] lg:w-[325px]  sm:mx-auto sm:w-[300px]"
            >
              <img
                src={icon.image}
                alt={icon.title}
                className="w-[100px] h-[100px] self-center"
              />
              <div className=" flex flex-col  ">
                <h1 className="text-3xl mb-4">{icon.title}</h1>
                <p className="text-orange-600  rounded-sm px-1">{icon.dec}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sings;
