import { getAllBlogs, getBlogBySlug } from "../sanity/sanity-utils"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer";

export default async function home() {

  const blogs = await getAllBlogs();
  const blog = await getBlogBySlug("top-10-software-house-in-pakistan");

  return (

    <div className="h-full min-h-screen bg-gradient-to-r from-rose-200 via-rose-200 to-teal-200"> <Header />



      <div className="max-w-xl mx-auto flex flex-col items-center justify-center mt-10 space-y-4"><h1 className="text-4xl font-bold text-center text-black"> Blogs </h1></div>

      <div className="flex p-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {blogs?.map((blog) => (
            <Card blog={blog} key={blog} />
          ))}

        </div>
      </div>
      <Footer />
    </div>

  )
}
