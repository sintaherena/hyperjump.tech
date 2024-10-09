import { projects, github } from "@/data.json";
import GridItemsContainer, {
  GridItems,
  GridItemsMoreButton,
  GridItemsTitle,
} from "@/app/components/grid-items";

export default function Projects() {
  return (
    <GridItemsContainer>
      <GridItemsTitle title="Open Source" />
      <GridItems items={projects} />
      <GridItemsMoreButton href={github} />
    </GridItemsContainer>
  );
}
