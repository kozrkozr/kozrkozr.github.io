import React, { useEffect, useState } from 'react';
import './Recipes.scss';
import DynamicHeader from '../../components/layout/DynamicHeader';
import ButtonsRadio from '../../components/buttons-radio/ButtonsRadio';
import { getMealTypes, getRecipes, MealType, RecipeFull, TypeName } from './api';
import RecipePreview from './Recipe-preview';

function Recipes() {
  const [mealTypes, setMealTypes] = useState<TypeName<MealType>[]>([]);
  const [recipes, setRecipes] = useState<RecipeFull[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const mealTypes = await getMealTypes();
      const initialRecipes = await getRecipes(MealType.BREAKFAST);

      setMealTypes(mealTypes);
      setRecipes(initialRecipes);
    };

    fetchData();
  }, []);

  const fetchRecipesByMealType = async (mealType: MealType) => {
    const recipes = await getRecipes(mealType);
    setRecipes(recipes);
  };

  return (
    <div className="recipes">
      <div className="mb-52 position-sticky">
        <DynamicHeader title={'Рецепти'} />
      </div>

      <div className="background-light-brown py-40 px-24 mb-40">
        <p className="font-weight-300">
          &nbsp;&nbsp;У кожній страві із списку використовуються корисні для здоров’я продукти, які не завдають шкоди організму.
          <br />
          &nbsp; Рецепти, які не залишать байдужим нікого.
        </p>
      </div>

      <div className="mb-40 px-24">
        <ButtonsRadio
          options={mealTypes}
          displayOptionFn={(mealType: TypeName<MealType>) => mealType.name}
          extractOptionValueFn={(mealType: TypeName<MealType>) => mealType.type}
          handleSelectedOptionFn={(mealType: TypeName<MealType>) => fetchRecipesByMealType(mealType.type)}
        />
      </div>

      <div className="d-flex flex-column px-24">
        {recipes.map((recipe) => (
          <div className="w-100 mb-72" key={recipe.id}>
            <RecipePreview recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
