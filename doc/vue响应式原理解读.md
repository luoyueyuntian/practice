vue的官方教程里面有一章，单独将如何vue的响应式实现原理是“Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter”，具体怎么实现的，其实可以从源码里面得到了解。

以下是简化版的原理，没有将依赖的收集和发出更新通知的代码包含进去，但是在关键的地址，我会以注释的方式指出：
<pre><code>function makeObjReactive(obj, key, value) {
    // 获取对象的属性的属性描述符
    const property = Object.getOwnPropertyDescriptor(obj, key)
    // 如果这个属性是不可修改的，则不能对其响应式化
    if (property && !property.configurable) return
    const getter = property && property.get
    const setter = property && property.set
    // 如果只有get方法，没有set方法，则表明已经部署了get方法，不需要再部署get方法，同时又没有部署set方式，说明该值不可修改，所以会忽略第三个参数
    if ((!getter && setter) && arguments.length === 2) {
        value = obj[key]
    }
    // 部署get、set方法
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function customGetter () {
            console.log('get', key)
            // 优先使用已有的getter获取
            // 这里形成了一个闭包，引用了外部变量
            // getter不能和obj.get的方法名一样，否则会形成循环引用
            const result = getter ? getter.call(obj) : value
            // 此处可以jiang
            return result
        },
        set: function customSetter (newValue) {
            // 如果有getter但是没有setter，则表示该值不可直接修改
            if (getter && !setter) {
                console.log('该值不可修改')
                return
            }
            console.log('set', key, newValue)
            // 优先使用已有的setter获取
            // 这里形成了一个闭包，引用了外部变量
            // setter不能和obj.set的方法名一样，否则会形成循环引用
            setter ? setter.call(obj, newValue) : val = newValue    
        }
    })
}</code></pre>

验证
<pre><code>在控制台输入：
var obj = {
    a: 12,
    b: 12,
    c: 14
}

defineReactive(obj, 'a')
defineReactive(obj, 'b')

obj.a // => 'get', 'a'
obj.a = 12 // => 'set','a', 12
obj.b // => 'get', 'b'
obj.b = 23 // => 'set','b', 23
obj.c // => 14
obj.c = 34 // => 34
</code></pre>