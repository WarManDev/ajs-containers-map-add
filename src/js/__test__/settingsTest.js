import Settings from '../Settings';

test('проверка метода Settings.settings()', () => {
  const test = new Settings();
  const result = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);

  expect(test.settings).toEqual(result);
});

test('проверка метода Settings.settings()', () => {
  const test = new Settings();
  test.userSettings.set('theme', 'grey');
  const result = new Map([
    ['theme', 'grey'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(test.settings).toEqual(result);
});
