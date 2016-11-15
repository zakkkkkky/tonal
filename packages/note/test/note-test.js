var tape = require('tape')
var note = require('..')

tape('note: chroma', function (test) {
  test.deepEqual('Cb C Db D Eb E Fb F Gb G Ab A Bb B'.split(' ').map(note.chroma),
    [ 11, 0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11 ])
  test.deepEqual('C C# D D# E E# F F# G G# A A# B B#'.split(' ').map(note.chroma),
    [ 0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 0 ])
  test.end()
})

tape('note: toNote', function (test) {
  test.deepEqual('c fx dbb bbb c##-1 fbb6'.split(' ').map(note.toNote),
    [ 'C', 'F##', 'Dbb', 'Bbb', 'C##-1', 'Fbb6' ])
  test.end()
})

tape('note: pc', function (test) {
  test.deepEqual('a b0 d2 e# fb3 g###4 bbbb5 h j'.split(' ').map(note.pc),
    [ 'A', 'B', 'D', 'E#', 'Fb', 'G###', 'Bbbb', null, null ])
  test.end()
})
