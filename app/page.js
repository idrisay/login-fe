import Link from "next/link";

async function getData() {
  // const res = await fetch("http://localhost:4000/");

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // console.log(res);
  // return res.json();
}

export default async function Page() {
  const data = await getData();

  console.log(data);

  return (
    <main className="">
      <div className="main-container bg-gradient-to-r from-neutral-700 to-neutral-300 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Welcome to Our MERN App!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula sem eu mauris
              efficitur, vel tincidunt nulla dapibus.
            </p>
            <Link
              href="/auth/login"
              className="inline-block bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}