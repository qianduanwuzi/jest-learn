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
    test7 () {
      var scene = new THREE.Scene()
      // 创建多段线条的顶点数据
      var p1 = new THREE.Vector3(-85.35, -35.36)
      var p2 = new THREE.Vector3(-50, 0, 0)
      var p3 = new THREE.Vector3(0, 50, 0)
      var p4 = new THREE.Vector3(50, 0, 0)
      var p5 = new THREE.Vector3(85.35, -35.36)
      // 创建线条一：直线
      const line1 = new THREE.LineCurve3(p1, p2)
      // 重建线条2：三维样条曲线
      var curve = new THREE.CatmullRomCurve3([p2, p3, p4])
      // 创建线条3：直线
      const line2 = new THREE.LineCurve3(p4, p5)
      var CurvePath = new THREE.CurvePath()// 创建CurvePath对象
      CurvePath.curves.push(line1, curve, line2)// 插入多段线条
      // 通过多段曲线路径创建生成管道
      // 通过多段曲线路径创建生成管道，CCurvePath：管道路径
      var geometry2 = new THREE.TubeGeometry(CurvePath, 100, 5, 25, false)
      // 材质对象
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      })
      // 线条模型对象
      var line = new THREE.Line(geometry2, material)
      scene.add(line) // 线条对象添加到场景中
      this.abs(scene)
    },
    test6 () {
      var scene = new THREE.Scene()
      // 创建管道成型的路径(3D样条曲线)
      var path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-10, -50, -50),
        new THREE.Vector3(10, 0, 0),
        new THREE.Vector3(8, 50, 50),
        new THREE.Vector3(-5, 0, 100)
      ])
      // var path = new THREE.LineCurve3(new THREE.Vector3(0, 100, 0), new THREE.Vector3(0, 0, 0))
      // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
      var geometry = new THREE.TubeGeometry(path, 40, 2, 25)
      // 材质对象
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      })
      var line = new THREE.Line(geometry, material)
      scene.add(line) // 线条对象添加到场景中

      // var material1 = new THREE.MeshLambertMaterial({
      //   color: 0x0000ff,
      //   opacity: 0.7,
      //   // wireframe: true,
      //   transparent: true
      // }) // 材质对象Material漫反射
      // var material1 = new Three.MeshPhongMaterial({
      //   color: 0x0000ff,
      //   specular: 0x4488ee,
      //   shininess: 12
      // })// 材质对象添加高光效果 镜面反射
      // var mesh1 = new THREE.Mesh(geometry, material1) // 网格模型对象Mesh
      // scene.add(mesh1) // 网格模型添加到场景中
      this.abs(scene)
    },
    test5 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      // 绘制一个U型轮廓
      var R = 80// 圆弧半径
      var arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true)
      // 半圆弧的一个端点作为直线的一个端点
      var line1 = new THREE.LineCurve(new THREE.Vector2(R, 200, 0), new THREE.Vector2(R, 0, 0))
      var line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0, 0), new THREE.Vector2(-R, 200, 0))
      // 创建组合曲线对象CurvePath
      var CurvePath = new THREE.CurvePath()
      // 把多个线条插入到CurvePath中
      CurvePath.curves.push(line1, arc, line2)
      // 分段数200
      var points = CurvePath.getPoints(200)
      // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      geometry.setFromPoints(points)
      // 材质对象
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      })
      // 线条模型对象
      var line = new THREE.Line(geometry, material)
      scene.add(line) // 线条对象添加到场景中
      this.abs(scene)
    },
    test4 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      // 三维样条曲线  Catmull-Rom算法
      // var curve = new THREE.CatmullRomCurve3([
      //   new THREE.Vector3(-50, 20, 90),
      //   new THREE.Vector3(-10, 40, 40),
      //   new THREE.Vector3(0, 0, 0),
      //   new THREE.Vector3(60, -60, 0),
      //   new THREE.Vector3(70, 0, 80)
      // ])
      // 贝塞尔曲线 p1、p3是起始点，p2是控制点，控制点不在贝塞尔曲线上。
      var p1 = new THREE.Vector3(-80, 0, 0)
      var p2 = new THREE.Vector3(20, 100, 0)
      var p3 = new THREE.Vector3(80, 0, 0)
      // 三维二次贝赛尔曲线
      var curve = new THREE.QuadraticBezierCurve3(p1, p2, p3)
      // getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数组
      var points = curve.getPoints(100) // 分段数100，返回101个顶点
      console.log(points)
      // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      geometry.setFromPoints(points)
      // 材质对象
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      })
      // 线条模型对象
      var line = new THREE.Line(geometry, material)
      scene.add(line)
      this.abs(scene)
    },
    test3 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      var p1 = new THREE.Vector3(50, 0, 10) // 顶点1坐标
      var p2 = new THREE.Vector3(0, 70, 0) // 顶点2坐标
      // 三维直线LineCurve3
      var LineCurve = new THREE.LineCurve3(p1, p2)
      // 二维直线LineCurve
      // var LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 0), new THREE.Vector2(0, 70))
      var pointArr = LineCurve.getPoints(10)
      var material = new THREE.LineBasicMaterial({
        color: 0xffff00
      })// 材质对象
      geometry.setFromPoints(pointArr)
      // 线条模型对象
      var line = new THREE.Line(geometry, material)
      scene.add(line) // 线条对象添加到场景中
      this.abs(scene)
    },
    test2 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      // 参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
      var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI)
      // getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
      var points = arc.getPoints(50)// 分段数50，返回51个顶点
      // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      geometry.setFromPoints(points)
      // 材质对象
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      })
      // 线条模型对象
      var line = new THREE.Line(geometry, material)
      scene.add(line) // 线条对象添加到场景中
      this.abs(scene)
    },
    test1 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BoxGeometry(100, 100, 100) // 创建一个立方体几何对象Geometry
      // 点渲染模式
      var material = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 5.0 // 点对象像素尺寸
      }) // 材质对象
      var mesh = new THREE.Mesh(geometry, material)
      // mesh的本地坐标设置为(50, 0, 0)
      mesh.position.set(50, 0, 0)
      var group = new THREE.Group()
      // group本地坐标设置和mesh一样设置为(50, 0, 0)
      // mesh父对象设置position会影响得到mesh的世界坐标
      group.position.set(50, 0, 0)
      group.add(mesh)
      scene.add(group)

      // .position属性获得本地坐标
      console.log('本地坐标', mesh.position)

      // getWorldPosition()方法获得世界坐标
      // 该语句默认在threejs渲染的过程中执行,如果渲染之前想获得世界矩阵属性、世界位置属性等属性，需要通过代码更新
      scene.updateMatrixWorld(true)
      var worldPosition = new THREE.Vector3()
      mesh.getWorldPosition(worldPosition)
      console.log('世界坐标', worldPosition)
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
