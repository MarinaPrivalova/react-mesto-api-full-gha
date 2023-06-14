import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;

  const currentUser = React.useContext(CurrentUserContext);

  /**Определить, являемся ли мы владельцем текущей карточки*/
  const isOwn = card.owner._id === currentUser._id;
  /**Переменная для className кнопки удаления карточки */
  const cardTrashBtnClassName = (`card__button-trash ${isOwn ? 'card__button-trash_visible' : ''}`);

  /**Определить, есть ли у карточки лайк, поставленный текущим пользователем*/
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  /**Переменная для className кнопки лайка карточки */
  const cardLikeBtnClassName = (`card__button-like ${isLiked ? 'card__button-like_active' : ''}`);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img className="card__photo" src={card.link} alt={card.name} onClick={handleCardClick} />
      <div className="card__container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeBtnClassName} type="button" aria-label="Нравится" onClick={handleCardLike} ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
        <button className={cardTrashBtnClassName} type="button" aria-label="Удалить" onClick={handleCardDelete}></button>
      </div>
    </li>
  );
}

export default Card;