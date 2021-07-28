import { useState } from "react";

export default function FighterForm({ onSubmit, placeholder }) {
  const [fighter, setFighter] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(fighter);
      }}
    >
      <div className="w-4/5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              value={fighter}
              onChange={(e) => setFighter(e.target.value)}
              className="shadow-sm focus:outine-none focus:border-none block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder={placeholder}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-2.5 py-1.5 mt-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
        >
          Get fighter
        </button>
      </div>
    </form>
  );
}
