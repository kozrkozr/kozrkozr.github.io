import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/about/About';
import Books from './routes/books/Books';
import HealthyFood from './routes/about/HealthyFood';
import WholePlantDiet from './routes/about/WholePlantDiet';
import Vegetarianism from './routes/about/Vegetarianism';
import StepToHealthyFood from './routes/about/StepToHealthyFood';
import PlacesToEat from './routes/places-to-eat/PlacesToEat';
import Recipes from './routes/recipes/Recipes';
import RecipeInfo from './routes/recipes/Recipe-info';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<Books />} />
        <Route path="/healthy-food" element={<HealthyFood />} />
        <Route path="/healthy-food/step" element={<StepToHealthyFood />} />
        <Route path="/whole-plant-diet" element={<WholePlantDiet />} />
        <Route path="/vegetarianism" element={<Vegetarianism />} />
        <Route path="/about" element={<About />} />
        <Route path="/places-to-eat" element={<PlacesToEat />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
