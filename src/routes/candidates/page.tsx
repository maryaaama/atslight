import React, { useMemo } from "react";
import NavBar from "../../components/navBar/navBar";
import CandidateCard from "../../components/candidateCard/candidateCard";
import {
  useCandidatesQuery,
  useJobsApplicationsQuery,
} from "../../graphql/generated/graphql";
import CandidatesSkeleton from "../../components/skeleton/candidates";
import { Link } from "react-router-dom";
import person from "../../image/person.png";
import EmptyState from "../../components/emptyState/emptyState";

export default function Candidates() {
  const { data: candidatesData, loading, error } = useCandidatesQuery();
  const { data: applicationsData } = useJobsApplicationsQuery();

  // Calculate average evaluations for each candidate
  const averageEvaluations = useMemo(() => {
    const evaluationsMap: {
      [key: string]: { total: number; count: number };
    } = {};

    applicationsData?.jobsApplications?.nodes.forEach((application) => {
      if (
        application.candidate &&
        application.evaluation !== null &&
        application.evaluation !== undefined
      ) {
        const evaluation = application.evaluation;
        const nodeId = application.candidate.nodeId;
        if (nodeId) {
          if (evaluationsMap[nodeId]) {
            evaluationsMap[nodeId].total += evaluation;
            evaluationsMap[nodeId].count += 1;
          } else {
            evaluationsMap[nodeId] = { total: evaluation, count: 1 };
          }
        }
      }
    });

    const averages: { [key: string]: number } = {};
    Object.keys(evaluationsMap).forEach((nodeId) => {
      averages[nodeId] =
        evaluationsMap[nodeId].total / evaluationsMap[nodeId].count;
    });

    return averages;
  }, [applicationsData]);

  return (
    <main className="md:h-screen">
      <NavBar
        name={
          candidatesData?.candidates?.nodes[0]?.jobs.nodes[0]?.translations
            .nodes[0]?.title || "loading..."
        }
      />
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
        {error ? (
          <p>Error loading candidates</p>
        ) : loading ? (
          <CandidatesSkeleton />
        ) : candidatesData?.candidates?.nodes.length === 0 ? (
          <EmptyState />
        ) : (
          candidatesData?.candidates?.nodes.map((node) => {
            const averageEvaluation = averageEvaluations[node.nodeId] || 0;
            console.log(averageEvaluation);
            return (
              <Link key={node.id} to={`/candidate/${node.id}`}>
                <CandidateCard
                  name={node.translations.nodes[0]?.name}
                  job={node.jobs.nodes[0]?.translations.nodes[0].title}
                  photo={node.photoUrl || person}
                  id={node.id}
                  averageEvaluation={averageEvaluation}
                />
              </Link>
            );
          })
        )}
      </div>
    </main>
  );
}
