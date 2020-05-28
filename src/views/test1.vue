<template>
  <div class="wrapper"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  created () {},
  mounted () {
    this.test7()
  },
  computed: {},
  methods: {
    // 网络模型
    test7 () {
      var scene = new THREE.Scene()
      const geometry = new THREE.BoxGeometry(100, 100, 100)
      // var material = new THREE.MeshLambertMaterial({
      //   color: 0x0000ff
      // })
      var material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        specular: 0x444444, // 高光部分的颜色
        shininess: 20 // 高光部分的亮度，默认30
      })
      var mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
      // 点光源
      var point = new THREE.PointLight(0x444444)
      point.position.set(200, 100, 100) // 点光源位置
      scene.add(point) // 点光源添加到场景中
      this.abs(scene)
    },
    // 线模型
    test6 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.SphereGeometry(100, 25, 25)// 球体
      // 直线基础材质对象
      // var material = new THREE.LineBasicMaterial({
      //   color: 0x0000ff
      // })
      // var line = new THREE.Line(geometry, material) // 线模型对象
      // 虚线材质对象：产生虚线效果
      var material = new THREE.LineDashedMaterial({
        color: 0x0000ff,
        dashSize: 10, // 显示线段的大小。默认为3。
        gapSize: 5 // 间隙的大小。默认为1
      })
      var line = new THREE.Line(geometry, material) // 线模型对象
      //  computeLineDistances方法  计算LineDashedMaterial所需的距离数组
      line.computeLineDistances()
      scene.add(line) // 点模型添加到场景中
      this.abs(scene)
    },
    test5 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BoxGeometry(100, 100, 100)
      console.log(geometry)
      geometry.translate(50, 0, 0)
      // geometry.rotateX(Math.PI / 4)
      // geometry.scale(0.5, 1.5, 2)
      // 遍历几何体的face属性
      geometry.faces.forEach(face => {
        // 设置三角面face三个顶点的颜色
        face.vertexColors = [
          new THREE.Color(0xffff00),
          new THREE.Color(0xff00ff),
          new THREE.Color(0x00ffff)
        ]
      })
      var material = new THREE.MeshBasicMaterial({
        // color: 0x0000ff,
        vertexColors: THREE.FaceColors
        // wireframe:true,//线框模式渲染
      })
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      // mesh.scale.set(0.5, 1.5, 2)
      scene.add(mesh) // 网格模型添加到场景中
      this.abs(scene)
    },
    // mesh模型
    test4 () {
      var geometry1 = new THREE.BoxGeometry(100, 100, 100)
      console.log(24, geometry1)
      var scene = new THREE.Scene()
      var geometry = new THREE.Geometry() // 声明一个几何体对象Geometry

      var p1 = new THREE.Vector3(0, 0, 0) // 顶点1坐标
      var p2 = new THREE.Vector3(0, 100, 0) // 顶点2坐标
      var p3 = new THREE.Vector3(50, 0, 0) // 顶点3坐标
      var p4 = new THREE.Vector3(0, 0, 100) // 顶点4坐标
      // 顶点坐标添加到geometry对象
      geometry.vertices.push(p1, p2, p3, p4)

      // Face3构造函数创建一个三角面 根据前面坐标索引
      var face1 = new THREE.Face3(0, 1, 2)
      // 三角面每个顶点的法向量
      var n1 = new THREE.Vector3(0, 0, -1) // 三角面Face1顶点1的法向量
      var n2 = new THREE.Vector3(0, 0, -1) // 三角面2Face2顶点2的法向量
      var n3 = new THREE.Vector3(0, 0, -1) // 三角面3Face3顶点3的法向量
      // 设置三角面Face3三个顶点的法向量
      face1.vertexNormals.push(n1, n2, n3)

      // 三角面2
      var face2 = new THREE.Face3(0, 2, 3)
      // 设置三角面法向量
      face2.normal = new THREE.Vector3(0, -1, 0)

      // 三角面face1、face2添加到几何体中
      geometry.faces.push(face1, face2)
      var material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.VertexColors, // 以顶点颜色为准
        // color: 0x0000ff, // 三角面颜色
        side: THREE.DoubleSide // 两面可见
      }) // 材质对象
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      this.abs(scene)
    },
    // 设置Geometry顶点位置、顶点颜色数据 只对点、线模型
    test3 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      var p1 = new THREE.Vector3(50, 0, 0) // 顶点1坐标
      var p2 = new THREE.Vector3(0, 70, 0) // 顶点2坐标
      var p3 = new THREE.Vector3(80, 70, 0) // 顶点3坐标
      // 顶点坐标添加到geometry对象
      geometry.vertices.push(p1, p2, p3)
      // Color对象表示顶点颜色数据
      var color1 = new THREE.Color(0x00ff00) // 顶点1颜色——绿色
      var color2 = new THREE.Color(0xff0000) // 顶点2颜色——红色
      var color3 = new THREE.Color(0x0000ff) // 顶点3颜色——蓝色
      // 顶点颜色数据添加到geometry对象
      geometry.colors.push(color1, color2, color3)
      // 材质对象
      var material = new THREE.PointsMaterial({
        // color: 0xffff00,
        vertexColors: THREE.VertexColors, // 以顶点颜色为准
        // side: THREE.DoubleSide // 两面可见
        size: 10.0
      })
      var points = new THREE.Points(geometry, material) // 点模型对象
      scene.add(points) // 点对象添加到场景中
      this.abs(scene)
    },
    // 测试法向量
    test2 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BufferGeometry() // 声明一个空几何体对象
      // 类型数组创建顶点位置position数据
      var vertices = new Float32Array([
        0, 0, 0, // 顶点1坐标
        50, 0, 0, // 顶点2坐标
        0, 100, 0, // 顶点3坐标

        0, 0, 0, // 顶点4坐标
        0, 0, 100, // 顶点5坐标
        50, 0, 0 // 顶点6坐标

      ])
      // 创建属性缓冲区对象
      var attribue = new THREE.BufferAttribute(vertices, 3) // 3个为一组
      // 设置几何体attributes属性的位置position属性
      geometry.attributes.position = attribue
      // var material = new THREE.MeshPhongMaterial({
      //   color: 0x0000ff,
      //   specular: 0x4488ee,
      //   shininess: 12
      // })// 材质对象添加高光效果 镜面反射
      var material = new THREE.MeshBasicMaterial({
        color: 0x0000ff // 三角面颜色
      }) // 材质对象
      var normals = new Float32Array([
        0, 0, 1, // 顶点1法向量
        0, 0, 1, // 顶点2法向量
        0, 0, 1, // 顶点3法向量

        0, 1, 0, // 顶点4法向量
        0, 1, 0, // 顶点5法向量
        0, 1, 0 // 顶点6法向量
      ])
      // 设置几何体attributes属性的位置normal属性
      geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      // 点光源
      var point = new THREE.PointLight(0x444444)
      point.position.set(200, 100, 100) // 点光源位置
      scene.add(point) // 点光源添加到场景中
      // // 环境光
      // var ambient = new THREE.AmbientLight(0x444444)
      // scene.add(ambient)
      this.abs(scene)
    },
    test1 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BufferGeometry() // 创建一个Buffer类型几何体对象
      // 类型数组创建顶点数据
      var vertices = new Float32Array([
        0, 0, 0, // 顶点1坐标
        50, 0, 0, // 顶点2坐标
        0, 100, 0, // 顶点3坐标
        0, 0, 10, // 顶点4坐标
        0, 0, 100, // 顶点5坐标
        50, 0, 10 // 顶点6坐标
      ])
      console.log(Array.isArray(vertices)) // false
      console.log(vertices, vertices.length)
      // 创建属性缓冲区对象BufferAttribute
      var attribue = new THREE.BufferAttribute(vertices, 3) // 3个为一组，表示一个顶点的xyz坐标
      console.log(attribue)
      // 设置几何体attributes属性的位置属性
      geometry.attributes.position = attribue
      // 三角面(网格)渲染模式
      // 类型数组创建顶点颜色color数据
      var colors = new Float32Array([
        1, 0, 0, // 顶点1颜色
        0, 1, 0, // 顶点2颜色
        0, 0, 1, // 顶点3颜色

        1, 1, 0, // 顶点4颜色
        0, 1, 1, // 顶点5颜色
        1, 0, 1 // 顶点6颜色
      ])
      // 设置几何体attributes属性的颜色color属性 几何体的顶点颜色
      geometry.attributes.color = new THREE.BufferAttribute(colors, 3)
      var material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.VertexColors, // 以顶点颜色为准
        // color: 0x0000ff, // 三角面颜色
        side: THREE.DoubleSide // 两面可见
      }) // 材质对象
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      // 点渲染模式
      // 类型数组创建顶点颜色color数据
      // var colors = new Float32Array([
      //   1, 0, 0, // 顶点1颜色
      //   0, 1, 0, // 顶点2颜色
      //   0, 0, 1, // 顶点3颜色

      //   1, 1, 0, // 顶点4颜色
      //   0, 1, 1, // 顶点5颜色
      //   1, 0, 1 // 顶点6颜色
      // ])
      // // 设置几何体attributes属性的颜色color属性 几何体的顶点颜色
      // geometry.attributes.color = new THREE.BufferAttribute(colors, 3)
      // var material = new THREE.PointsMaterial({
      //   // color: 0xff0000, // 材质的颜色属性color设置模型颜色
      //   vertexColors: THREE.VertexColors, // 以顶点颜色为准
      //   size: 10.0 // 点对象像素尺寸
      // }) // 材质对象
      // var points = new THREE.Points(geometry, material) // 点模型对象
      // scene.add(points) // 点对象添加到场景中
      // 线条渲染模式
      // var material = new THREE.LineBasicMaterial({
      //   color: 0xff0000 // 线条颜色
      // })// 材质对象
      // var line = new THREE.Line(geometry, material)// 线条模型对象
      // scene.add(line)// 线条对象添加到场景中
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
    },
    test () {
      var scene = new THREE.Scene()
      /**
     * 创建网格模型
     */
      // var geometry = new THREE.SphereGeometry(60, 60, 60) // 创建一个球体几何对象
      var geometry = new THREE.IcosahedronGeometry(50) // 创建一个正二十面体
      // var geometry = new THREE.BoxGeometry(100, 100, 100) // 创建一个立方体几何对象Geometry
      var material = new THREE.MeshLambertMaterial({
        color: 0x00ff00
      }) // 材质对象Material
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      /**
     * 光源设置
     */
      // 点光源
      var point = new THREE.PointLight(0xffffff)
      point.position.set(400, 200, 300) // 点光源位置
      scene.add(point) // 点光源添加到场景中
      // 环境光
      var ambient = new THREE.AmbientLight(0x444444)
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
