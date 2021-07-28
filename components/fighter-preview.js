import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function FighterPreview({ fighter, resetFighter }) {
  return (
    <div className="flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 w-1/2 mx-auto">
      <div className="flex-1 flex flex-col p-8">
        <Image
          className="flex-shrink-0 mx-auto bg-black rounded-full"
          src={`https://github.com/${fighter}.png?size=400`}
          width={300}
          height={300}
          alt={`${fighter} avatar`}
        />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{fighter}</h3>
        <button
          type="button"
          onClick={resetFighter}
          className="inline-flex items-center px-3 py-2 mt-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none text-center"
        >
          <XIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          Clear Fighter
        </button>
      </div>
    </div>
  );
}
