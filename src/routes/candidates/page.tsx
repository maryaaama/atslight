import React from 'react';
import NavBar from '../../components/navBar/navBar';
import CandidateCard from '../../components/candidateCard/candidateCard';
import { useCandidatesQuery } from '../../graphql/generated/graphql';
import CandidatesSkeleton from '../../components/skeleton/candidates';
import { Link } from 'react-router-dom';
import person from "../../image/person.png";

export default function Candidates() {
  const { data, loading, error } = useCandidatesQuery();
  
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <main className="md:h-screen">
      <NavBar name={data?.candidates?.nodes[0].jobs.nodes[0].translations.nodes[0].title} />
      <div className="sm:h-11/12 md:p-4 md:h-[85%] md:overflow-auto max-sm:w-screen max-w-xl mx-auto sm:border sm:mt-8 sm:rounded-lg sm:items-center sm:shadow-lg">
        <div className="w-full border-b">
          <div className="w-2/3 mx-auto my-2 py-1.5 text-center border rounded-lg bg-gray-100 hover:bg-opacity-80 shadow-sm hover:shadow">
            <button>ویرایش آگهی استخدام</button>
          </div>
        </div>
        {loading ? (
          <CandidatesSkeleton />
        ) : (
          data?.candidates?.nodes.map((node) => (
            <Link key={node.id} to={`/candidate/${node.id}`}>
              <CandidateCard
                name={node.translations.nodes[0]?.name}
                job={node.jobs.nodes[0]?.translations.nodes[0].title}
                photo={node.photoUrl || person}
                id={node.id}
              />
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
