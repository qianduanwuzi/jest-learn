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
    this.test5()
  },
  computed: {},
  methods: {
    test5 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BoxGeometry(40, 100, 40)
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff
      })
      var mesh = new THREE.Mesh(geometry, material)
      // mesh.position.set(0,0,0)
      scene.add(mesh)

      // 设置产生投影的网格模型
      mesh.castShadow = true

      // 创建一个平面几何体作为投影面
      var planeGeometry = new THREE.PlaneGeometry(300, 200)
      var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x999999
      })
      // 平面网格模型作为投影面
      var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
      scene.add(planeMesh) // 网格模型添加到场景中
      planeMesh.rotateX(-Math.PI / 2) // 旋转网格模型
      planeMesh.position.y = -50 // 设置网格模型y坐标
      // 设置接收阴影的投影面
      planeMesh.receiveShadow = true

      // // 方向光
      // var directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      // // 设置光源位置
      // directionalLight.position.set(60, 100, 40)
      // scene.add(directionalLight)
      // // 设置用于计算阴影的光源对象
      // directionalLight.castShadow = true
      // // 设置计算阴影的区域，最好刚好紧密包围在对象周围
      // // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
      // directionalLight.shadow.camera.near = 0.5
      // directionalLight.shadow.camera.far = 300
      // directionalLight.shadow.camera.left = -50
      // directionalLight.shadow.camera.right = 50
      // directionalLight.shadow.camera.top = 200
      // directionalLight.shadow.camera.bottom = -100
      // // 设置mapSize属性可以使阴影更清晰，不那么模糊
      // // directionalLight.shadow.mapSize.set(1024,1024)
      // console.log(directionalLight.shadow.camera)

      // 聚光光源
      var spotLight = new THREE.SpotLight(0xffffff)
      // 设置聚光光源位置
      spotLight.position.set(150, 90, 50)
      // 设置聚光光源发散角度
      spotLight.angle = Math.PI / 6
      scene.add(spotLight) // 光对象添加到scene场景中
      // 设置用于计算阴影的光源对象
      spotLight.castShadow = true
      // 设置计算阴影的区域，注意包裹对象的周围
      spotLight.shadow.camera.near = 1
      spotLight.shadow.camera.far = 300
      spotLight.shadow.camera.fov = 20
      scene.add(spotLight)
      this.abs(scene)
    },
    test4 () {
      var scene = new THREE.Scene()
      var box = new THREE.BoxGeometry(100, 100, 100)// 创建一个立方体几何对象
      var material = new THREE.MeshLambertMaterial({ color: 0x0000ff })// 材质对象

      var mesh = new THREE.Mesh(box, material)// 网格模型对象
      var mesh2 = mesh.clone()// 克隆网格模型
      mesh.translateX(200)// 网格模型mesh平移
      scene.add(mesh, mesh2)// 网格模型添加到场景中

      // 环境光:环境光颜色RGB成分分别和物体材质颜色RGB成分分别相乘
      // var ambient = new THREE.AmbientLight(0x0000ff)
      // scene.add(ambient)// 环境光对象添加到scene场景中
      // 点光源
      // var point = new THREE.PointLight(0xffffff)
      // // 设置点光源位置，改变光源的位置
      // point.position.set(400, 200, 300)
      // scene.add(point)
      // 平行光 平行光你可以理解为太阳光，从无限远处照射过来
      // var directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      // // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
      // directionalLight.position.set(80, 100, 50)
      // // 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
      // directionalLight.target = mesh2
      // scene.add(directionalLight)
      // 聚光光源
      var spotLight = new THREE.SpotLight(0xffffff)
      // 设置聚光光源位置
      spotLight.position.set(0, 200, 0)
      // 聚光灯光源指向网格模型mesh2
      spotLight.target = mesh2
      // 设置聚光光源发散角度
      spotLight.angle = Math.PI / 2
      scene.add(spotLight)// 光对象添加到scene场景中
      this.abs(scene)
    },
    test3 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BoxGeometry(100, 100, 100)
      // 三角形面渲染模式
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff, // 三角面颜色
        wireframe: true // 网格模型以线条的模式渲染
      }) // 材质对象
      var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      console.log(mesh)
      // // 向量Vector3对象表示方向
      var axis = new THREE.Vector3(1, 1, 1) // x y z
      axis.normalize() // 向量归一化
      // 沿着axis轴表示方向平移100
      mesh.translateOnAxis(axis, 100)
      var axis1 = new THREE.Vector3(0, 1, 0)// 向量axis
      mesh.rotateOnAxis(axis1, Math.PI / 4)// 绕axis轴旋转π/8
      // mesh.position.y = 80
      scene.add(mesh)
      this.abs(scene)
    },
    test2 () {
      var scene = new THREE.Scene()
      var geometry = new THREE.BoxGeometry(100, 100, 100) // 创建一个立方体几何对象Geometry
      // 线条渲染模式
      var material = new THREE.LineBasicMaterial({
        color: 0xff0000 // 线条颜色
      })// 材质对象
      // 创建线模型对象   构造函数：Line、LineLoop、LineSegments
      var line = new THREE.LineSegments(geometry, material)// 线条模型对象
      scene.add(line)
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
      var points = new THREE.Points(geometry, material) // 点模型对象
      scene.add(points)
      // 点光源
      // var point = new THREE.PointLight(0x444444)
      // point.position.set(200, 100, 100) // 点光源位置
      // scene.add(point) // 点光源添加到场景中
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
