import _ from 'lodash';
// import printMe from './print.js';
// import Print from './print';

function component() {
    const element = document.createElement('div');
//     const btn = document.createElement('button');

//     // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack', '中文'], ' ');

    // element.onclick = Print.bind(null, 'Hello webpack!');


//     // btn.innerHTML = 'Click me and check the console!';
//     // btn.onclick = printMe;

//     // element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// async function getComponent() {
    // const { default: _ } = await import('lodash');
    // return import('lodash')
        // .then(({ default: _ }) => {
            // const element = document.createElement('div')

            // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

            // return element;
        // })
        // .catch(error => 'An error eccured while loading the component');
// }

// getComponent().then((component) => {
//     document.body.appendChild(component);
// });