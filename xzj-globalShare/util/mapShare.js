
module.exports = {

	onShow() {
		let pages = getCurrentPages();
		console.log(pages, "xiexiexie")
		if (pages.length >= 1 && pages.length!=0) {
			console.log("进入if")
			this.$x.pageRouter = (pages[pages.length - 1]).route 
			switch (this.$x.pageRouter) {
				case 'pages/index/index':
					// console.log('进')
					this.$x.mpShare = {
						title: `主页分享`, // 分享出去默认为小程序名称
						path: `/pages/index/index`, // 默认为当前页面路径
						imageUrl: '' // 默认为当前页面的截图
					}
					break;
					case 'pages/shop/shop':
						// console.log('进')
						this.$x.mpShare = {
							title: `第三个页面分享`, // 分享出去默认为小程序名称
							path: `/pages/index/index`, // 默认为当前页面路径
							imageUrl: '' // 默认为当前页面的截图
						}
						break;
					
				default:
					this.$x.mpShare = {
						title: '其他页面分享', // 默认为小程序名称
						path: `/pages/index/index`, // 默认为当前页面路径
						imageUrl: '' // 默认为当前页面的截图
					}
			
			
			
			}
			return
		}
		

	},
	onShareAppMessage() {
		return this.$x.mpShare
	}
}

