import fs from 'fs';
import update from 'react-addons-update';

let state = {
  order: JSON.parse(fs.readFileSync('./json/date.json', 'utf-8'))
}

const updateOrder = update(state.order, {
  receive: {
    $set: '부산시 해운대구 우동....'
  }
});

console.log(
  state.order,
  updateOrder,
  state.order === updateOrder
)

