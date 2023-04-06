<template>
  <div>
    <br>
    <el-row>

      <el-button type="primary" @click="ExamlogVisible = true" round>新增考试</el-button>
      <!-- <el-button type="danger" @click="deleteByIds" round>批量删除</el-button> -->
    </el-row>
    <br>
    <el-divider></el-divider>
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" max-height="400">

      <el-table-column label="序号" type="index">
      </el-table-column>

      <el-table-column label="名称" prop="examName" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="日期" prop="date" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="状态" prop="status" header-align="center" align="center">

      </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>

        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="selectClearData(scope.row)">考试详情</el-button>
          <el-button size="mini" @click="addClassVisible = true; getClassData(scope.row)">添加班级</el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
        </template>
      </el-table-column>

    </el-table>
    <!--    新增窗口-->
    <el-dialog title="新增考试" :visible.sync="ExamlogVisible" width="18%">

      <el-form ref="form" :model="addExam" label-width="40px" style="text-align: center">
        <el-form-item label="名称">
          <el-input v-model="addExam.examName"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="addExam.description" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form>
          <div class="block">
            <span class="demonstration">日期</span>
            <el-date-picker v-model="addExam.date" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form>
        <el-form-item label="">
          <el-switch v-model="addExam.status" active-text="立即开启" inactive-text="稍后开启">
          </el-switch>
        </el-form-item>
        <el-button type="primary" @click="handleaddExam">提交</el-button>
        <el-button @click="ExamlogVisible = false">取消</el-button>
      </el-form>

      <span slot="footer" class="dialog-footer">

      </span>
    </el-dialog>
    <!-- 考试详情 -->
    <template>
      <el-divider></el-divider>
      <el-table :data="clearData" style="width: 100%" max-height="300">
        <el-table-column label="序号" type="index">
        </el-table-column>
        <el-table-column prop="className" label="班级名称" width="180">
        </el-table-column>
        <el-table-column prop="count" label="已填写人数">
        </el-table-column>
        <el-table-column prop="score" label="分数">
        </el-table-column>
        <el-table-column prop="total" label="总人数">
        </el-table-column>
      </el-table>
    </template>
    <!-- 新增班级 -->
    <el-dialog title="新增班级" :visible.sync="addClassVisible" width="18%">
      <el-cascader placeholder="试试搜索：班级" ref="cascader" @change="changeSelectArr" :options="classData"
        :props="{ multiple: true }" filterable></el-cascader>
      <el-button type="primary" @click="addClassExam()">提交</el-button>
      <el-button @click="addClassVisible = false; cancelClassExam(val)">取消</el-button>
      <span slot="footer" class="dialog-footer">
      </span>
    </el-dialog>
  </div>
</template>


<script>
axios.defaults.withCredentials = true;
import axios from 'axios';
const ip ="124.222.86.127";
const port_back =":54321";
import { ColorPicker } from 'element-ui';
export default {
  name: 'Exam',
  data() {
    return {
      tableData: {
        id: '',
        examName: '',
        date: '',
        status: ''
      },
      ExamlogVisible: false,
      addExam: {
        examName: '',
        description: '',
        date: '',
        status: '',
      },
      search: '',
      clearData: [{
        examName: '',
        classId: '',
        className: '',
        count: '',
        score: '',
        total: ''
      }],
      addClass: {
        classId: '',
        classNmae: '',
        school: '',
      },
      addClassVisible: false,
      // options: [],
      classData: [], // 班级总列表
      selectArrs: [],
    }
  },


  mounted() {
    this.selectAll();
    this.testlogin();
  },
  methods: {
    sleep(n) {
      var start = new Date().getTime();
      while (true) {
        if (new Date().getTime() - start > n) {
          break;
        }
      }

    },

    testlogin() {

      axios.get("http://" + ip +port_back+ "/admin").then(res => {

        if (res.data.code == 20001) {



        } else if (res.data.code == 20000) {

          this.$message.error("请先登录!!!");

          this.sleep(1000);



          location.href = "http://"+ip+":8888/#/login"
        }

      })
    },



    // 初始化查询
    selectAll() {
      axios.get("http://" + ip +port_back+ "/exams").then(res => {
        this.tableData = res.data.data;
      })
    },
    // 添加考试
    handleaddExam() {
      if(this.addExam.status=true){
        this.addExam.status=1;
      }else{
        this.addExam.status=0;
      }

      axios.post("http://" + ip+port_back + "/exams", this.addExam).then(res => {
        this.ExamlogVisible = false;
        if (res.data.code == 20011) {
          this.$message.success('添加成功');
          this.selectAll();
        } else if (res.data.code == 20010) {
          this.$message.error('添加失败');
        }
        this.addExam.examName = '',
          this.addExam.description = '',
          this.addExam.date = '',
          this.addExam.status = ''
      })
    },
    // 查询考试的详细数据
    selectClearData(row) {

      axios.get("http://" + ip + port_back+"/texam/" + row.id).then(res => {
        this.clearData = res.data.data;
        for (let index = 0; index < this.clearData.length; index++) {
                            const element = this.clearData[index];
                            if(element.count<element.total){
                                element.score = '未统计完成'
                            }
                            
                        }
      })
    },
    //查询班级信息
    getClassData(row) {
      this.classData = []
      let cou = 0
      axios.get("http://" + ip+port_back + "/class").then(res => {
        for (let x = 0; x < res.data.data.length; x++) {
          for (let y = 0; y < this.classData.length; y++) {
            if (res.data.data[x].school === this.classData[y].label) {
              this.classData[y].children.push({
                value: res.data.data[x].classId,
                disabled: false,
                label: res.data.data[x].className
              });
              cou += 1
            }
          }
          if (cou == 0) {
            this.classData.push({
              value: x,
              label: res.data.data[x].school,
              children: [{
                value: res.data.data[x].classId,
                label: res.data.data[x].className
              }]
            })
          }
          cou = 0
        }
      })
      axios.get("http://" + ip +port_back+ "/texam/" + row.id).then(res => {
        for (let index = 0; index < res.data.data.length; index++) {
          for (let x = 0; x < this.classData.length; x++) {
            let k = 0;
            for (let y = 0; y < this.classData[x].children.length; y++) {
              if (res.data.data[index].classId == this.classData[x].children[y].value) {
                this.classData[x].children[y].disabled = true
                k += 1
                break
              }
            };
            if (k == 1)
              break
          };
        };
      })
      this.selectArrs = []
      this.selectArrs.push(row.id)

    },
    //获取选中的节点数据对象
    changeSelectArr(val) {
      let node_arr = this.$refs['cascader'].getCheckedNodes();
      let select_a = [];
      select_a.push(this.selectArrs[0])
      for (let key in node_arr) {
        if (!node_arr[key]['data'].children) {
          select_a.push(node_arr[key]['data'].value)
        }
      }
      this.selectArrs = select_a
    },
    //添加班级
    addClassExam() {
      axios.post("http://" + ip +port_back+ "/texam/", this.selectArrs).then(res => {
        if (res.data.code == 20011) {
          this.$message.success('添加成功');
          this.selectAll();
        } else if (res.data.code == 20010) {
          this.$message.error('添加失败');
        }

      })
      this.addClassVisible = false;
    },
    cancelClassExam() {
      console.log(this.$refs['cascader'])
      this.$refs['cascader'].panel.clearCheckedNodes();
    },

  }
}



</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

