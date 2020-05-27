<template>
    <div>
      <div id="container"></div>
    </div>
</template>

<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  name: 'Test',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    test1 () {
      var scene = new Three.Scene()
      // 立方体网格模型
      var geometry1 = new Three.BoxGeometry(100, 100, 100)
      var material1 = new Three.MeshLambertMaterial({
        color: 0x0000ff,
        opacity: 0.7,
        // wireframe: true,
        transparent: true
      }) // 材质对象Material漫反射
      // var material1 = new Three.MeshPhongMaterial({
      //   color: 0x0000ff,
      //   specular: 0x4488ee,
      //   shininess: 12
      // })// 材质对象添加高光效果 镜面反射
      var mesh1 = new Three.Mesh(geometry1, material1) // 网格模型对象Mesh
      scene.add(mesh1) // 网格模型添加到场景中

      // 球体网格模型
      var geometry2 = new Three.SphereGeometry(60, 40, 40)
      var material2 = new Three.MeshLambertMaterial({
        color: 0xff00ff
      })
      var mesh2 = new Three.Mesh(geometry2, material2) // 网格模型对象Mesh
      mesh2.translateY(110) // 球体网格模型沿Y轴正方向平移120
      scene.add(mesh2)

      // 圆柱网格模型
      var geometry3 = new Three.CylinderGeometry(50, 50, 100, 25)
      var material3 = new Three.MeshLambertMaterial({
        color: 0xffff00
      })
      var mesh3 = new Three.Mesh(geometry3, material3) // 网格模型对象Mesh
      // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
      mesh3.position.set(110, 0, 0)// 设置mesh3模型对象的xyz坐标为120,0,0
      scene.add(mesh3) //
      /**
     * 光源设置
     */
      // 点光源
      var point = new Three.PointLight(0xffffff)
      point.position.set(200, 0, 0) // 点光源位置
      scene.add(point) // 点光源添加到场景中
      // 环境光
      var ambient = new Three.AmbientLight(0x444444)
      scene.add(ambient)
      // 辅助辅助三维坐标系AxisHelper
      var axisHelper = new Three.AxesHelper(250)
      scene.add(axisHelper)
      /**
     * 相机设置
     */
      var width = window.innerWidth // 窗口宽度
      var height = window.innerHeight // 窗口高度
      var k = width / height // 窗口宽高比
      var s = 200 // 三维场景显示范围控制系数，系数越大，显示越小
      // 创建相机对象
      var camera = new Three.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      camera.position.set(250, 300, 200) // 设置相机位置
      camera.lookAt(scene.position) // 设置相机方向(指向的场景对象)
      /**
     * 创建渲染器对象
     */
      var renderer = new Three.WebGLRenderer()
      renderer.setSize(width, height)// 设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1) // 设置背景颜色
      document.body.appendChild(renderer.domElement) // body元素中插入canvas对象
      // 执行渲染操作   指定场景、相机作为参数
      function render () {
        renderer.render(scene, camera)// 执行渲染操作
        // mesh1.rotateY(0.01)// 每次绕y轴旋转0.01弧度
        requestAnimationFrame(render)// 请求再次执行渲染函数render
      }
      render()
      // 控制鼠标事件 平移 旋转 缩放
      var controls = new OrbitControls(camera, renderer.domElement)// 创建控件对象
      console.log(controls)
    },
    test () {
      var scene = new Three.Scene()
      /**
     * 创建网格模型
     */
      // var geometry = new Three.SphereGeometry(60, 60, 60) // 创建一个球体几何对象
      var geometry = new Three.IcosahedronGeometry(50) // 创建一个正二十面体
      // var geometry = new Three.BoxGeometry(100, 100, 100) // 创建一个立方体几何对象Geometry
      var material = new Three.MeshLambertMaterial({
        color: 0x00ff00
      }) // 材质对象Material
      var mesh = new Three.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      /**
     * 光源设置
     */
      // 点光源
      var point = new Three.PointLight(0xffffff)
      point.position.set(400, 200, 300) // 点光源位置
      scene.add(point) // 点光源添加到场景中
      // 环境光
      var ambient = new Three.AmbientLight(0x444444)
      scene.add(ambient)
      // console.log(scene)
      // console.log(scene.children)
      /**
     * 相机设置
     */
      var width = window.innerWidth // 窗口宽度
      var height = window.innerHeight // 窗口高度
      var k = width / height // 窗口宽高比
      var s = 200 // 三维场景显示范围控制系数，系数越大，显示越小
      // 创建相机对象
      var camera = new Three.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      camera.position.set(250, 300, 200) // 设置相机位置
      camera.lookAt(scene.position) // 设置相机方向(指向的场景对象)
      /**
     * 创建渲染器对象
     */
      var renderer = new Three.WebGLRenderer()
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
    },
    init: function () {
      const container = document.getElementById('container')
      console.log(container.clientWidth)
      // 相机
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1
      // 场景
      this.scene = new Three.Scene()
      // 创建一个立方体几何对象Geometry 长宽高
      const geometry = new Three.BoxGeometry(0.5, 0.2, 0.2)
      // 材质对象Material
      const material = new Three.MeshNormalMaterial({ color: 0x00ff00 })
      // 网格模型对象Mesh
      this.mesh = new Three.Mesh(geometry, material)
      // 网格模型添加到场景中
      this.scene.add(this.mesh)
      // 渲染器
      this.renderer = new Three.WebGLRenderer({ antialias: true })
      // 设置渲染区域尺寸
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      // 执行渲染操作   指定场景、相机作为参数
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    // this.init()
    // this.animate()

    this.test1()
  }
}
</script>
<style scoped>
  #container {
    height: 400px;
  }
</style>
