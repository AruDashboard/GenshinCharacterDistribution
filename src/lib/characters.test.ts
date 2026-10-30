import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import characters from '../data/characters.ts';
import { createRows, imageUrl } from './characters.ts';

test('places every character in the matching element and weapon cell', () => {
  const rows = createRows(characters);
  assert.equal(rows.flatMap((row) => row.cells.flat()).length, characters.characters.length);
  const cell = rows.find((row) => row.key === '雷')!.cells[
    characters.cols.findIndex((col) => col.key === '长柄武器')
  ];
  assert.equal(cell[0].name, '雷电将军');
  assert.equal(rows[0].cells[0].length, 0);
});
test('rejects characters whose categories would hide them from the table', () => {
  assert.throws(
    () =>
      createRows({ ...characters, characters: [{ ...characters.characters[0], element: '未知' }] }),
    /未定义/,
  );
});
test('all configured images exist and respect deployment base paths', () => {
  for (const item of [...characters.rows, ...characters.cols, ...characters.characters]) {
    assert.ok(existsSync(`public${item.image}`), item.image);
    assert.equal(imageUrl(item.image, '/table/'), `/table${item.image}`);
    assert.equal(imageUrl(item.image, '/'), item.image);
  }
});
