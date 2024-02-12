import React, { useMemo } from "react";
import {
  useCandidatesQuery,
  useEvaluationsQuery,
  useCandidateWithApplicationsQuery,
} from "../../graphql/generated/graphql";
import NavBar from "../../components/navBar/navBar";
import CandidateCard from "../../components/candidateCard/candidateCard";
import CandidatesSkeleton from "../../components/skeleton/candidates";
import { Link, useLocation } from "react-router-dom";
import person from "../../image/person.png";
import EmptyState from "../../components/emptyState/emptyState";

export default function Candidates() {
  const { data: candidatesData, loading: candidatesLoading } =
    useCandidatesQuery();
  const { data: evaluationsData } = useEvaluationsQuery();

  const averageEvaluations = useMemo(() => {
    const scores: { [key: string]: number[] } = {};
    evaluationsData?.evaluations?.nodes.forEach(({ candidate, point }) => {
      if (candidate && point !== null) {
        scores[candidate.nodeId] = scores[candidate.nodeId] || [];
        scores[candidate.nodeId].push(point);
      }
    });

    const averages: { [key: string]: number } = {};
    Object.entries(scores).forEach(([nodeId, points]) => {
      averages[nodeId] =
        points.reduce((acc, cur) => acc + cur, 0) / points.length;
    });

    return averages;
  }, [evaluationsData]);

  if (candidatesLoading) return <CandidatesSkeleton />;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobTitle = queryParams.get("title");

  const candidatesData =
    (jobTitle
      ? data?.candidates?.nodes.filter((node) => {
          return node.jobs.nodes[0]?.translations.nodes[0]?.title === jobTitle;
        })
      : data?.candidates?.nodes) || [];

  return (
    <main className="md:h-screen">
      <NavBar
        name={
          candidatesData?.candidates?.nodes[0]?.jobs.nodes[0]?.translations
            .nodes[0]?.title || "loading..."
        }
      />
      <div className="w-full border-b">
        <div className="w-2/3 mx-auto my-2 py-1.5 text-center border rounded-lg bg-gray-100 hover:bg-opacity-80 shadow-sm hover:shadow">
          <button>ویرایش آگهی استخدام</button>
        </div>
      </div>
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
        {candidatesData?.candidates?.nodes.length === 0 ? (
          <EmptyState />
        ) : (
          candidatesData?.candidates?.nodes.map((candidate) => (
            <Link key={candidate.id} to={`/candidate/${candidate.id}`}>
              <CandidateCard
                id={candidate.id}
                name={candidate.translations.nodes[0]?.name}
                job={candidate.jobs.nodes[0]?.translations.nodes[0].title}
                photo={candidate.photoUrl || person}
                averageEvaluation={averageEvaluations[candidate.nodeId] || 0}
              />
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
