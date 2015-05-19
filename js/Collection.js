/**
 * 	集合 - Collection
 */
	 var Collection = Backbone.Collection.extend({
	 	// 在这个集合里，可以设置一下 model 属性 .. 去指定一个跟这个集合相关的模型。这里我们设置成 Grace ...
	 	model	:Grace,

		// 在添加，删除，重置，更新，排序集合里面的模型的时候，都会触发相应的事件。我们可以在集合的 initialize 方法里面，去监听这些事件
	 	initialize	:function(){
	 		// 使用 on 方法，去监听这些事件 this.on ，表示为当前的这个集合对象去监听事件
	 		this.on({
				// 在添加新的模型到集合里的时候，会触发这个事件。
				// 处理这个事件的函数可以接受三个参数，第一个参数是被添加的模型，第二个参数是集合，第三个参数是一个选项
	 			'add':function(model,collection,options){
	 				console.log('ID:'+model.id+'模型添加到了集合里');
	 			},
	 			'remove':function(model,collection,options){
	 				console.log('ID:'+model.id+'模型从集合里删除掉了');
	 			},

	 			// 当监听change事件是的时候需要带参数{merge:true} 如：col3.add({id:1,title:'这是改过的'},{merge:true})
	 			'change':function(model,options){
	 				console.log('集合里的模型发生了变化');
	 			}
	 		})
	 	}
	 });


 /**
 * 	测试
 */
	// 创建几个模型，设置一下模型里的属性 。 这里我们可以添加一个 id 属性，这个属性的值可以标示模型的唯一性
	 var grace1 =  new Grace({id:1,title:'欢迎来到backBone的模型'});
	 var grace2 =  new Grace({id:2,title:'希望能早点学会backBone'});
	 var grace3 =  new Grace({id:3,title:'早日成为大神'});


// 加载模型
	// 声明集合对象加载模型
	var col =  new Collection([grace1,grace2])

	// 使用add方法加载模型
	var collection1 =  new Collection();
	collection1.add(grace1)



	// 使用 collection1 的 add 方法 ,这个方法可以添加已有的模型 , 或者也可以直接在这里指定模型的属性，去创建一个新的模型 , 
	// 然后添加到这个集合里面, 因为在定义这个集合的时候已经指定了跟这个集合相对应的模型是 Grace 所以，在这里新添加的模型自动就会是一个 Grace 类型的模型。

	// 如果要添加的模型在集合里面已经存在了，默认，会跳这去.
	// collection1.add({id:1, title: '今天天气不错'})
	// // 们也可以给 add 方法添加一个选项参数，把 merge 设置成 true ，这样要添加的模型会跟已有的模型合并到一块儿 
	// collection1.add({id:1, title: '今天天气不错'},{merge:true});


//删除集合中的模型
	var col1 =  new Collection([grace1,grace2,grace3]);
	// 使用remove()方法移除指定模型
	col1.remove(grace1);

	// 使用清空集合里面的模型
	col1.reset();

	// 替换现有模型 ,如下为清楚集合里的模型且替换(新增)传入的模型
	col1.reset(grace1,grace2)

	//删除集合中最后一个模型返回被删除掉的模型
	col1.pop();

	//删除集合中的第一个模型返回被删除掉的模型
	col1.shift();

	// 在往集合里添加模型的时候，我们可以控制模型在集合里面的位置。比如我们可以给 add 方法添加一个 at 选项， 这个选项的值就是模型在集合里面的索引号。
	var col2 =  new Collection(grace1);

	// 想把模型追加到集合的最后一个位置上，可以使用 push 方法
	col2.push(grace3);

	// 想要把模型添加到集合的最开始的位置上，可以使用 unshift 方法
	col2.unshift(grace2);


	// 在 add 方法里面，可以指定一个 at 选项参数，它可以决定添加的模型在集合中的索引号 ... 也就是，你可以决定这个模型在集合中出现的位置。
	var col3 =  new Collection([grace1,grace2]);
	// 1为索引号
	col3.add(grace3,{at:1})