import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Alunos</h1>
      <StudentTable students={students} />
    </div>
  );
}
