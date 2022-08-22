import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Layout from "../Layout";
import ProductGrid from './ProductGrid';
import { Link, Outlet } from 'react-router-dom';

export default function ProductList() {
  return (
    <
    //   pageTitle="Produtos"
    >
      <Grid item xs={12} md={8} lg={9}>
        <ProductGrid />
      </Grid>
      <Outlet />
    </>
  );
}