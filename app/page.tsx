export default function Home() {
  return ( 
      <main className=" flex flex-col justify-center items-center h-screen w-screen">
          <ul className="grid grid-cols-2 gap-4 rotate-45 *:-rotate-45 scale-120 *:rounded-full *:hover:scale-115 *:transition *:shadow-[1px_0px_24px_4px] *:shadow-neutral-800">
            <li>
              <div className="bg-radial from-neutral-700 to-neutral-900  flex w-10 h-10 rounded-full border border-neutral-600 items-center justify-center text-2xl pointer-events-none"> Y </div> 
            </li>
            <li>
              <div className="bg-radial from-neutral-700 to-neutral-900  flex w-10 h-10 rounded-full border border-neutral-600 items-center justify-center text-2xl pointer-events-none"> B </div> 
            </li>
            <li>
              <div className="bg-radial from-neutral-700 to-neutral-900  flex w-10 h-10 rounded-full border border-neutral-600 items-center justify-center text-2xl pointer-events-none"> A </div> 
            </li>
            <li>
              <div className="bg-radial from-neutral-700 to-neutral-900  flex w-10 h-10 rounded-full border border-neutral-600 items-center justify-center text-2xl pointer-events-none"> X </div> 
            </li>
          </ul>

          <h1 className="mt-12 text-2xl font-semibold"> Coming soon </h1>
      </main> 
  );
}
