<template>
    <div>
        <br>
        <!--  搜索 表单-->

        <el-form :inline="true" :model="searchUser" class="demo-form-inline">

            <el-form-item label="姓名">
                <el-input v-model="searchUser.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="searchUser.className" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="学校">
                <el-input v-model="searchUser.school" placeholder="学校"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <!--  x新增 删除-->
        <el-row>

            <el-button type="primary" @click="dialogVisible = true" round>新增用户</el-button>
            <el-button type="primary" @click="addClassVisible = true" round>新增班级</el-button>
            <el-button type="danger" @click="deleteByIds" round>批量删除</el-button>
        </el-row>

        <!--    新增窗口-->
        <el-dialog title="新增用户" :visible.sync="dialogVisible" width="30%">

            <el-form ref="form" :model="addUser" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="addUser.name"></el-input>
                </el-form-item>


                <el-form-item label="学号">
                    <el-input v-model="addUser.username"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-select v-model="addUser.classId" placeholder="班级">
                        <el-option v-for="item in classNames" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学校">
                    <el-select v-model="addUser.school" placeholder="班级">
                        <el-option v-for="item in schools" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>





                <el-form-item>
                    <el-button type="primary" @click="addaUser">提交</el-button>
                    <el-button @click="dialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">

            </span>
        </el-dialog>
        <!--    新增班级-->
        <el-dialog title="新增班级" :visible.sync="addClassVisible" width="25%">

            <el-form ref="form" :model="addClassData" label-width="80px">
                <el-form-item label="序号">
                    <el-input :maxlength="10" v-model="addClassData.classId"></el-input>
                </el-form-item>


                <el-form-item label="班级">
                    <el-input v-model="addClassData.className"></el-input>
                </el-form-item>
                <el-form-item label="学校">
                    <el-select v-model="addClassData.school" placeholder="">
                        <el-option v-for="item in schools" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addClass">提交</el-button>
                    <el-button @click="addClassVisible = false">取消</el-button>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">

            </span>
        </el-dialog>


        <!--    数据表格-->
        <template>

            <el-table :data="alluser" style="width: 100%" :row-class-name="tableRowClassName"
                @selection-change="handleSelectionChange">

                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180" align="center">

                </el-table-column>
                <el-table-column prop="className" label="班级" width="180" align="center">
                </el-table-column>

                <el-table-column prop="school" label="所属学校" align="center">
                </el-table-column>

                <el-table-column prop="id" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="updateById(scope.row)" type="primary" size="small">修改</el-button>
                        <el-button @click="deleteById(scope.row)" type="danger" size="small">删除</el-button>
                    </template>
                    <!--                    <el-button type="primary"  @click="update(brandName)">修改</el-button>-->
                    <!--                    <el-button type="danger">删除</el-button>-->


                </el-table-column>

            </el-table>
        </template>
        <!--    修改窗口-->
        <el-dialog title="修改用户信息" :visible.sync="dialogVisible2" width="30%">

            <el-form ref="form" :model="addUser" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="addUser.name"></el-input>
                </el-form-item>


                <el-form-item label="学号">
                    <el-input v-model="addUser.username"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-select v-model="addUser.classId" placeholder="班级">
                        <el-option v-for="item in classNames" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学校">
                    <el-select v-model="addUser.school" placeholder="班级">
                        <el-option v-for="item in schools" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>



                <el-form-item>
                    <el-button type="primary" @click="addaUser">提交</el-button>
                    <el-button @click="dialogVisible2 = false">取消</el-button>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">

            </span>
        </el-dialog>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="totalCount"
            :current-page="currentPage" :page-sizes="[5, 10]" :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>

        
    </div>
</template>

