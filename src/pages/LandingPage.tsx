import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useCategories } from "../hooks/useCategories";

const featuredProducts = [
  {
    id: 1,
    name: "Vintage Camera",
    price: 89.99,
    image: "https://source.unsplash.com/random/300x200?camera",
    description: "Classic film camera in excellent condition",
  },
  {
    id: 2,
    name: "Designer Chair",
    price: 149.99,
    image: "https://source.unsplash.com/random/300x200?chair",
    description: "Mid-century modern chair, gently used",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 299.99,
    image: "https://source.unsplash.com/random/300x200?smartphone",
    description: "Last year's model, perfect condition",
  },
  {
    id: 4,
    name: "Bicycle",
    price: 199.99,
    image: "https://source.unsplash.com/random/300x200?bicycle",
    description: "Mountain bike, barely used",
  },
];

const LandingPage = () => {
  const { categories, loading, error } = useCategories();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to EcoFinds
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Sustainable Marketplace for Second-Hand Treasures
          </Typography>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Browse by Category
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {categories.map((category) => (
              <Grid item key={category.id}>
                <Button variant="outlined">{category.name}</Button>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Featured Products Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
