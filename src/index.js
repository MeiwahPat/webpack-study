import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
// import Print from './print';
import './styles.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    const element1 = document.createElement('pre');

//     // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // element.onclick = Print.bind(null, 'Hello webpack!');

    element1.innerHTML = [
        'hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    element.appendChild(element1);

    return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}

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