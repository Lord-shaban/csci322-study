import assert from 'node:assert/strict';
import {courses} from '../content.js';
import {questions,written} from '../questions.js';
import {pearson,chiSquare,allocate} from '../math.js';
assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
for(const q of questions){assert.ok(courses.some(c=>c.id===q.topic));assert.equal(q.options.length,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation&&q.source);}
assert.equal(pearson([1,2,3],[2,4,6]),1);
assert.equal(pearson([1,2,3],[6,4,2]),-1);
assert.equal(pearson([1,1,1],[2,3,4]),null);
assert.ok(Math.abs(pearson([-2,-1,0,1,2],[4,1,0,1,4]))<1e-12);
const chi=chiSquare([[250,200],[50,1000]]);
assert.deepEqual(chi.expected,[[90,360],[210,840]]);
assert.ok(Math.abs(chi.stat-507.9365079365)<1e-8);
assert.equal(chiSquare([[0,0],[1,2]]),null);
assert.equal(chiSquare([[10,10],[10,10]]).stat,0);
assert.deepEqual(allocate([735,2940,4148,1992,312],500),[36,145,205,98,16]);
console.log(`Verified ${courses.length} lessons, ${questions.length} MCQs, ${written.length} written questions; Pearson, chi-square and allocation calculations passed.`);
