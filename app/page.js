import Link from "next/link";

export default function Home() {

  let linkStyle = "text-indigo-500 hover:text-indigo-300 cursor-pointer";

  return (
    <main className="bg-gray-700 text-amber-200 p-8 ">
      <h1 className="text-5xl">CPRG306 Assignments</h1>
      <ul className="m-3">
        <li className={linkStyle}><Link href="./week-2">Week 2 Assignment</Link></li>
        <li className={linkStyle}><Link href="./week-3">Week 3 Assignment</Link></li>
        <li className={linkStyle}><Link href="./week-4">Week 4 Assignment</Link></li>
        <li className={linkStyle}><Link href="./week-5">Week 5 Assignment</Link></li>
      </ul>
    </main>
  );
}