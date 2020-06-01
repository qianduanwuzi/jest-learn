<template>
  <div class="wrapper"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Logo from '@/assets/logo.png'
export default {
  components: {},
  props: {},
  data () {
    return {
      Logo
    }
  },
  created () {},
  mounted () {
    this.test7()
  },
  computed: {},
  methods: {
    test7 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BoxGeometry(100, 100, 100) // 立方体
      // var geometry = new THREE.PlaneGeometry(204, 102, 4, 4); //矩形平面
      // var geometry = new THREE.SphereGeometry(60, 25, 25); //球体
      // var geometry = new THREE.CylinderGeometry(60, 60, 25,25); //圆柱
      //
      // 材质对象1
      var material1 = new THREE.MeshBasicMaterial({
        color: 0xffff3f
      })
      var textureLoader = new THREE.TextureLoader() // 纹理加载器
      var texture = textureLoader.load(this.Logo) // 加载图片，返回Texture对象
      // 材质对象2
      var material2 = new THREE.MeshBasicMaterial({
        map: texture // 设置纹理贴图
        // wireframe:true,
      })
      // 设置材质数组
      var materialArr = [material2, material1, material1, material1, material1, material1]

      // 设置数组材质对象作为网格模型材质参数
      var mesh = new THREE.Mesh(geometry, materialArr) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      this.abs(scene)
    },
    test6 () {
      var scene = new THREE.Scene()
      // 矩形平面，细分数默认1，即2个三角形拼接成一个矩形
      var geometry = new THREE.PlaneGeometry(204, 102)
      /**
 * 遍历uv坐标
 */
      geometry.faceVertexUvs[0].forEach(elem => {
        elem.forEach(Vector2 => {
          // 所有的UV坐标全部设置为一个值
          Vector2.set(0.4, 0.4)
        })
      })
      var material = new THREE.MeshBasicMaterial({
        color: 0x0000ff
        // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
      }) // 材质对象Material
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      this.abs(scene)
    },
    test5 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.PlaneGeometry(204, 102, 4, 4) // 矩形平面
      // var geometry = new THREE.BoxGeometry(100, 100, 100) // 立方体
      // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
      var textureLoader = new THREE.TextureLoader()
      // geometry.faceVertexUvs[0].forEach(elem => {
      //   elem.forEach(Vector2 => {
      //     // 所有的UV坐标全部设置为一个值
      //     Vector2.set(0.4, 0.4)
      //   })
      // })

      var t0 = new THREE.Vector2(0, 1) // 图片左下角
      var t1 = new THREE.Vector2(0, 0) // 图片右下角
      var t2 = new THREE.Vector2(1, 0) // 图片右上角
      var t3 = new THREE.Vector2(1, 1) // 图片左上角
      var uv1 = [t0, t1, t3] // 选中图片一个三角区域像素——用于映射到一个三角面
      var uv2 = [t1, t2, t3] // 选中图片一个三角区域像素——用于映射到一个三角面
      // 设置第五、第六个三角形面对应的纹理坐标
      geometry.faceVertexUvs[0][4] = uv1
      geometry.faceVertexUvs[0][5] = uv2

      // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
      textureLoader.load(this.Logo, (texture) => {
        console.log(texture)
        var material = new THREE.MeshBasicMaterial({
          // color: 0x0000ff,
          // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
          map: texture // 设置颜色贴图属性值
        }) // 材质对象Material
        var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
        scene.add(mesh) // 网格模型添加到场景中
        this.abs(scene)
        // 纹理贴图加载成功后，调用渲染函数执行渲染操作
        // render();
      })
    },
    test4 () {
      var scene = new THREE.Scene()
      /**
* 创建扫描网格模型
*/
      var shape = new THREE.Shape()
      /** 四条直线绘制一个矩形轮廓 */
      shape.moveTo(0, 0)// 起点
      shape.lineTo(0, 10)// 第2点
      shape.lineTo(10, 10)// 第3点
      shape.lineTo(10, 0)// 第4点
      shape.lineTo(0, 0)// 第5点
      /** 创建轮廓的扫描轨迹(3D样条曲线) */
      var curve = new THREE.SplineCurve3([
        new THREE.Vector3(-10, -50, -50),
        new THREE.Vector3(10, 0, 0),
        new THREE.Vector3(8, 50, 50),
        new THREE.Vector3(-5, 0, 100)
      ])
      var geometry = new THREE.ExtrudeGeometry(// 拉伸造型
        shape, // 二维轮廓
        // 拉伸参数
        {
          bevelEnabled: false, // 无倒角
          extrudePath: curve, // 选择扫描轨迹
          steps: 50// 扫描方向细分数
        }
      )
      var material = new THREE.MeshNormalMaterial({
        color: 0x00ff00, // 三角面颜色
        side: THREE.DoubleSide// 两面可见
      })// 材质对象
      // material.wireframe = true// 线条模式渲染(查看细分数)
      var mesh = new THREE.Mesh(geometry, material)// 旋转网格模型对象
      scene.add(mesh)// 旋转网格模型添加到场景中
      this.abs(scene)
    },
    test3 () {
      var scene = new THREE.Scene()
      var shape = new THREE.Shape()
      /** 四条直线绘制一个矩形轮廓 */
      shape.moveTo(0, 0)// 起点
      shape.lineTo(0, 100)// 第2点
      shape.lineTo(100, 100)// 第3点
      shape.lineTo(100, 0)// 第4点
      shape.lineTo(0, 0)// 第5点
      var geometry = new THREE.ExtrudeGeometry(// 拉伸造型
        shape, // 二维轮廓
        // 拉伸参数
        {
          amount: 120, // 拉伸长度
          bevelEnabled: false// 无倒角
        }
      )
      var material = new THREE.MeshNormalMaterial({
        color: 0x00ff00, // 三角面颜色
        side: THREE.DoubleSide// 两面可见
      })// 材质对象
      // material.wireframe = true// 线条模式渲染(查看细分数)
      var mesh = new THREE.Mesh(geometry, material)// 旋转网格模型对象
      scene.add(mesh)// 旋转网格模型添加到场景中
      this.abs(scene)
    },
    test2 () {
      var scene = new THREE.Scene()
      // 圆弧与直线连接
      var shape = new THREE.Shape() // Shape对象
      var R = 50
      // 绘制一个半径为R、圆心坐标(0, 0)的半圆弧
      shape.absarc(0, 0, R, 0, Math.PI)
      // 从圆弧的一个端点(-R, 0)到(-R, -200)绘制一条直线
      shape.lineTo(-R, -200)
      // 绘制一个半径为R、圆心坐标(0, -200)的半圆弧
      shape.absarc(0, -200, R, Math.PI, 2 * Math.PI)
      // 从圆弧的一个端点(R, -200)到(-R, -200)绘制一条直线
      shape.lineTo(R, 0)
      var geometry = new THREE.ShapeGeometry(shape, 30)
      var material = new THREE.MeshPhongMaterial({
        color: 0xff0000 // 三角面颜色
        // side: THREE.DoubleSide// 两面可见
      })// 材质对象
      // material.wireframe = true// 线条模式渲染(查看细分数)
      var mesh = new THREE.Mesh(geometry, material)// 旋转网格模型对象
      scene.add(mesh)// 旋转网格模型添加到场景中
      this.abs(scene)
    },
    test1 () {
      var scene = new THREE.Scene()
      // var points = [
      //   new THREE.Vector2(-50, -50),
      //   new THREE.Vector2(-60, 0),
      //   new THREE.Vector2(0, 50),
      //   new THREE.Vector2(60, 0),
      //   new THREE.Vector2(50, -50),
      //   new THREE.Vector2(-50, -50)
      // ]
      // // 通过顶点定义轮廓
      // var shape = new THREE.Shape(points)
      // // shape可以理解为一个需要填充轮廓
      // // 所谓填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
      // var geometry = new THREE.ShapeGeometry(shape, 25)

      // 通过shpae基类path的方法绘制轮廓（本质也是生成顶点）
      var shape = new THREE.Shape()
      shape.absarc(0, 0, 100, 0, 2 * Math.PI)// 圆弧轮廓
      console.log(shape.getPoints(15))// 查看shape顶点数据
      var geometry = new THREE.ShapeGeometry(shape, 25)

      var material = new THREE.MeshPhongMaterial({
        color: 0x0000ff, // 三角面颜色
        side: THREE.DoubleSide// 两面可见
      })// 材质对象
      // material.wireframe = true// 线条模式渲染(查看细分数)
      var mesh = new THREE.Mesh(geometry, material)// 旋转网格模型对象
      scene.add(mesh)// 旋转网格模型添加到场景中
      this.abs(scene)
    },
    test () {
      var scene = new THREE.Scene()
      /**
 * 创建旋转网格模型
 */
      // var points = [
      //   new THREE.Vector2(50, 60),
      //   new THREE.Vector2(25, 0),
      //   new THREE.Vector2(50, -60)
      // ]
      // var geometry = new THREE.LatheGeometry(points, 30)
      var shape = new THREE.Shape()// 创建Shape对象
      var points = [// 定位定点
        new THREE.Vector2(50, 60),
        new THREE.Vector2(25, 0),
        new THREE.Vector2(50, -60)
      ]
      shape.splineThru(points)// 顶点带入样条插值计算函数
      var splinePoints = shape.getPoints(20)// 插值计算细分数20
      var geometry = new THREE.LatheGeometry(splinePoints, 30)// 旋转造型
      var material = new THREE.MeshPhongMaterial({
        color: 0x0000ff, // 三角面颜色
        side: THREE.DoubleSide// 两面可见
      })// 材质对象
      material.wireframe = true// 线条模式渲染(查看细分数)
      var mesh = new THREE.Mesh(geometry, material)// 旋转网格模型对象
      scene.add(mesh)// 旋转网格模型添加到场景中
      this.abs(scene)
    },
    abs (scene) {
      // 辅助辅助三维坐标系AxisHelper
      var axisHelper = new THREE.AxesHelper(250)
      scene.add(axisHelper)
      /**
     * 相机设置
     */
      var width = window.innerWidth // 窗口宽度
      var height = window.innerHeight // 窗口高度
      var k = width / height // 窗口宽高比
      var s = 200 // 三维场景显示范围控制系数，系数越大，显示越小
      // 创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      camera.position.set(250, 300, 200) // 设置相机位置
      camera.lookAt(scene.position) // 设置相机方向(指向的场景对象)
      /**
     * 创建渲染器对象
     */
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)// 设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1) // 设置背景颜色
      document.body.appendChild(renderer.domElement) // body元素中插入canvas对象
      // 执行渲染操作   指定场景、相机作为参数
      function render () {
        renderer.render(scene, camera)// 执行渲染操作
        // mesh.rotateY(0.01)// 每次绕y轴旋转0.01弧度
        requestAnimationFrame(render)// 请求再次执行渲染函数render
      }
      render()
      // renderer.render(scene, camera)
      var controls = new OrbitControls(camera, renderer.domElement)// 创建控件对象
      // controls.addEventListener('change', render)// 监听鼠标、键盘事件
      console.log(controls)
    }
  },
  watch: {}
}
</script>
<style lang="stylus" scoped>
</style>
