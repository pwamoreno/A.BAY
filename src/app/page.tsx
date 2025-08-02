import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import CustomPage from "@src/components/CustomPage";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
  title: title,
  description: description,
  icons: SEODATA.defaultOGImage,
  openGraph: {
    images: [
      {
        url: SEODATA.defaultOGImage,
      },
    ],
  },
};

const page = () => {
  return (
    <AppLayout className="pt-10 mx-auto mt-10 max-sm:mt-22">
      <CustomPage />
      <div className="mx-12 max-md:mx-6">
        <AllCategorySection />
        <div className="mt-4 sm:mt-10">
          <SortedProducts />
        </div>
      </div>
    </AppLayout>
  );
};

export default page;
