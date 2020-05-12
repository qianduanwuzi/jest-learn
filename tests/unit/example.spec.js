// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// import Loading from '@/components/Loading.vue'
// import sinon from 'sinon' // 兴农
// var chai = require('chai') // 断言库
// var assert = chai.assert

// 测试套件
// describe('HelloWorld.vue', () => {
//   // mocha（摩卡）的玩法，JavaScript测试框架之一，类似的测试框架还有Jasmine、Karma、Tape等
//   // 测试用例
//   it('renders props.msg when passed', () => { // it.only it.skip
//     const msg = 'new message'
//     // 挂载组件，得到包裹器
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     // 断言
//     expect(wrapper.text()).toMatch(msg)
//   })
//   // 这是jest的玩法，推荐用这种
//   // test('两数相加结果为两个数字的和', () => {
//   //   expect(3).toBe(3);
//   // })
// })

// describe('Loading.vue', () => {
//   it('renders props.msg when passed', () => {
//     const wrapper = shallowMount(Loading, {
//       propsData: {
//         text: 'Loading',
//         indicatorColor: 'red',
//         size: 20
//       }
//     })
//     const indicatorStyle = wrapper.find('.loading__indicator').element.style
//     expect(wrapper.find('.loading__text').text()).toBe('Loading')
//     expect(indicatorStyle.borderColor).toContain('red')
//     expect(indicatorStyle.width).toContain('20px')
//   })
//   it('snapshot', () => {
//     const wrapper = shallowMount(Loading, {
//       propsData: {
//         text: 'Loading',
//         indicatorColor: 'red',
//         size: 20
//       }
//     })
//     expect(wrapper).toMatchSnapshot()
//   })
// })
// ---------------------------- sinon start -------------------------
// sinon.spy函数返回一个Spy对象，使用spy替换一个其它函数，用来检测函数是否被调用非常方便：
// describe('test sinon spy', () => {
//   var user = {
//     setName: function (name) {
//       this.name = name
//     }
//   }
//   var spy = sinon.spy(user, 'setName')
//   user.setName('chennan')
//   user.setName('yangping')
//   console.log(spy.called) // 是否spy窥探的方法被调用 output: true
//   console.log(spy.calledOnce) // 调用一次 output:false
//   console.log(spy.calledTwice) // 调用两次 output:true
//   console.log(spy.callCount) // 调用的次数 output: 2
//   console.log(spy.firstCall) // 获得第一次调用的所有信息
//   console.log(spy.firstCall.args) //  output:[ 'chennan' ]
//   console.log(spy.getCall(1)) // 获得第二次调用的所有信息 索引从0开始
//   // 非常重要的步骤--拆除spy
//   spy.restore()
// })

// function myFunction (condition, callback) {
//   if (condition) {
//     console.log(true)
//     callback()
//   }
// }

// describe('test sinon spy', () => {
//   it('should call the callback function', function () {
//     var callback = sinon.spy()
//     myFunction(true, callback)
//     assert(callback.calledOnce)
//   })
// })

// function saveUser (user, callback) {
//   $.post('/users', {
//     first: user.firstname,
//     last: user.lastname
//   }, callback)
// }
// // stubs拥有spies的全部功能，此外它还彻底的替换掉了目标函数。当你使用spy，原始的函数依然会被调用，但如果使用stub，原始函数就不会被执行了。
// describe('saveUser', function () {
//   it('should call callback after saving', function () {
//     // We'll stub $.post so a request is not sent
//     var post = sinon.stub($, 'post')
//     post.yields()
//     // We can use a spy as the callback so it's easy to verify
//     var callback = sinon.spy()
//     saveUser({ firstname: 'Han', lastname: 'Solo' }, callback)
//     post.restore()
//     assert(callback.calledOnce)
//   })
// })

// var stubone = {
//   stubone () {
//     console.log('this is a function')
//   }
// }

// describe('stub callsFake', () => {
//   it('test stub func', () => {
//     // 建一个存根函数 callsFake完全定义一个新函数功能
//     var stub = sinon.stub(stubone, 'stubone').callsFake(() => { console.log('changed') })
//     stubone.stubone() // output changed
//     stub.restore()
//   })
// })

// describe('stub withArgs', () => {
//   it('定义存根指定参数的行为', () => {
//     var callback1 = sinon.stub()
//     callback1.withArgs(2).returns(2) // callback(2) {return 2}
//     // callback1.withArgs(1).throws('this is error')
//     console.log(callback1(2)) // output 2
//     expect(callback1(2)).toBe(2)
//   })
// })

// describe('stub onCall', () => {
//   it('定义存根在第n个调用上的行为', () => {
//     const stub = sinon.stub()
//     stub.onCall(0).returns(1) // 第一次调用返回1
//     stub.onCall(1).returns(2)
//     stub.returns(3) // 其他都返回3
//     expect(stub()).toBe(1)
//     expect(stub()).toBe(2)
//     expect(stub()).toBe(3)
//     expect(stub()).toBe(3)
//   })
// })

