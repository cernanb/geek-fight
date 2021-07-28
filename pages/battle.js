import Link from "next/link";
import { useState } from "react";
import FighterForm from "../components/fighter-form";
import FighterPreview from "../components/fighter-preview";

export default function Battle() {
  const [fighterOne, setFighterOne] = useState(null);
  const [fighterTwo, setFighterTwo] = useState(null);

  const resetFighter = (fighter) => {
    if (fighter === "fighterOne") {
      setFighterOne(null);
    } else {
      setFighterTwo(null);
    }
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Fight!
          </h2>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Enter two github usernames below.
          </p>
        </div>
      </div>
      {fighterOne && fighterOne && <h1 className="text-center text-2xl">VS</h1>}

      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 mx-auto">
        {!fighterOne ? (
          <FighterForm onSubmit={(fighter) => setFighterOne(fighter)} />
        ) : (
          <FighterPreview
            fighter={fighterOne}
            resetFighter={() => setFighterOne(null)}
          />
        )}

        {!fighterTwo ? (
          <FighterForm onSubmit={(fighter) => setFighterTwo(fighter)} />
        ) : (
          <FighterPreview
            fighter={fighterTwo}
            resetFighter={() => setFighterTwo(null)}
          />
        )}
      </div>
      {fighterOne && fighterTwo && (
        <div className="text-center">
          <Link
            href={`/results?fighterOne=${fighterOne}&fighterTwo=${fighterTwo}`}
          >
            <a>
              <button
                type="button"
                className="inline-block items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
              >
                Start Fight
              </button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
