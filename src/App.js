import React from 'react';
import PropTypes from "prop-types";

// 더미 데이터 생성
const FoodILike = [
  {
    id: 1,
    name: "nameTest1",
    image: "imgTest1",
    rating: 5
  },
  {
    id: 2,
    name: "nameTest2",
    image: "imgTest2",
    rating: 4.9
  },
  {
    id: 3,
    name: "nameTest3",
    image: "imgTest3",
    rating: 4.8
  }
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h2> I LIKE {name}</h2>
      <h4>{rating}/5</h4>
      <h3> I LIKE {image}</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

// function renderFood(item) {
//   return <Food key={item.id} name={item.name} image={item.image} rating={item.rating} />

// }

function App() {
  // HTML 반환
  return (
    <div className="App">
      {/* map을 이용해 함수를 호출 */}
      {/* {FoodILike.map(renderFood)} */}
      {FoodILike.map(item => (
        <Food
          key={item.id}
          name={item.name}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  ); // return
}

export default App;
