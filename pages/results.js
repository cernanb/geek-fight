import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { setContext } from "@apollo/client/link/context";
import { processResults } from "../utils";

export default function Results({ results }) {
  const tie = results[0].score === results[1].score;
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 mx-auto">
        {results.map((result, index) => (
          <div
            key={result.login}
            className={`flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 w-1/2 mx-auto border-2 ${
              !tie && index === 0 ? "border-green-500" : "border-red-500"
            } py-4`}
          >
            <div className="flex-1 flex flex-col p-8">
              <Image
                className="flex-shrink-0 mx-auto bg-black rounded-full"
                src={`https://github.com/${result.login}.png?size=200`}
                width={300}
                height={300}
                alt={`${result.login} avatar`}
              />
              <h3 className="mt-6 text-gray-900  font-medium text-2xl">
                {result.login}
              </h3>
              {}
            </div>
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <p className="text-gray-900 font-medium hover:text-gray-600">
                Score:
              </p>
              <p className="text-gray-500">{result.score}</p>
            </div>
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <p className="text-gray-900 font-medium hover:text-gray-600">
                Followers:
              </p>
              <p className="text-gray-500">{result.followers.totalCount}</p>
            </div>
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <p className="text-gray-900 font-medium hover:text-gray-600">
                Repo Star Count:
              </p>
              <p className="text-gray-900 font-medium hover:text-gray-600">
                (# of times their repos have been starred):
              </p>
              <p className="text-gray-500">{result.stargazerCount}</p>
            </div>
          </div>
        ))}
      </div>
      {!tie && (
        <h1 className="mt-3 text-4xl text-center">
          {results[0].login} is the Winner!
        </h1>
      )}
      {tie && <h1>It's a Draw!</h1>}
      <div className="text-center mt-3">
        <Link href={`/battle`}>
          <a>
            <button
              type="button"
              className="inline-block items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
            >
              Start a New Fight
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { fighterOne, fighterTwo } = context.query;
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const {
    data: { user: fighterOneData },
  } = await client.query({
    query: gql`
      query GetUser {
        user(login: "${fighterOne}") {
          bio
          login
          followers {
            totalCount
          }

          repositories(first: 100) {
            edges {
              node {
                stargazerCount
              }
            }
          }
        }
      }
    `,
  });

  const {
    data: { user: fighterTwoData },
  } = await client.query({
    query: gql`
      query GetUser {
        user(login: "${fighterTwo}") {
          bio
          login
          followers {
            totalCount
          }
          repositories(first: 100) {
            edges {
              node {
                stargazerCount
              }
            }
          }
        }
      }
    `,
  });

  const results = processResults(fighterOneData, fighterTwoData);
  console.log(results);
  return {
    props: {
      results,
    },
  };
}
