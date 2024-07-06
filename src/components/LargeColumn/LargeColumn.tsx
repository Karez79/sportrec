import React from 'react';
import './LargeColumn.css';
import postImage1 from  '../../assets/postImage1.jpg';// Замените на свои изображения
import postImage2 from '../../assets/postImage2.jpg';
import postImage3 from '../../assets/postImage3.jpg';
import postImage4 from '../../assets/postImage4.jpg';
import postImage5 from '../../assets/postImage5.jpg';
import postImage6 from '../../assets/postImage6.jpg';

const LargeColumn: React.FC = () => {
  return (
    <div className="large-column">
      <div className="post-header">
        <p>Спортивная Борьба • 12 марта, 2024 в 16:03</p>
        <h2>Илья Бессонов дал интервью для телеканала Россия-1</h2>
        <p>Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ... <a href="#">Читать больше</a></p>
      </div>
      <div className="post-images">
        <img src={postImage1} alt="Post" />
        <img src={postImage2} alt="Post" />
        <img src={postImage3} alt="Post" />
        <img src={postImage4} alt="Post" />
        <img src={postImage5} alt="Post" />
        <img src={postImage6} alt="Post" />
      </div>
      <div className="post-footer">
        <span>4.1K</span>
        <span>4</span>
      </div>
      <div className="comments-section">
        <div className="comment">
          <p>Вадим Давыдов</p>
          <p>Наконец-то! Рад, что он вернулся в спорт</p>
          <span>15 минут назад</span> <a href="#">Ответить</a>
        </div>
        <div className="comment">
          <p>Артем Еременко</p>
          <p>Вадим, согласен! Уже давно ждал интервью!</p>
          <span>30 секунд назад</span> <a href="#">Ответить</a>
        </div>
        <div className="comment">
          <p>Константин Романов</p>
          <p>Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.</p>
          <span>20 минут назад</span> <a href="#">Ответить</a>
        </div>
        <div className="comment">
          <p>Анастасия Осипова</p>
          <p>Наш чемпион! Горжусь! 💜</p>
          <span>20 минут назад</span> <a href="#">Ответить</a>
        </div>
        <button className="show-all-comments">Смотреть все комментарии</button>
      </div>
    </div>
  );
};

export default LargeColumn;
