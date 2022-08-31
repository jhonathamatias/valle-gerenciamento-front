import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

import Layout from "../Layout";
import ProductGrid from './ProductGrid';

export default function Products() {
  return (
    <Layout
      pageTitle="Produtos"
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          width: 120,
          cursor: 'pointer',
          '&:hover': {
            '& > span': {
              color: '#009ee3',
            }
          }
        }}
        alignItems="center"
        flexDirection="column"
      >
        <Fab color="primary" aria-label="add"
          sx={{
            boxShadow: 'none'
          }}
        >
          <AddIcon />
        </Fab>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          align='center'
          mt={1}
          mb={1}
          color="GrayText"
          component='span'
        >
          Cadastrar Produto
        </Typography>
      </Box>
      <Divider />
      <Grid item xs={12} md={8} lg={9}>
        <ProductGrid />
      </Grid>
    </Layout>
  );
}