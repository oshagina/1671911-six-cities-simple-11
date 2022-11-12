import React, { useState } from 'react';

function ReviewsForm(){
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });
  const selectChangeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };
  const ratingValues = [
    1,
    2,
    3,
    4,
    5,
  ];

  return (
    <form className="reviews__form form" action="#todo" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.map((ratingValue) => (
          <>
            <input className="form__rating-input visually-hidden" onChange={selectChangeHandler} value={ratingValue} name="rating" id={`${ratingValue}-stars`} type="radio" />
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        )
        )}
        <textarea className="reviews__textarea form__textarea" onChange={selectChangeHandler} value = {formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled >Submit</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewsForm;
