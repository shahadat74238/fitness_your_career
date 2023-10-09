const Contact = () => {
  return (
    <div className="-mt-16">
      <div
        style={{
          backgroundImage: "url('../assets/bg.png')",
        }}
        className="h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <h1 className="text-3xl pt-[20vh] text-white font-bold text-center uppercase">
          Contact
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 my-10 lg:my-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-[#f5f5f5] p-5">
            <h1 className="text-[#7cb908] uppercase font-bold text-lg">
              Send Message
            </h1>
            <form>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <textarea
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Type Your Message"
                />
              </div>
              <div className="mt-8">
                <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] uppercase hover:border hover:border-[#7cb908] text-sm">
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:flex justify-end hidden">
            <img className="w-full" src="../assets/contacr.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
