module.exports = {
  name: 'todo-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todo-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
