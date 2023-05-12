async function getData() {
  const res = await fetch("http://localhost:4000/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  console.log(res);
  return res.json();
}

export default async function Page() {
  const data = await getData();

  console.log(data);

  return (
    <main>
      <h2>Main Page</h2>
      <p>{data?.message}</p>
    </main>
  );
}
