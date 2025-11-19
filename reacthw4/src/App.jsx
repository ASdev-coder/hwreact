import logo from './logo.svg';
import './App.css';
import MiniQuiz from './components/MiniQuiz';

function App() {
  return (
    <div className="App">
      <MiniQuiz/>
    </div>
  );
}

export default App;


// “Mini Quiz”

// Опис

// У стані зберігається:
// index поточного питання
// список питань
// кількість правильних відповідей

// Користувач вибирає відповідь.
// Якщо правильна — +1 бал.
// Кнопка “Next question”.

// Після останнього питання — відображається результат.




// const questions = [
//   {
//     id: 1,
//     question: "Яка мова виконується в браузері?",
//     answers: ["Python", "JavaScript", "PHP"],
//     correct: "JavaScript",
//   },
//   {
//     id: 2,
//     question: "Який тег використовується для заголовка?",
//     answers: ["<span>", "<h1>", "<ul>"],
//     correct: "<h1>",
//   },
//   {
//     id: 3,
//     question: "Що таке React?",
//     answers: ["Мова програмування", "Фреймворк", "Бібліотека"],
//     correct: "Бібліотека",
//   },
// ];