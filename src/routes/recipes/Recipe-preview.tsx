import React from 'react';
import './Recipe-preview.scss';
import { CookingComplexity, FoodType, RecipeBase } from './api';
import { useNavigate } from 'react-router-dom';

const RecipePreview = ({ recipe }: { recipe: RecipeBase }) => {
  const vegetarianIconUrl = `${process.env.PUBLIC_URL}/icons/vegetarian.svg`;
  const veganIconUrl = `${process.env.PUBLIC_URL}/icons/vegan.svg`;

  const cookingComplexityDef: Record<CookingComplexity, string> = {
    [CookingComplexity.EASY]: 'легко',
    [CookingComplexity.MEDIUM]: 'не надто складно',
    [CookingComplexity.HARD]: 'складно'
  };

  const navigate = useNavigate();

  return (
    <div className="recipe-preview w-100" onClick={() => navigate(`/recipes/${recipe.id}`)}>
      <div className="mb-12 recipe-preview__cover w-100" style={{ backgroundImage: `url(${recipe.imgUrl})` }} />

      <div className="font-weight-500 font-size-md mb-12">{recipe.name}</div>

      <div className="d-flex align-center font-size-sm color-muted">
        {!!recipe.foodType && (
          <div className="d-flex align-center">
            <img src={recipe.foodType.type === FoodType.VEGETARIAN ? vegetarianIconUrl : veganIconUrl} />
            <span>{recipe.foodType.name}</span>
          </div>
        )}
        <div className="d-flex align-center ml-12">
          <img src={`${process.env.PUBLIC_URL}/icons/clock.svg`} />
          <span>{recipe.cookingTime} хв</span>
        </div>
        <div className="recipe-preview__complexity ml-12 d-flex align-center">
          <span className="recipe-preview__complexity-indicator filled" />
          <span
            className={
              'recipe-preview__complexity-indicator ml-2' +
              (recipe.cookingComplexity === CookingComplexity.MEDIUM || recipe.cookingComplexity === CookingComplexity.HARD
                ? ' filled'
                : '')
            }
          />
          <span
            className={'recipe-preview__complexity-indicator ml-2' + (recipe.cookingComplexity === CookingComplexity.HARD ? ' filled' : '')}
          />
          <span className="ml-4">{cookingComplexityDef[recipe.cookingComplexity]}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