<script>
axios.defaults.withCredentials = true;
const ip ="124.222.86.127";
const port_back =":54321";
import axios from 'axios'
export default {
    name: 'user',
    data() {
        return {
            //修改数据
            updateUser: {
                id: '',
                name: '',
                username: '',
                classId: "",
                className: "",
                school: "",

            },
            //总条数
            totalCount: 100,

            selectIds: [],
            currentPage: 1,
            pageSize: 10,


            //新增对话框默认值（不展示 false）
            dialogVisible: false,
            dialogVisible2: false,

            alluser: {
                id: '',
                username: '',
                password: '',
                name: "",
                className: "",
                classId: "",
                school: "",

            },
            addUser: {
                id: "",
                username: "",
                name: "",
                classId: "",
                className: "",
                school: "",

            },
            addClassVisible: false,
            addClassData: {
                classId: "",
                className: "",
                school: "",
            },


            searchUser: {

                name: '',
                className: '',
                school: '',


            },

            classNames: [],

            schools: [
            ],




            // /复选框数据
            multipleSelection: [],
            deleteIds: [],

        }
    },
    mounted() {
        this.testlogin();
        this.selectAll();
        this.getClasses();


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
        getClasses() {
            axios.get("http://+"+ip+port_back+"+/class").then(res => {

                for (var index1 = 0; index1 < res.data.data.length; index1++) {

                    this.classNames.push({ label: res.data.data[index1].className, value: res.data.data[index1].classId });

                    if (index1 > 0) {
                        for (let index = 0; index < this.schools.length; index++) {
                            if (res.data.data[index1].school == this.schools[index].label) {
                                break;
                            } else {
                                if (index == this.schools.length - 1) {
                                    this.schools.push({ label: res.data.data[index1].school, value: res.data.data[index1].school })
                                }

                            }

                        }
                    } else {
                        
                        this.schools.push({ label: res.data.data[index1].school, value: res.data.data[index1].school })
                    }

                }
            })
        },
        selectAll() {

            axios.post("http://"+ip+port_back+"/user/?currentPage=" + this.currentPage + "&size=" + this.pageSize, this.searchUser).then(res => {

                this.alluser = res.data.data.rows;
                this.totalCount = Number(res.data.data.totalCount);

            })
        },
        onSubmit() {
            this.selectAll();

        },
        //分页
        handleSizeChange(val) {

            this.pageSize = val;
            this.selectAll();
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.selectAll();
        },
        addaUser() {

            for (let index = 0; index < this.classNames.length; index++) {

                const element = this.classNames[index].value;

                if (element === this.addUser.classId) {

                    this.addUser.className = this.classNames[index].label;

                }

            }

            axios.post("http://"+ip+port_back+"/user/1", this.addUser).then(res => {
                this.dialogVisible = false;
                this.addUser.id = '',
                    this.addUser.name = '',
                    this.addUser.username = '',
                    this.addUser.className = '',
                    this.addUser.classId = '',
                    this.addUser.school = '',
                    this.addUser.exam = ''


                if (res.data.code === 20011) {
                    this.$message.success('添加成功');
                    this.selectAll();

                } else if (res.data.code === 20010) {
                    this.$message.error('添加失败');
                } else if (res.data.code === 20031) {
                    this.$message.success('修改成功');
                    this.selectAll();
                }
                else if (res.data.code === 20030) {
                    this.$message.error('修改失败');
                }


            })


        }
        ,
        updateById(row) {


            this.addUser.id = row.id;
            this.addUser.name = row.name;
            this.addUser.classId = row.classId;
            this.addUser.username = row.username;
            this.addUser.className = row.className;
            this.addUser.school = row.school;
            this.addUser.exam = row.exam;

            this.dialogVisible2 = true;
        },
        deleteById(row) {
            this.deleteIds[0] = row.id;
            this.deleteuser();
        },
        deleteuser() {

            axios.delete("http://"+ip+port_back+"/user/", { data: this.deleteIds }).then(res => {
                if (res.data.code === 20021) {
                    this.$message.success('删除成功');
                    this.selectAll();
                } else {
                    this.$message.error('删除失败');
                }

            })
            this.deleteIds = [];
            this.selectAll();
        },
        handleSelectionChange(val) {       
            this.multipleSelection = val;
        },
        deleteByIds() {
            if (this.multipleSelection.length > 0) {

                for (let index = 0; index < this.multipleSelection.length; index++) {
                    
                    this.deleteIds[index] = this.multipleSelection[index].id;



                }
                this.deleteuser();
            } else {
                this.$message.error('请选择数据')
            }
            this.deleteIds = [];
        },
        addClass() {

            axios.post("http://"+ip+port_back+"/class", this.addClassData).then(res => {
                this.addClassVisible = false;
                this.addClassData.className = '',
                    this.addClassData.classId = '',
                    this.addClassData.school = ''


                if (res.data.code === 20011) {
                    this.$message.success('添加成功');

                } else if (res.data.code === 20010) {
                    this.$message.error('添加失败');
                } else if (res.data.code === 20031) {
                    this.$message.success('修改成功');
                }
                else if (res.data.code === 20030) {
                    this.$message.error('修改失败');
                }


            })


        }
    }
}
</script>