"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import hack from "@/hack.jpg";

export default function LandingPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const signInWithGoogle = async () => {
    await signIn("google", {
      callbackUrl: (searchParams["callback"] as string) || undefined,
    });
  };

  return (
    <div className="">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-12">
          <div className="text-center">
            <Image
              className="inline-block"
              src="/icon.png"
              width="200"
              height="200"
              alt="dev finder logo"
            />

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Find other awesome devs to pair with online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              This platform is for sharing your screen and working with other
              random developers online so that you can work together
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Link
                href="/browse"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link> */}
              <button
                onClick={async () => await signInWithGoogle()}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-12 bg-white border rounded-3xl">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tight text-black dark:text-black sm:text-5xl text-center">
              Explore Hackathons
            </h1>
            <p className="mt-8 text-base leading-7 text-black dark:text-black tracking-tight sm:text-lg sm:leading-8 text-center">
              This platform is for sharing your screen and working with other
              random developers online so that you can work together
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ml-12 mr-12">
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
          <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md b</div>g-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
            <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
          <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
            <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
          <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
            <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
          <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 flex flex-col lg:flex-row items-center lg:items-start">
        <Image
          className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 rounded-lg"
          src={hack}
          width="200"
          height="300"
          alt="Card Image 1"
        />
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">Description for card 1.</p>
            <div className="mt-2">
            <span className="font-semibold text-gray-600">Theme:</span> <span className="text-red-500">Theme Name</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <span className="font-regular text-gray-600">Online</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">Open</span>
            </div>
            <div>
              <span className="font-regular text-gray-600">06/03/25</span>
            </div>
            <div className="col-span-3">
              <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}




