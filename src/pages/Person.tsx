import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPersonDetails } from "../lib/services/tmdb";
import { newDate } from "../lib/utils/newDate";
import { sortAndFilterByPopularity } from "../lib/utils/sortAndFilterByPopularity";
import FeaturedList from "../components/Person/FeaturedList";
import Biography from "../components/Person/Biography";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";

const Person = () => {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } = useQuery(
    ["person", id],
    () => getPersonDetails(id),
    {
      select: (data) => {
        const selectedCredits =
          data.known_for_department === "Acting"
            ? data.combined_credits.cast
            : data.combined_credits.crew;

        return {
          ...data,
          credits: sortAndFilterByPopularity(selectedCredits, 10)
            .slice(0, 15)
            .filter(
              // Remove Duplicates
              (value, index, array) =>
                array.findIndex((v2) => v2.id === value.id) === index
            ),
        };
      },
    }
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (isSuccess) {
    return (
      <>
        <div className="flex flex-col gap-6 lg:gap-20 sm:pt-10 sm:flex-row pb-14">
          <div className="flex-shrink-0 w-64 mx-auto sm:mx-0">
            {data.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
                alt=""
                className="w-64 h-fit"
              />
            ) : (
              <div className="grid h-[320px] bg-neutral-200/10 place-content-center">
                <img src="/no-image.svg" alt="" />
              </div>
            )}
          </div>
          <div>
            <h1 className="mb-3 text-3xl font-semibold">{data.name}</h1>
            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <h5 className="font-semibold">Known For</h5>
                <span className="text-sm text-neutral-400">
                  {data.known_for_department}
                </span>
              </div>
              <div>
                <h5 className="font-semibold">Birthday</h5>
                <span className="text-sm text-neutral-400">
                  {newDate(data.birthday)}
                </span>
              </div>
              <div>
                <h5 className="font-semibold">Place of Birth</h5>
                <span className="text-sm text-neutral-400">
                  {data.place_of_birth}
                </span>
              </div>
            </div>
            <Biography biography={data.biography} />
          </div>
        </div>
        <FeaturedList credits={data.credits} />
      </>
    );
  }
};

export default Person;
