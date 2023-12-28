function Contact() {
  return (
    <div className="bg-primary text-center w-full p-10 lg:px-40  ">
      <div className="text-black text-center pt-20 font-bold text-4xl">
        Reach Out To Me!!!
      </div>
      <div className="text-black text-center py-8 font-semibold text-xl">
        Go ahead... Don&apos;t be shy
      </div>
      <div className="">
        <div className="flex items-center justify-center">
          <section className="text-white body-font md:w-[65%]  ">
            <div className="bg-white p-5 ">
              <div className="bg-[#1d1d1d] p-5 ">
                <div className="container px-5 pb-24 mx-auto">
                  <div className="text-white text-center py-10 font-bold text-3xl animate-pulse">
                    Lets Chat
                  </div>
                  <div className="font-bold">
                    &quot; Alone we can do so little <br /> together we can do
                    so much. &quot;
                    <span className="text-[#656565] font-normal">
                      - Helen Keller
                    </span>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto pt-10 pb-[-1]">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            // for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            // for="email"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            // for="message"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button className="flex mx-auto text-black hover:text-white bg-primary hover:bg-indigo-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Contact;
