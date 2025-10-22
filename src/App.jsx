import "./App.css";

function App() {
  return (
    <>
      <section className="h-screen w-screen bg-[#f4d04e] flex items-center justify-center flex-col">
        <section className="min-h-[480px] md:min-h-[525px] w-[330px] md:w-[385px] bg-white rounded-2xl border-[1] shadow-[10px_10px_2px_black] box-border p-[20px] md:p-[25px] relative">
          <img src="illustration-article.svg" alt="article" className="rounded-xl mb-[20px] md:mb-[25px]" />
          <button className="bg-[#f4d04e] rounded-sm px-[8px] py-1 font-bold text-black cursor-pointer mb-[10px] md:mb-[15px] ">Learning</button>
          <p className="font-medium mb-[15px] md:mb-[20px] text-sm">Published 21 Dec 2023</p>
          <a href="https://github.com/fatintawsifhoque" className="text-xl font-extrabold hover:text-[#f4d04e]" target="_blank">HTML & CSS foundations</a>
          <p className="mt-[20px] md:mt-[25px] text-gray-500 text-sm md:text-base">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className="flex items-center mt-[25px] md:mt-[30px] gap-2.5">
            <img src="image-avatar.webp" alt="profile" className="h-[30px] md:h-[35px]" />
            <p className="text-sm font-extrabold">Greg Hooper</p>
          </div>
        </section>
        <div className="mt-32.5 flex items-center"><p className="font-bold text-xl">Coded by <a href="https://github.com/fatintawsifhoque" className="font-extrabold text-2xl text-[#1a5d1a]">Fatin Tawsif Hoque</a></p></div>
      </section>
    </>
  );
}

export default App;
