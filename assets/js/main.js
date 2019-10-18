window.onload = function () {
    // Vue.component('test', {
    //     template: '<button @click="count++">{{ count }}</button>',
    //     data: () => {
    //         return {
    //             count: 0
    //         }
    //     }
    // });

    var vm = new Vue({
        el: '#app',
        data: {
            taskName: '',
            taskContent: '',
            taskStatus: 'processing',
            taskStatusList: ['processing', 'waiting', 'success'],
            taskData: null,
            s_taskName: '',
            s_taskContent: '',
            s_taskStatus: 'processing',
            modalData: {
                m_id: 0,
                m_taskName: '',
                m_taskContent: '',
            }
        },
        created() {
            this.getTask();
        },
        methods: {
            getTask() {
                axios.get('./getTask.php')
                    .then((res) => {
                        this.taskData = res.data;
                    })
            },
            setTaskID(id) {
                this.modalData = {
                    m_id: id,
                    m_taskName: '',
                    m_taskContent: '',
                    m_taskStatus: 'processing'
                }
            },
            showID() {
                console.log(this.modalData.m_id);
            },
            createTask() {
                if (this.taskName == '' || this.taskContent == '') {
                    alert('');
                } else {
                    axios.post('./createTask.php', {
                            taskName: this.taskName,
                            taskContent: this.taskContent,
                            taskStatus: this.taskStatus
                        })
                        .then((res) => {
                            console.log(res.data);
                        })
                        .then(() => {
                            this.getTask();
                        })
                }
            },
            updateTask() {
                console.log(this.modalData);
                axios.post('./updateTask.php', {
                        taskID: this.modalData.m_id,
                        taskName: this.modalData.m_taskName,
                        taskContent: this.modalData.m_taskContent,
                        taskStatus: this.modalData.m_taskStatus
                    })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .then(() => {
                        this.getTask();
                    })
            },
            searchTask() {
                axios.get('./searchTask.php', {
                        params: {
                            taskName: this.s_taskName,
                            taskContent: this.s_taskContent,
                            taskStatus: this.s_taskStatus
                        }
                    })
                    .then((res) => {
                        this.taskData = res.data;
                    })
            },
            deleteTask(id) {
                if (confirm('確定要刪除嗎?')) {
                    axios.post('./deleteTask.php', {
                            taskID: id
                        })
                        .then((res) => {
                            console.log(res.data);
                        })
                        .then(() => {
                            this.getTask();
                        })
                }
            }
        }
    })
}