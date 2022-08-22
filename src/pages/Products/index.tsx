import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

import Layout from "../Layout";
import ProductGrid from './ProductGrid';
import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <Layout
      pageTitle="Produtos"
    >
      <Outlet />
    </Layout>
  );
}