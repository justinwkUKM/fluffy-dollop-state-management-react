import React from "react";

const tailwindcss = () => {
  return (
    <div class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <img
        src="/img/beams.jpg"
        alt=""
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
        width="1308"
      />
      <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div class="relative px-4 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 mx-auto">
        <div class="max-w-md mx-5">
          <h1 class="font-bold font-sans">
            EzyScore Loan Calculator by StarterHomz
          </h1>
          <div class="divide-y divide-gray-300/50">
            <div class="py-8 text-base leading-7 space-y-6 text-gray-600">
              <p>
                A Loan calculator built with purpose. Learn about where you
                stand in terms of your loan eligiblity and what you can do to
                improve your EzyScore Loan Elibility Ranking.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg
                    class="w-6 h-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Annual Income</p>
                  <p class="ml-4 border px-2 rounded-l-full font-bold bg-zinc-200">
                    MYR
                  </p>
                  <input
                    class="border rounded-r-full focus:bg-gray-50 font-semibold placeholder:font-bold px-2"
                    placeholder="60000.0"
                  />
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-6 h-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Loan Term</p>
                  <p class="ml-4 border px-2 rounded-l-full font-bold bg-zinc-200">
                    Years
                  </p>
                  <input
                    class="border rounded-r-full focus:bg-gray-50 font-semibold placeholder:font-bold px-2"
                    placeholder="10"
                  />
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-6 h-6 flex-none fill-red-100 stroke-red-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Interest Rate</p>
                  <p class="ml-4 border rounded-l-full px-2 font-bold bg-zinc-200">
                    %
                  </p>
                  <input
                    class="flex items-end border rounded-r-full focus:bg-gray-50 font-semibold placeholder:font-bold px-2"
                    placeholder=""
                  />
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-6 h-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <div class="mx-4 flex justify-center items-center">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="inlineRadio10"
                      >
                        Male
                      </label>
                    </div>
                    <div class="ml-4 form-check form-check-inline">
                      <input
                        class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="inlineRadio10"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-6 h-6 flex-none fill-red-100 stroke-red-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Monthly Expense</p>
                  <p class="ml-4 border rounded-l-full px-2 font-bold bg-zinc-200">
                    MYR
                  </p>
                  <input
                    class="flex items-end border rounded-r-full focus:bg-gray-50 font-semibold placeholder:font-bold px-2"
                    placeholder=""
                  />
                </li>
                <div class=" flex space-x-2 justify-center">
                  <button
                    type="button"
                    class="mt-2 inline-block px-6 py-2.5 border-2 border-blue-500 bg-gray-100 text-blue-500 font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Calculate
                  </button>
                </div>
              </ul>
              <p>
                Perfect for learning about your current loan standing in the
                market and proactively work towards improving them...
              </p>
            </div>
            <div class="pt-8 text-base leading-7">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p class="mx-4 text-gray-900 text-lg font-bold">
                  Your EzyScore is{" "}
                  <span class="font-extrabold text-green-600 text-2xl">
                    8.9
                  </span>
                </p>
              </div>
              <div class="flex items-center  mt-2">
                <svg
                  class="w-6 h-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p class="mx-4">
                  Max Affordable monthly pament{" "}
                  <span class="text-gray-600 font-bold">MYR 1000</span>
                </p>
              </div>
              <div class="flex items-center  mt-2">
                <svg
                  class="w-6 h-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p class="mx-4">
                  Max Loan Amount{" "}
                  <span class="text-gray-600 font-bold">MYR 70000.0</span>
                </p>
              </div>
              <p class=" mt-2">
                <a
                  href="https://tailwindcss.com/docs"
                  class="text-sky-500 hover:text-sky-600"
                >
                  Learn More &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tailwindcss;
