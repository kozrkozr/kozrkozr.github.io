import React, { useEffect, useState } from 'react';
import './Recipe-info.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { FoodType, getRecipeById, RecipeFull } from './api';

function RecipeInfo() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Partial<RecipeFull>>({});
  const navigate = useNavigate();

  const vegetarianIconUrl = `${process.env.PUBLIC_URL}/icons/vegetarian.svg`;
  const veganIconUrl = `${process.env.PUBLIC_URL}/icons/vegan.svg`;

  useEffect(() => {
    const fetchData = async () => {
      const recipe = await getRecipeById(id!);

      setRecipe(recipe);
    };

    fetchData();
  }, []);

  return (
      <div className="recipe-info">
        <div className="recipe-info__cover mb-10" style={{ backgroundImage: `url(${recipe.imgUrl})` }}>
          <div className="recipe-info__nav-btn d-flex align-center justify-center" onClick={() => navigate('/recipes')}>
            <img src={`${process.env.PUBLIC_URL}/icons/arrow-back.svg`} />
          </div>
        </div>

        <div className="recipe-info__name px-24 pb-16">
          <div className="font-weight-500 font-size-md mb-16">{recipe.name}</div>
          <div className="font-weight-300 mb-16">{recipe.comment}</div>
          <div className="d-flex">
            <img src={recipe.foodType?.type === FoodType.VEGETARIAN ? vegetarianIconUrl : veganIconUrl} />
            <span className="font-weight-300 font-size-xsm color-muted">{recipe.foodType?.name}</span>
          </div>
        </div>

        <div className="recipe-info__icons d-flex justify-around px-24 pt-24 mb-72">
          <div className="recipe-info__icons-item d-flex flex-column align-center">
            <img className="mb-4" src={`${process.env.PUBLIC_URL}/icons/clock-black.svg`} />
            <span className="font-weight-300 color-muted">{recipe.cookingTime} хвилин</span>
          </div>

          <div className="recipe-info__icons-item d-flex flex-column align-center">
            <img className="mb-4" src={`${process.env.PUBLIC_URL}/icons/people.svg`} />
            <span className="font-weight-300 color-muted">{recipe.numberOfServings} порції</span>
          </div>

          <div className="recipe-info__icons-item d-flex flex-column align-center">
            <img className="mb-4" src={`${process.env.PUBLIC_URL}/icons/calories.svg`} />
            <span className="font-weight-300 color-muted">{recipe.calories} калорій</span>
          </div>
        </div>

        <div className="recipe-info__ingredients px-24 mb-72">
          <div className="bordered-title mb-12">Інгредієнти</div>
          <div className="recipe-info__ingredients-grid">
            {recipe.ingredients?.map((ingredient, index) => (
              <div key={index} className="recipe-info__ingredients-grid-item font-weight-300">
                {ingredient}
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-info__preparations px-24 mb-52">
          <div className="bordered-title mb-12">Приготування</div>
          <div className="recipe-info__preparations-steps">
            {recipe.preparationSteps?.map((step, index) => (
              <div key={index} className="recipe-info__preparations-steps-item font-weight-300 mb-20">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default RecipeInfo;
