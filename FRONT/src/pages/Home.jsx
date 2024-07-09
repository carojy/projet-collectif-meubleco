// import la liste des produit du fichier ProductList.js

import ProductList from '../components/ProductList';




const Home = () => {

  return (
    
    <div>
      <h1>Meubles de seconde main</h1>
      <ProductList/>  {/* affichage de toutes la liste produits  */}   
    </div>

  );

};

export default Home;
