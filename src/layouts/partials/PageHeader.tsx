import Breadcrumbs from "@/components/Breadcrumbs";
import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="container text-center">
        <div className="rounded-2xl  bg-gradient-secondary px-8 py-14  ">
          <h2>{humanize(title)}</h2>
          <Breadcrumbs className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
