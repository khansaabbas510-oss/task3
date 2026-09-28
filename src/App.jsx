import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";
import StudentList from "./StudentList";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My Products</h1>

      <ProductCard
        title="Laptop"
        price="800"
        category="Electronics"
      />

      <ProductCard
        title="Running Shoes"
        price="120"
        category="Footwear"
      />

      <LikeButton />

      <StudentList />
    </div>
  );
}

export default App;