import { markdownify } from "@/lib/utils/textConverter";
import Image from "next/image";

const KeyFeaturesItem = ({
  title,
  image,
  isActive,
  onSelecteFeature,
}: {
  title: string;
  image: string;
  isActive: boolean;
  onSelecteFeature: () => void;
}) => {
  return (
    <div className="lg:col-4 xl:col-3 md:col-6">
      <div
        className="border-animation-hover bg-gradient-primary rounded-[800px] p-px relative group after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[800px] after:bg-[#333] hover:after:bg-transparent"
        data-aos="fade--up"
      >
        <span className="border-animation rounded-[800px]"></span>
        <div
          onClick={onSelecteFeature}
          className="bg-body block rounded-[800px] px-10 py-8 text-center relative z-10 group w-full cursor-pointer select-none"
        >
          <div
            className={`relative after:bg-gradient-primary after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-sm rounded-sm inline-flex items-center justify-center w-14 h-14 group-hover:after:opacity-100 after:opacity-0 after:transition-opacity after:duration-[200ms] ${
              isActive ? "after:opacity-100" : "bg-[#161616]"
            }`}
          >
            <Image
              className="mx-auto max-w-[30px] max-h-[30px] relative z-10"
              width={31}
              height={26}
              src={image}
              alt={title}
            />
          </div>
          <p
            className="text-[#ababab] text-xl mt-4 font-medium group-hover:text-gray transition capitalize"
            dangerouslySetInnerHTML={markdownify(title)}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesItem;
