import { PersonCast } from "../../types/type";
import Card from "../shared/Card";
import RowList from "../shared/RowList";

type Props = {
  credits: PersonCast[];
};

const FeaturedList = ({ credits }: Props) => {
  return (
    <>
      <h2 className="mb-3 text-2xl font-semibold">Featured In</h2>
      <RowList
        items={credits}
        render={(credit) => (
          <Card
            id={credit.id}
            img={credit.poster_path}
            mediaType={credit.media_type}
            release={credit.release_date || credit.first_air_date!}
            title={credit.title || credit.name!}
            vote={credit.vote_average}
          />
        )}
      />
    </>
  );
};

export default FeaturedList;
