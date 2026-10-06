export default function SearchBox(){
 return (
  <div className="rounded-xl border p-5">
   <h2 className="font-bold">Cerca opportunità</h2>
   <select className="mt-3 w-full rounded border p-2">
    <option>Lazio</option>
    <option>Italia</option>
   </select>
   <button className="mt-4 rounded bg-black px-4 py-2 text-white">
    Cerca
   </button>
  </div>
 );
}
