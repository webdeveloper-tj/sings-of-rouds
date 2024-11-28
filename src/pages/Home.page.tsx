const Home = () => {
  return (
    <div className="flex flex-col mt-5  gap-y-10 px-1">
      <div className="flex justify-center items-center ">
        <h1 className="text-center text-orange-700 text-4xl">
          Welcome to the "{"Road Signs"}"
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-3  justify-evenly gap-y-4 ">
        <div className=" md:w-[450px] bg-orange-100 p-6 break-words rounded-md text-slate-700">
          <img
            src="../../public/chekmarker.png"
            alt=""
            className="w-16 h-16 mb-4"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aliquam, deleniti quia unde rem assumenda laboriosam. Consectetur
            distinctio velit iste est quis pariatur, cumque aspernatur natus
            nemo, soluta iusto accusantium!
          </p>
        </div>
        <div className=" md:w-[450px] bg-orange-100 p-6 break-words rounded-md text-slate-700">
          <img
            src="../../public/exclamation marker.png"
            alt=""
            className="w-16 h-16 mb-4"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aliquam, deleniti quia unde rem assumenda laboriosam. Consectetur
            distinctio velit iste est quis pariatur, cumque aspernatur natus
            nemo, soluta iusto accusantium!
          </p>
        </div>
      </div>
      <div className="container  flex justify-center items-center relative">
        <img src="../../public/image.png" alt="" className="w-[400px]" />
        <span className="text-orange-700 text-2xl absolute">
          You can leanr this !
        </span>
      </div>
      <div className=" xl:w-[1080px] flex flex-col items-center justify-center mx-auto bg-blue-100 p-6 break-words rounded-md text-slate-700 ">
        <h1 className="text-3xl mb-4">You cant check youself</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vitae
          tempora velit esse! Cum libero impedit, velit vel laboriosam tempore
          ipsam ex facere, nisi, maxime quam qui debitis accusantium fugit! Quod
          harum doloribus delectus nulla cumque ipsa atque eveniet
          necessitatibus suscipit. Corrupti quos enim dignissimos, provident
          iure quia deleniti ipsum autem ea itaque architecto obcaecati quo,
          ratione magni voluptatibus culpa?
        </p>
      </div>
    </div>
  );
};

export default Home;
