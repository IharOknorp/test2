import React from 'react';
import {charactersHerous, hash} from "./constans/marvel";
const fetchItems = () => {
  return fetch(charactersHerous + hash)
    .then(res => res.json())
    .then(res => res.data.results[0].id)
    .catch(err => console.log(err));
};
test('fetch', async () => {
  const result = await fetchItems()
  expect(result).toEqual(1011334)
});
