import test from 'node:test';
import assert from 'node:assert/strict';
import {filterProducts, nextImage} from '../src/catalog.js';
const items=[{name:'Jute woven rug',category:'Jute Carpets',city:'Delhi',material:'Jute',supplier:'A'},{name:'Office carpet',category:'Office Carpet',city:'Noida',material:'PVC',supplier:'B'}];
test('search trims and ignores case',()=>assert.equal(filterProducts(items,{query:' JUTE '}).length,1));
test('combines category and city filters',()=>assert.equal(filterProducts(items,{category:'Jute Carpets',city:'Noida'}).length,0));
test('empty query returns all and unknown search returns none',()=>{assert.equal(filterProducts(items,{}).length,2);assert.equal(filterProducts(items,{query:'xyz'}).length,0)});
test('carousel wraps both directions',()=>{assert.equal(nextImage(2,1,3),0);assert.equal(nextImage(0,-1,3),2)});
