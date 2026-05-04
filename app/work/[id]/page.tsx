import { dynamicPageMap, PageId } from "@/data/LinksUIData";
import { notFound } from "next/navigation";
function isPageId(id: string): id is PageId {
  return id in dynamicPageMap;
}
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;
  if (!isPageId(id)) return notFound();
  const dynamicTitle = dynamicPageMap[id].title;
  const dynamicDescription = dynamicPageMap[id].description;
  return {
    title: `${dynamicTitle} | UI Lab`,
    description: dynamicDescription,
  };
};
export default async function MainPageWork({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  if (!isPageId(id)) return notFound();
  const DynamicPage = dynamicPageMap[id].page;
  return <DynamicPage />;
}
