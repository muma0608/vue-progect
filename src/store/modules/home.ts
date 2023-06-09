// 管理分类导航的数据
import { defineStore } from 'pinia'
import { TResult, TRes,TCate} from '@/types/catagory'


// defineStore  用来定义一个 store
let useHomeStore = defineStore('home', {
  state: () => ({
    // 这里是申明变量的地方
    test: '我是测试数据',
    themeStatus: false,
    bannerList: '这是第一条数据',
    titleList: '首页信息',
    cateList: {} as TCate[],
  }),
  // 异步操作
  actions: {
    //写方法的地方
    changeTheme() {
      this.themeStatus = !this.themeStatus
    },
    changeString() {
      this.bannerList = '这是第二条数据'
    },
    changeCate() {
      const res: TRes<TCate[]> = {
        code: '200',
        msg: 'success',
        result: [ 
          { id: '1', name: '手机数码', open: false },
          { id: '2', name: '电脑办公', open: true },
        ]
      }
      this.cateList = res.result
    },
    
     

    //异步请求接口数据
    // async getBannerList() {
    //   const res = await request.get<TResult<TSwiper[]>>('/home/banner')
    //   // 保存数据至变量中
    //   this.bannerList = res.data.result
    // },

    // 显示二级分类结构
    show(id: string) {
      // 找到 id 对应的一级分类
      // const cate = this.cateList.find(item => item.id === id)
      // 修改二级分类结构的状态
      // cate!.open = true
    },
    // 隐藏二级分类结构
    hide(id: string) {
      // 找到 id 对应的一级分类
      // const cate = this.cateList.find(item => item.id === id)
      // 修改二级分类结构的状态
      // cate!.open = false
    },
  },
  getters: {

  }
})
export default useHomeStore

