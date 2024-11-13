
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import { db } from '@/lib/db';
import { DataTable } from './data-table';
import { columns } from './columns'; // Importar `columns` si está en un archivo separado.

export async function ListCompanies() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <DataTable columns={columns} data={companies} />;
  //Renderiazmos el componente de dataTable, por un laod estamospasaa do las columnas y por otro lado estamos padsando todo el tema de data  que viene directamente d enuestra base de datos a travez de  await.db.company
}
