import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Link href={"/dashboard"}>To Dashboard</Link>;
      <Link href={"/sample"}>To Sample</Link>;<h1>Sample</h1>
    </>
  );
}
