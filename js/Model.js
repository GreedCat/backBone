/**
 * 	模型 - Model
 */


/**
*	模型定义：
*	模型用来存储应用的所有数据，以及直接和数据操作相关的逻辑。
*	Backbone中的模型类是Backbone.Model它包含了数据存储，数据验证，以及数据发生变动时触发相关动作。
*	一般可以把模型与后端绑定(ORM)，模型改变的同时向后端发起请求(Ajax)更新数据（数据库）。也有把模型和DOM元素绑定，模型改变时更新HTML界面。
*/

// 创建模型

	// 直接new一个Backbone.Model，它返回一个Model实例
	var Model = new Backbone.Model();
	// 扩展Backbone.Model,定义自己的模型类(构造器)
	var Grace = Backbone.Model.extend({})

// 添加属性

	// 直接在实例中给Grace类添加属性
	var grace =  new Grace({name:'Grace',age:'20',location:'南京',created_at:new Date()});

	// 在实例化对象中使用 set 添加属性或者修改默认属性
	var graceObj = new Grace();
	graceObj.set({name:'Grace',age:'20',location:'南京',created_at:new Date()});


// 保存属性到服务器端
	// 使用save方法保存属性打服务器端 ,save成功后会依次触发模型的“change”、“request”、“sync”事件。如果监听了这些事件，那么回调将得到执行
	var	graceObj_ = new Grace();
	// 第一次使用save相当于create也就是添加数据到服务器端

	// graceObj_.save({'name':'Grace','age':20});

	// 第二次使用save相当于update(更新)第一次提交到服务器端的数据

	// graceObj_.save({'name':'Grace_1','age':22});
 
	// 可以传success和error两个回调函数以处理保存成功和保存失败场景,如：

	// graceObj_.save({'name':'Grace_1','age':22},{
	// 	success	: function(){},
	// 	error	: function(){}
	// });




// 获取属性
	
	// 使用model.attributes获取所有属性返回一个对象
	grace.attributes;

	// 使用model.toJSON()获取所有属性返回一个对象
	grace.toJSON();

	// 使用JSON.stringify()将对象转换成JSON形式
	JSON.stringify(grace);

	// 使用has(属性名)判断model这个对象里面是否有某个属性 ,返回 truue / false
	grace.has('name');

	// 使用model.get(属性值)获取某个属性的属性值
	grace.get('name');

	// 使用model.unset(属性值)删除某个属性的属性值
	grace.unset('name');

	// 使用model.clear()清空所有属性
	grace.clear();




	// 定义模型
	var Grace = Backbone.Model.extend({
		//defaults属性的值一个对象 ,可以在defaults属性中添加属性和对应属性值 ，这样创建模型实例后这个实例就有默认的属性
		defaults: {
			name: "Garce",
			age : 20,
			date: new Date()
		},
		//基于某一个模型创建了实例之后会立即去调用initialize方法，在这个方法里我们可以去监听属性变化的事件等 ....
		initialize: function(){
			// this为被创建的对象/为被实例化的对象
			console.log("欢迎你来到backbone的世界"+this.get('name'));

			/**
			* 当我们使用 set 方法，去给对象设置属性的时候，如果新设置的属性的值照原来的值发生了改变，就会在这个模型上面触发一个 change 事件...
		 	* 同时也会在这个特定的发生变化的属性上面触发一个 change 事件 ... 这个事件的名字可以使用 change 后面加上冒号，再加上这个属性的名字来表示。
		 	* 比如，如果 title 的值发生了变化，就会触发一个 change 事件，还会触发一个 change:title 的事件。
		 	*/

		 	// this表示当前模型的对象,on方法第一个参数为监听事件的名字(change) ，第二个参数处理事件的函数（可以带两个参数，分别是当前模型对象(model)和选项(options)）
		 	this.on('change',function(model,options){
		 		console.log("属性的值发生了变化");
		 	});

		 	// 监听name属性发生变化事件 ,  当model.set()后会先触发change:name这个事件再触发change事件
		 	this.on('change:name',function(model,options){
		 		console.log("name属性的值发生了变化");
		 	});

		 	// 第三个参数中silent为true时，将不会触发“change”事件。如：
		 	// grace.set({'name':'Grace','age',20},{silent:true})



			// 监听验证失败之后执行的事件, 参数为当前模型对象及error错误信息 ， 这边的error指向validate方法中定义的错误信息
			this.on('invalid',function(model,error){
				console.log(error);
			});
		},

		/**
		* 在用 set，或者 save 方法，去设置属性的值，还有把模型保存到数据库之前，都可以先去验证一下属性的值，
		* 验证通过以后，才能去执行这些动作，不然的话，就会返回一个 false ，还有一条事先设置好的错误信息。
		* function支持两个参数 ，第一个为属性(attributes),第二个为选项(options)
		*/

		// 注： 验证失败则不会执行change事件

		// 执行方法时 需带上{validate,true} 如：grace.set('age',18,{validate:true})
		validate: function(attributes,options){
			if(attributes.age < 20){
				return "哇噢 , 小鲜肉 !"
			}else{
				return "欧巴 , I love you !"
			}
		}

	});
