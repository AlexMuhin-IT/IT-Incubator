// Вывод приветствия
// const app = document.querySelector('#app');
// function getName() {
//   return 'World'
// }
// app.innerHTML = `<h1>Hello, ${getName()} </h1>`;
// ================================================

//Выводим кнопки
// const app = document.querySelector('#app');

// function createButton(name, style) {
//   return `<button style="${style}">${name}</button>`
// }

// app.innerHTML = `
// ${createButton('Update', 'background-color: navy; color: white; ')}
// ${createButton('Like', 'background-color: maroon; color: white; ')}`;
// =============================================

//Добавление видео на стринцу
// function createButton(action, style) {
//   return `<button style='${style}'>${action} Video</button>`;
// }

// function createHeader(title, style) {
//   return `<h1 style='${style}'>${title}</h1>`;
// }
// const videoSrc =
//   'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4';

// function createVideo(videoSrc, style) {
//   return `<video src= '${videoSrc}' style='${style}' controls></video>`;
// }
// const app = document.getElementById('app');

// app.innerHTML = `
// ${createHeader('Видео с кроликом', 'font-size: 32px;')}
// ${createVideo(videoSrc, 'width: 300px; height: 200px;')} <br>
// ${createButton('Like Video', 'background-color: green; color: white; ')}
// ${createButton('Dislike Video', 'background-color: red; color: white; ')}`;
// =============================================

const app = document.getElementById('app');

function createHeader() {
  return `<h1> My Computer Setup</h1>`;
  
}
function getImage(name, width, height) {
  return `<img src="${name}"  width="${width}" height="${height}">`;
}

app.innerHTML = `
  ${createHeader()}
  ${getImage(
    'http://images.unsplash.com/photo-1547082299-de196ea013d6',
    '300px',
    '200px',
  )}
`;