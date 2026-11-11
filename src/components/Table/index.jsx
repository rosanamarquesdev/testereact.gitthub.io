import React from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { theme } from "../../theme/theme";
import { fuzzyFilter } from "../../utils/fuzzyFilter";
import { Footer } from "../Footer";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Inputs/Input";
import { Header } from "../Header";
import { Text } from "../Texts/Text";
// Internos
import * as T from "./style";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Externos
import { IoSearch } from "react-icons/io5";
import { LuArrowDownAZ, LuArrowDownUp, LuArrowUpAZ } from "react-icons/lu";
import { Loader } from "../../../public/Loader";

// modalItens é responsável para por filtros diversificados no componente
export const Table = ({
  data,
  columns,
  title,
  style,
  sort = true,
  header = true,
  search,
  setSearch,
  setPage,
  isPagination = true,
  isLoading = false,
  filterModal,
  filterControl,
  variant = "main-table",
}) => {
  // Estados de interatividade
  const [isSearch, setIsSearch] = React.useState(false);
  const { isActive } = React.useContext(SidebarContext);

  // Estados de funcionamento da tabela
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  React.useEffect(() => {
    setPagination((prev) => {
      return {
        ...prev,
        pageIndex: 0,
      };
    });
  }, [filterControl]);

  const handleNextPage = () => {
    if (!table.getCanNextPage()) return;

    if (setPage) {
      setPage((prev) => prev + 1);
    }
    table.nextPage();
  };

  const handlePreviousPage = () => {
    if (!table.getCanPreviousPage()) return;
    if (setPage) {
      setPage((prev) => prev - 1);
    }

    table.previousPage();
  };

  const handleGlobalFilter = (e) => {
    if (setSearch) {
      setSearch(e.target.value);
      setPagination((prev) => ({
        ...prev,
        pageIndex: 0,
      }));
      return;
    }
    table.setGlobalFilter(e.target.value);
  };

  // Configuração dos dados da tabela
  const tableData = React.useMemo(() => (data?.length > 0 ? data : []), [data]);

  // Apenas demonstração e configuração das colunas
  const tableColumns = React.useMemo(() => {
    if (columns && columns.length > 0) {
      return columns.map((col) => ({
        ...col,
        size: col.size,
        sort: col.sort ?? true,
      }));
    }
    return [
      {
        accessorKey: "corporate_reason",
        header: "Nome da empresa",
        size: 150,
      },
      { accessorKey: "branch_activity", header: "Ramo", size: 100 },
      { accessorKey: "name", header: "Contato", size: 150 },
      { accessorKey: "cell_phone", header: "Telefone", size: 120 },
      {
        header: "Ação",
        Cell: () => (
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaRegEdit
              style={{ fontSize: "20px", width: "100%", height: "100%" }}
            />
          </div>
        ),
      },
    ];
  }, [columns]);

  // Funções de interatividade
  function handleSearch(e) {
    e.stopPropagation();

    setIsSearch(!isSearch);
  }

  // Configurações da tabela, também demonstração

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    state: {
      pagination,
    },
    // Filtro global
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    autoResetPageIndex: false,
    onPaginationChange: setPagination,
  });

  return (
    <T.MainTableContainer
      $variant={variant}
      $padding={isActive ? "0 2rem" : "0"}
      $width={isActive ? "90%" : "97%"}
    >
      <T.TitleTable style={style}>{title}</T.TitleTable>
      <T.TableArea>
        {header && (
          <Header variant="table">
            <Input
              variant="expandable-input"
              placeholder="Digite uma palavra chave..."
              value={search && search}
              className={isSearch ? "expand-input" : ""}
              onChange={handleGlobalFilter}
              onClick={handleSearch}
            >
              <IoSearch />
            </Input>
            {filterModal}
          </Header>
        )}
        <T.Container>
          <T.TableWrapper>
            {isLoading && (
              <T.LoaderContainer className={isLoading ? "" : "hidden-load"}>
                <Loader />
              </T.LoaderContainer>
            )}
            <T.Table $width={`${table.getTotalSize()}px`}>
              <T.Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <T.Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <T.Th key={header.id} $width={`${header.getSize()}px`}>
                        <T.ThContent>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.columnDef.sort && sort && (
                            <T.Order>
                              <LuArrowUpAZ
                                className={`${
                                  header.column.getIsSorted() === "desc"
                                    ? "desc"
                                    : ""
                                }`}
                              />
                              <LuArrowDownUp
                                className={`${
                                  header.column.getIsSorted() ? "" : "default"
                                }`}
                              />
                              <LuArrowDownAZ
                                onClick={header.column.getToggleSortingHandler()}
                                className={`${
                                  header.column.getIsSorted() === "asc"
                                    ? "asc"
                                    : ""
                                }`}
                              />
                            </T.Order>
                          )}
                        </T.ThContent>
                        <T.Resizer
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`}
                        />
                      </T.Th>
                    ))}
                  </T.Tr>
                ))}
              </T.Thead>
              {!isLoading && (
                <T.Tbody>
                  {table?.getRowModel()?.rows?.length === 0 ? (
                    <T.Tr>
                      <T.Td colSpan={tableColumns.length} $textAlign="center">
                        Nenhum registro encontrado
                      </T.Td>
                    </T.Tr>
                  ) : (
                    table.getRowModel().rows.map((row) => (
                      <T.Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <T.Td
                            key={cell.id}
                            className={cell.column.columnDef.className || ""}
                            $width={`${cell.column.getSize()}px`}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </T.Td>
                        ))}
                      </T.Tr>
                    ))
                  )}
                </T.Tbody>
              )}
            </T.Table>
          </T.TableWrapper>
        </T.Container>
        {isPagination && (
          <Footer variant={"table"}>
            <Text variant="small" color={theme.colors.lightGray2}>
              {table.getState().pagination.pageIndex + 1} -{" "}
              {table.getPageCount()} de {table.getPageCount()}
            </Text>

            {/* Páginação */}
            <Button
              variant="icon"
              onClick={handlePreviousPage}
              disabled={!table.getCanPreviousPage()}
            >
              <IoIosArrowBack />
            </Button>
            <Button
              variant="icon"
              onClick={handleNextPage}
              disabled={!table.getCanNextPage()}
            >
              <IoIosArrowForward />
            </Button>
          </Footer>
        )}
      </T.TableArea>
    </T.MainTableContainer>
  );
};
