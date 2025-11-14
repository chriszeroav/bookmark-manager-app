import { FC } from "react";
import { getTagsUserAction } from "@/actions/tag";
import { Tags as TagsReport } from "@/reports/tag/tags";

interface TagsProps {}

export const Tags: FC<TagsProps> = async () => {
  const tags = await getTagsUserAction();

  return <TagsReport data={tags} />;
};
