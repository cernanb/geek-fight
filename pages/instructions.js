import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  {
    id: "01",
    name: "Enter two usernames from Github",
    href: "#",
    status: "upcoming",
  },
  { id: "02", name: "Battle commences", href: "#", status: "current" },
  { id: "03", name: "See the winner", href: "#", status: "upcoming" },
];

export default function Instructions() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white">
        <div className=" py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Instructions
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Starting a battle is quite simple...
            </p>
          </div>
        </div>
      </div>

      <nav aria-label="Progress">
        <ol className="border border-orange-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              <span
                className="px-6 py-4 flex items-center text-sm font-medium"
                aria-current="step"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-full">
                  <span className="text-blue-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-orange-500">
                  {step.name}
                </span>
              </span>
              {stepIdx !== steps.length - 1 ? (
                <>
                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-orange-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
