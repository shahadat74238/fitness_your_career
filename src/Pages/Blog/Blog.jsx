import { Link, useLoaderData } from "react-router-dom";
import { BiDotsHorizontal } from "react-icons/bi";
import { BiSolidUser } from 'react-icons/bi';
import { AiTwotoneCalendar } from 'react-icons/ai';
import RightSideNav from "../EventDetails/RightSideNav/RightSideNav";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl my-5 px-5 md:px-10 md:my-10 mx-auto gap-6 grid grid-cols-1 lg:grid-cols-6">
        <div className="lg:col-span-4  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.data.map((blog) => (
              <div key={blog.id}>
                <div className=" hover:shadow-md shadow bg-[#f5f5f5] relative">
                  <div className="">
                    <img
                      className="h-60 w-full object-cover"
                      src={blog?.blogImage}
                      alt="Loading image"
                    />
                  </div>
                  <div className="p-5 bg-[#f5f5f5] ">
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7cb908]">
                        {blog?.blogTitle}
                      </h5>
                      <div className="flex mb-2 justify-between ">
                        <p className="text-sm font-semibold">
                           <BiSolidUser className="inline text-lg text-[#7cb908] mr-2" /> {blog.author}</p>
                        <p className="text-sm font-semibold">
                           <AiTwotoneCalendar className="inline text-lg text-[#7cb908] mr-2" /> {blog.postedOn}</p>
                      </div>
                      <p className="mb-3 font-normal text-justify text-[#818181]">
                        {blog?.blogText.length > 200 ? (
                          <span>
                            {blog?.blogText.slice(0, 80)}{" "}
                            <BiDotsHorizontal className="inline text-lg" />
                          </span>
                        ) : (
                          blog?.blogText
                        )}
                      </p>
                      <Link className="font-semibold text-lg hover:text-[#61861c] text-[#7cb908]">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side Nav */}
        <div className="lg:col-span-2">
        <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Blog;
