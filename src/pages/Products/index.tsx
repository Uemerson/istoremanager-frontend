import React, { useState, useEffect } from 'react';

import {
  Button,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  Checkbox,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';

interface Product {
  id: string;
  description: string;
  cash_price: number;
  forward_price: number;
  sample: boolean;
  original: boolean;
}

const Products: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([
      {
        id: '1a1755eb-0dd2-4bde-b36d-5219c86751ff',
        description: 'Produto 1',
        cash_price: 10.0,
        forward_price: 15.0,
        sample: false,
        original: true,
      },
      {
        id: 'c80c66be-c9d0-4e44-89b8-ee6b97b94040',
        description: 'Produto 2',
        cash_price: 20.0,
        forward_price: 25.0,
        sample: true,
        original: false,
      },
    ]);
  }, []);

  const handleSave = () => {
    history.push('/product');
  };

  const handleEdit = (id: string) => {
    history.push(`/product/${id}`);
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
          <Typography color="textPrimary">Produtos</Typography>
        </Breadcrumbs>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Novo produto
        </Button>
      </Grid>
      <MUIDataTable
        title="Lista de produtos"
        data={products}
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
                        handleEdit(products[rowIndex].id);
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
            name: 'description',
            label: 'Descrição',
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
            name: 'cash_price',
            label: 'Preço à vista',
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
                      {value.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                );
              },
            },
          },
          {
            name: 'forward_price',
            label: 'Preço a prazo',
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
                      {value.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                );
              },
            },
          },
          {
            name: 'sample',
            label: 'Amostra',
            options: {
              customBodyRender: value => {
                return <Checkbox checked={value} disabled />;
              },
            },
          },
          {
            name: 'original',
            label: 'Original',
            options: {
              customBodyRender: value => {
                return <Checkbox checked={value} disabled />;
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

export default Products;
