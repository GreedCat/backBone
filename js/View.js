
/**
 * 	视图 - View
 */

 	/**
 	 *	在 Backbone 里面的视图，一般不会包含在应用程序上用到的 HTML 标签。它其实是把模型里面的数据展示给用户的一套逻辑。
	 *	在视图里面有一个很重要的属性，叫做 el ，每个视图都得有这个属性 ... 它实际上就是一个 DOM 元素， 
	 *	视图要用它来组织内容，然后一块儿插入到 DOM 里面。默认这个 el 属性的值，是一个 div 标签 ...
	*/

	 var View = Backbone.View.extend({
	 	tagName		:'li',
	 	className	:'item',
	 	id			:'view_item',
	 	attributes	:{
	 		'data-role'	:'list'
	 	},


	 	// 用 Underscore 的 template 方法，指定一下要使用的模板 ,找到页面上的 id 叫是 list-template 的元素 ... 然后得到它里面的内容 ...
	 	template :_.template(jQuery('#list-template').html()),


	 	//视图渲染方法 render ,组织模型数据
	 	render	:function(){
	 		// this ... 表示当前这个视图 ... 调用它的 $el ，这个 $el 会返回一个用 el 元素的 jQuery 的对象，这样我们就可以继续去使用 jQuery 的其它的方法，去处理这个 el 元素
	 		// 这里，我们用一个 html 方法，去设置一下这个 el 属性的元素里面的内容 ... 用一个 this.model ，表示当前视图对象的模型 ... 这个模型就是在实例化这个视图的时候，传递进来的那个
	 		// this.$el.html(this.model.get('title'));

	 		this.$el.html(this.template(this.model.attributes));

	 	},

	 });


	// 创建model ，依赖Model.js中Model实例对象Grace
	var grace = new Grace({
		title	:'欢迎来到backBone模型'
	});

	// 创建视图实例对象
	var view = new View({
		// 这里传入模型实例对象grace,这样在view这个视图中就能访问到grace这个模型中的属性了 , 想要利用这些属性则需要在model实例中定义render(渲染)方法
		model 	:grace
	});