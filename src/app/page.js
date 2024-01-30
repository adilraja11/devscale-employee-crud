import { Header } from "@/components/dashboard/Header";
import { AddEmployee } from "@/components/dashboard/AddEmployee";
import { EmployeeList } from "@/components/dashboard/EmployeeList";
import { Footer } from "@/components/dashboard/Footer";

export const dynamic = "force-dynamic"; // bypass si cache

async function getData() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/0tYfIvqkRXwi");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Header />
      <main className='mx-10 mt-10 flex flex-col gap-5'>
        <h1 className='font-extrabold text-3xl'>Welcome!, zoey@example.com</h1>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-2xl'>List Employee</h1>
            <AddEmployee />
        </div>
        <EmployeeList data={data?.data}/>
      </main>
      <Footer />
    </div>
  );
}
