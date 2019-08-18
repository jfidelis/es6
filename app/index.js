import Message from './model/message.model';
/* eslint no-console: 0 */
/* eslint no-undef: 0 */
/* eslint indent: 0 */

console.log('Index started');
console.dir(new Message());

document.getElementById('send').onclick = () => {
    const m = new Message(document.getElementById('message').value);
    document.getElementById('messages').innerHTML +=
    `<li>${m.text} - ${m.created} </li>`;
};

if (module && module.hot) {
    module.hot.accept();
}
