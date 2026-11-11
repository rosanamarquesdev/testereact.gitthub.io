import React from "react";
import { Route, Routes } from "react-router-dom";

// Estruturas
import { Sidebar } from "../components/Sidebar";
import { Content, InnerContent, Layout } from "../components/Sidebar/style";
import { SidebarContext } from "../contexts/SidebarContext";

// Dashboards
import { ClientDashboard } from "../screens/Dashboards/client";
import { Dashboard } from "../screens/Dashboards/main";
// Updates
import { UpdateClients } from "../screens/Updates/client/index.jsx";
import { UpdateSupplierPf, UpdateSupplierPJ } from "../screens/Updates/supplier/index.jsx";

// Registers
import { RegisterClients } from "../screens/Registers/clients";
import {
  RegisterSupplierPF,
  RegisterSupplierPJ,
} from "../screens/Registers/suppliers";

// Tables
import { ClientTable } from "../screens/Tables/clients";
import { PfSupplierTable, PjSupplierTable } from "../screens/Tables/supplier";

// Outros
import { CreateSucess, UpdateSucess } from "../screens/RegisterSucess";
import { RegisterPjSucess, UpdatePjSucess } from "../screens/RegisterSucess/RegisterPjSucess/index.jsx";

export const PrivateRoutes = () => {
  const { isActive, isHover } = React.useContext(SidebarContext);

  return (
    <Routes>
      <>
        <Route
          path="/*"
          element={
            <Layout $isSidebarClosed={isActive}>
              <Sidebar />

              <Content className={`${isHover && "open-hover"}`}>
                <InnerContent>
                  <Routes>
                    {/* Falta criar o component de dashboard, deixei o h1 só para testar */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                      path="home"
                      element={<h1 style={{ fontSize: "2rem" }}>Home</h1>}
                    />
                    <Route path="cadastrar/cliente" element={<ClientTable />} />
                    <Route
                      path="cadastrar/cliente/novo"
                      element={<RegisterClients />}
                    />

                    {/* teste dashboard atualizado ranyer */}
                    <Route
                      path="cadastrar/cliente/visualizar"
                      element={<ClientDashboard />}
                    />
                    <Route
                      path="cadastrar/cliente/editar"
                      element={<UpdateClients />}
                    />
                    <Route
                      path="cadastrar/cliente/novo/sucesso"
                      element={<CreateSucess />}
                    />
                    <Route
                      path="cadastrar/cliente/editar/sucesso"
                      element={<UpdateSucess />}
                    />

                    <Route
                      path="cadastrar/fornecedor/pessoa/juridica"
                      element={<PjSupplierTable />}
                    />
                    <Route
                      path="cadastrar/fornecedor/pessoa/juridica/novo"
                      element={<RegisterSupplierPJ />}
                    />
                      <Route
                      path="cadastrar/fornecedor/pessoa/juridica/novo/sucesso"
                      element={<RegisterPjSucess />}
                    />
                      <Route
                      path="cadastrar/fornecedor/pessoa/juridica/editar/sucesso"
                      element={<UpdatePjSucess />}
                    />
                    <Route
                      path="cadastrar/fornecedor/pessoa/juridica/visualizar"
                      element={
                        <h1 style={{ fontSize: "2rem" }}>
                          Aqui é o dashboard do fornecedor!
                        </h1>
                      }
                    />
                    <Route
                      path="cadastrar/fornecedor/pessoa/juridica/editar"
                      element={<UpdateSupplierPJ />}
                    />

                    <Route
                      path="cadastrar/fornecedor/pessoa/fisica"
                      element={<PfSupplierTable />}
                    />
                    <Route
                      path="cadastrar/fornecedor/pessoa/fisica/novo"
                      element={<RegisterSupplierPF />}
                    />
                    <Route
                      path="cadastrar/fornecedor/pessoa/fisica/visualizar"
                      element={
                        <h1 style={{ fontSize: "2rem" }}>
                          Aqui é o dashboard do fornecedor!
                        </h1>
                      }
                    />
                    <Route
                      path="cadastrar/fornecedor/pessoa/fisica/editar"
                      element={<UpdateSupplierPf />}
                    />

                    <Route
                      path="cadastrar/produtos"
                      element={
                        <h1 style={{ fontSize: "2rem" }}>
                          {" "}
                          Aqui é a aba de cadastro de produtos!
                        </h1>
                      }
                    />
                    <Route
                      path="servico/venda"
                      element={
                        <h1 style={{ fontSize: "2rem" }}>
                          {" "}
                          Aqui é a aba de venda de produtos!
                        </h1>
                      }
                    />
                    <Route
                      path="servico/alocacao"
                      element={
                        <h1 style={{ fontSize: "2rem" }}>
                          {" "}
                          Aqui é a aba de alocação de produtos!
                        </h1>
                      }
                    />
                  </Routes>
                </InnerContent>
              </Content>
            </Layout>
          }
        />
        {/* <Route path="/home" element={<Navigate to="/home" />} /> */}
      </>
    </Routes>
  );
};
