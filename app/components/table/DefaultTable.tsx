import React from "react";

interface RowMenuItem {
  menu: string;
}

interface DefaultTableProps {
  rowMenu: RowMenuItem[];
  children: React.ReactNode;
}

const DefaultTable: React.FC<DefaultTableProps> = ({ rowMenu, children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md mt-5 sm:rounded-lg border border-neutral-300">
      <table className="w-full text-sm text-left rtl:text-right text-neutral-900">
        <thead className="text-xs text-neutral-600 uppercase bg-neutral-100 border-b border-b-neutral-300">
          <tr>
            {rowMenu.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-5">
                <div className="flex items-center">
                  {item.menu}
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default DefaultTable;
