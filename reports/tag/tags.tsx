import { Checkbox } from "@/components/shadcn/checkbox";
import { Tag } from "@/types/tag";
import { FC } from "react";

interface TagsProps {
  data: Tag[];
}

export const Tags: FC<TagsProps> = ({ data }) => {
  return (
    <ul>
      {data.map((tag) => (
        <li className="py-0.5" key={tag.id}>
          <div className="px-3 py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Checkbox />
              <span className="text-preset-3 text-app-neutral-800 dark:text-app-neutral-dark-100">
                {tag.name}
              </span>
            </div>
            1
          </div>
        </li>
      ))}
    </ul>
  );
};
