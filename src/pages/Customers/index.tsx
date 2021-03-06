import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import { Button, Grid, Breadcrumbs, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';

interface Customer {
  id: string;
  full_name: string;
  birthday: Date;
}

const Customers: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setCustomers([
      {
        id: '1a1755eb-0dd2-4bde-b36d-5219c86751ff',
        full_name: 'Uemerson Pinheiro Junior',
        birthday: new Date(),
      },
      {
        id: 'c80c66be-c9d0-4e44-89b8-ee6b97b94040',
        full_name: 'Cryfort Stone',
        birthday: new Date(),
      },
    ]);
  }, []);

  const handleSave = () => {
    history.push('/customer');
  };

  const handleEdit = (id: string) => {
    history.push(`/customer/${id}`);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className={classes.breadcrumb}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/dashboard">
            Dashboard
          </Link>
          <Typography color="textPrimary">Clientes</Typography>
        </Breadcrumbs>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Novo cliente
        </Button>
      </Grid>
      <MUIDataTable
        title="Lista de clientes"
        data={customers}
        columns={[
          {
            name: 'Edit',
            label: 'Editar',
            options: {
              filter: false,
              sort: false,
              empty: true,
              print: false,
              download: false,
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      maxWidth: 50,
                      height: 58,
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      aria-label="edit"
                      onClick={() => {
                        handleEdit(customers[rowIndex].id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </div>
                );
              },
            },
          },
          { name: 'id', options: { display: 'excluded' } },
          {
            name: 'full_name',
            label: 'Nome completo',
            options: {
              customBodyRender: value => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      maxWidth: 350,
                      height: 58,
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {value}
                    </span>
                  </div>
                );
              },
            },
          },
          {
            name: 'birthday',
            label: 'Data de nascimento',
            options: {
              customBodyRender: value => {
                const formattedDate = format(new Date(value), 'dd/MM/yyyy');
                return (
                  <div
                    style={{
                      display: 'flex',
                      width: 110,
                      height: 58,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {formattedDate}
                  </div>
                );
              },
            },
          },
        ]}
        options={{
          pagination: false,
          responsive: 'standard',
          selectableRows: 'none',
          textLabels: {
            body: {
              noMatch: 'Nenhum registro encontrado',
              toolTip: 'Classificar',
            },
            pagination: {
              next: 'Próxima página',
              previous: 'Página anterior',
              rowsPerPage: 'Por página:',
              displayRows: 'de',
            },
            toolbar: {
              search: 'Busca',
              downloadCsv: 'Download CSV',
              print: 'Imprimir',
              viewColumns: 'Ver Colunas',
              filterTable: 'Filtrar Tabelas',
            },
            filter: {
              all: 'Todos',
              title: 'FILTROS',
              reset: 'LIMPAR',
            },
            viewColumns: {
              title: 'Ver Colunas',
              titleAria: 'Ver/Esconder Colunas da Tabela',
            },
            selectedRows: {
              text: 'registros(s) selecionados',
              delete: 'Excluir',
              deleteAria: 'Excluir registros selecionados',
            },
          },
        }}
      />
    </>
  );
};

export default Customers;
