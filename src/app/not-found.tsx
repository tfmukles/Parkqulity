import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import BackIcon from "@/layouts/Icons/BackIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Link from "next/link";

const NotFound = async () => {
  const data: RegularPage = getListPage("pages/404.md");
  const { image, title } = data.frontmatter;
  return (
    <>
      <SeoMeta title={"Page Not Found"} image={"/images/404.png"} />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center sm:col-10 md:col-8 lg:col-6">
              <ImageFallback
                className="mb-8 w-full"
                src={image}
                alt="page not found"
                height={320}
                width={630}
              />
              <h3
                className="text-3xl md:text-4xl lg:text-[2.5rem]"
                dangerouslySetInnerHTML={markdownify(title)}
              ></h3>
              <div className="content">
                <MDXContent content={data.content} />
              </div>
              <Link
                href="/"
                className="btn btn-lg btn-primary px-8 py-3 mt-8 uppercase font-primary font-bold"
              >
                <BackIcon className="mr-2 inline-block" /> Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