// describe('stub withArgs onxxxCall', () => {
//   it('结合使用withArgs、onxxxCall', () => {
//     const stub = sinon.stub()
//     stub.withArgs(1).onFirstCall().returns(1).onSecondCall().returns(2) // 定义参数为1的行为
//     stub.returns(3)
//     expect(stub(1)).toBe(1)
//     expect(stub(1)).toBe(2)
//     expect(stub(1)).toBe(3)
//     expect(stub(1)).toBe(3)
//   })
// })

// describe('stub resetBehavior', () => {
//   it('将存根的行为重置为默认行为', () => {
//     const stub = sinon.stub()
//     stub.returns(54)
//     console.log(stub()) // output 54
//     stub.resetBehavior()
//     console.log(stub()) // output undefined
//     console.log(stub.called) // output true
//   })
// })

// describe('stub resetHistory', () => {
//   it('重置存根的历史记录', () => {
//     const stub = sinon.stub()
//     stub()
//     console.log(stub.called) // output true
//     stub.resetHistory()
//     console.log(stub.called) // output false
//   })
// })

// const testCb = {
//   testCb () {
//   }
// }

// describe('stub apis', () => {
//   it('测试stub api', () => {
//     const stub = sinon.stub()
//     stub.returnsArg(0) // 返回调用此根的第一个参数
//     console.log(stub(1)) // output 1
//     stub.returnsThis() // 使存根返回其this值
//     console.log(stub({ a: 1 })) // output { a: 1 }
//     stub.resetBehavior()
//     stub.resolves(1) // 返回一个promise
//     console.log(stub().then(res => console.log(res))) // output 1
//     // stub.throws()
//     // stub.throwsArg(0)
//     // console.log(stub(1))
//     stub.resetBehavior()
//     stub.callsArg(0) // 使存根调用第一个参数作为回调，第一个参数为func
//     console.log(stub(function () { return 1 }, (r) => { console.log(r) })) // output 1
//     stub.resetBehavior()
//     // stub.callsArgOn(0, this)
//     // console.log(stub(function () { return 1 }, (r, txt) => { console.log(r, txt) })) // output 1
//     // stub.yields([() => 3, () => 2])
//     // stub((r) => console.log(199, r), (r) => console.log(1991, r))
//     sinon.stub(testCb, 'testCb').yieldsTo('success', [1, 2, 3]) // 使间谍程序调用作为对象属性传递给间谍程序的回调。
//     testCb.testCb({ success: (r) => console.log(r) })
//   })
// })

// const obj = {}
// obj.sum = function sum (a, b) {
//   return a + b
// }

// describe('stub callThrough', () => {
//   it('当没有条件存根匹配时，则调用包装到存根中的原始方法。', () => {
//     const stub = sinon.stub(obj, 'sum')
//     stub
//       .withArgs(2, 2)
//       .callsFake(function foo () {
//         return 'bar'
//       })
//     stub.callThrough()
//     console.log(obj.sum(2, 2)) // output 'bar'
//     console.log(obj.sum(2, 1)) // output 3
//   })
// })

// describe('stub mock', () => {
//   it('mock的测试', function () {
//     var myAPI = {
//       method: function () {
//         console.info('运行method')
//       },
//       func: function () {
//         console.info('运行method')
//       }
//     }

//     var mock = sinon.mock(myAPI)
//     mock.expects('method').once().returns(2)
//     mock.expects('func').twice()

//     console.log(myAPI.method()) // output 2
//     myAPI.func()
//     myAPI.func()

//     mock.verify()
//   })
// })

// ---------------------------- sinon end --------------------------------------------------------------------

// ---------------------------- expect start -----------------------------------------------------------------
describe('测试 expect', () => {
  it('learn expect api', () => {
    expect('test').toBe('test') // output true
    expect(1).toBe(1) // output true
    expect(true).toBe(true) // output true
  })

  expect.extend({
    toBeWithinRange (received, floor, ceiling) {
      // console.log(received)
      const pass = received >= floor && received <= ceiling
      if (pass) {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: true
        }
      } else {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: false
        }
      }
    }
  })
  it('numeric ranges', () => {
    expect(100).toBeWithinRange(90, 110)
    expect(101).not.toBeWithinRange(0, 100)
  })

  const can1 = {
    flavor: 'grapefruit',
    ounces: 12
  }
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12
  }

  it('have all the same properties', () => {
    expect(can1).toEqual(can2) // 递归比较对象实例的所有属性 ===
  })
  it('are not the exact same can', () => {
    expect(can1).not.toBe(can2) // 比较原始值或检查对象实例的引用一致性
    expect(can1.flavor).toBe('grapefruit')
    expect(can1.flavor).toBe(can2.flavor)
    expect(0.2 + 0.1).not.toBe(0.3)
    expect(0.2 + 0.1).toBeCloseTo(0.3) // 浮点
  })

  // const expected = ['Alice', 'Bob']
  // console.log(expect.arrayContaining(expected))
  // expect(['Alice', 'Bob', 'Eve']).arrayContaining(expected)
  test('resolves to lemon', async () => {
    // make sure to add a return statement
    await expect(Promise.resolve('lemon')).resolves.toBe('lemon') // resolve用来解值
    await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus')
  })
})
